using System.Diagnostics;
using AutoMapper;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.EntityFrameworkCore;
using MimeKit;
using mvc.Entities;
using mvc.Entities.EmailConfirmations;
using mvc.Entities.UserEntity;
using mvc.Extensions.RNG;
using mvc.Models.User;
using mvc.Models.User.Request;
using mvc.Models.User.Response;
using mvc.Repositories.Interfaces;
using bcrypt = BCrypt.Net.BCrypt;

namespace mvc.Repositories.Services
{
    class UserServices : IUserServices
    {
        private readonly ILogger<UserServices> _logger;
        private readonly ProjectContext _context;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        public UserServices(ILogger<UserServices> logger, ProjectContext context, IMapper mapper, IConfiguration config)
        {
            _context = context;
            _logger = logger;
            _mapper = mapper;
            _config = config;
        }
        public async Task<string?> RegisterUser(Registration request)
        {
            
            if (request is null) return null;

            User? IsAlreadyRegistered = await _context.Users.FirstOrDefaultAsync(user => user.Email == request.Email);

            if (IsAlreadyRegistered is not null) return null;
            
            var salt = bcrypt.GenerateSalt();
            var pass1 = bcrypt.HashPassword(request.Password, salt);
            var pass2 = bcrypt.HashPassword(request.ConfirmPassword, salt);

            if (pass1 != pass2) return null;

            ToConfirm userInfo = new ToConfirm()
            {
                Email = request.Email,
                Username = request.Username,
                Password = pass1,
                Hash = BytesGenerator.Generate(),
                IssuedAt = DateTime.UtcNow,
                ExpiresAt = DateTime.UtcNow.AddMinutes(20),
                FirstName = request.FirstName,
                LastName = request.LastName,
                UserId = Guid.NewGuid(),
            };
            
            await _context.EmailConfirmations.AddAsync(userInfo);
            await _context.SaveChangesAsync();
            
            return userInfo.Email;
        }

        public async Task<bool> ActivateAccount(string email, string token)
        {
            ToConfirm? userInfo = await 
                _context.EmailConfirmations.FirstOrDefaultAsync(user => user.Email == email && user.Hash == token);

            if (userInfo is null || userInfo.IsExpired) return false;

            var newUser = _mapper.Map<User>(userInfo);
            newUser.CreatedOn = DateTime.UtcNow;
            newUser.UserId = userInfo.UserId;
            newUser.IsActive = true;

            _context.EmailConfirmations.Remove(userInfo);
            await _context.Users.AddAsync(newUser);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<UserDetails?> AuthenticateUser(Login request)
        {
            if (request is null) return null;

            var user = await _context.Users.FirstOrDefaultAsync(user => user.Email == request.Email);

            if (user is not null || bcrypt.Verify(request.Password, user.Password))
            {
                return _mapper.Map<UserDetails>(user);
            }

            return null;
        }

        public async Task<EmailArgs?> CheckUserForConfirmation(string email)
        {
            ToConfirm? userInfo = await _context.EmailConfirmations.FirstOrDefaultAsync(user => user.Email == email);

            if (userInfo is null) return null;

            return _mapper.Map<EmailArgs>(userInfo);
        }

        public async Task<bool> DeleteUser(Guid userId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(user => user.UserId == userId);

            if (user is null) return false;
                
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<UserDetails?> UpdateUser(Update request)
        {
            User? user = await _context.Users.FirstOrDefaultAsync(user => user.Email == request.Email);

            if (user is null) return null;

            User newUser = _mapper.Map<User>(request);

            if (!string.IsNullOrEmpty(request.Password))
            {
                var salt = bcrypt.GenerateSalt();
                var pass1 = bcrypt.HashPassword(request.Password, salt);
                var pass2 = bcrypt.HashPassword(request.ConfirmPassword, salt);

                if (pass1 != pass2) return null;

                newUser.Password = pass1;
            }

            newUser.CreatedOn = user.CreatedOn;
            newUser.UserId = user.UserId;

            await _context.Users.AddAsync(newUser);
            await _context.SaveChangesAsync();

            return _mapper.Map<UserDetails>(newUser);
        }

        public async Task SendConfirmationEmail(string emailAddress, string firstname, string lastname, string hash)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Pro Collab", "procollab@zohomail.com"));
            message.To.Add(new MailboxAddress($"{firstname} {lastname}", emailAddress));
            message.Subject = "Confirmation email";
            message.Body = new TextPart ("plain"){ Text = $"Hey {firstname} {lastname},\nTo start using your account please click the link below:\n\nhttps://localhost:7159/activate?email={emailAddress}&token={hash}\n\nIf you have any questions, please email us at procollab@zohomail.com\n\nHave a nice day!\nPro Collab Team"};
            using (var client = new SmtpClient())
            {
                await client.ConnectAsync("smtp.zoho.com", 587, SecureSocketOptions.StartTls);
                await client.AuthenticateAsync("procollab@zohomail.com", "*********");
                await client.SendAsync(message);
                await client.DisconnectAsync(true);
            }
        }
    }
}