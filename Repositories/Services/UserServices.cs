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
***REMOVED***
    class UserServices : IUserServices
    ***REMOVED***
        private readonly ILogger<UserServices> _logger;
        private readonly ProjectContext _context;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        public UserServices(ILogger<UserServices> logger, ProjectContext context, IMapper mapper, IConfiguration config)
        ***REMOVED***
            _context = context;
            _logger = logger;
            _mapper = mapper;
            _config = config;
    ***REMOVED***
        public async Task<string?> RegisterUser(Registration request)
        ***REMOVED***
            
            if (request is null) return null;

            User? IsAlreadyRegistered = await _context.Users.FirstOrDefaultAsync(user => user.Email == request.Email);

            if (IsAlreadyRegistered is not null) return null;
            
            var salt = bcrypt.GenerateSalt();
            var pass1 = bcrypt.HashPassword(request.Password, salt);
            var pass2 = bcrypt.HashPassword(request.ConfirmPassword, salt);

            if (pass1 != pass2) return null;

            ToConfirm userInfo = new ToConfirm()
            ***REMOVED***
                Email = request.Email,
                Username = request.Username,
                Password = pass1,
                Hash = BytesGenerator.Generate(),
                IssuedAt = DateTime.UtcNow,
                ExpiresAt = DateTime.UtcNow.AddMinutes(20),
                FirstName = request.FirstName,
                LastName = request.LastName,
                UserId = Guid.NewGuid(),
        ***REMOVED***;
            
            await _context.EmailConfirmations.AddAsync(userInfo);
            await _context.SaveChangesAsync();
            
            return userInfo.Email;
    ***REMOVED***

        public async Task<bool> ActivateAccount(string email, string token)
        ***REMOVED***
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
    ***REMOVED***

        public async Task<UserDetails?> AuthenticateUser(Login request)
        ***REMOVED***
            if (request is null) return null;

            var user = await _context.Users.FirstOrDefaultAsync(user => user.Email == request.Email);

            if (user is not null || bcrypt.Verify(request.Password, user.Password))
            ***REMOVED***
                return _mapper.Map<UserDetails>(user);
        ***REMOVED***

            return null;
    ***REMOVED***

        public async Task<EmailArgs?> CheckUserForConfirmation(string email)
        ***REMOVED***
            ToConfirm? userInfo = await _context.EmailConfirmations.FirstOrDefaultAsync(user => user.Email == email);

            if (userInfo is null) return null;

            return _mapper.Map<EmailArgs>(userInfo);
    ***REMOVED***

        public async Task<bool> DeleteUser(Guid userId)
        ***REMOVED***
            var user = await _context.Users.FirstOrDefaultAsync(user => user.UserId == userId);

            if (user is null) return false;
                
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return true;
    ***REMOVED***

        public async Task<UserDetails?> UpdateUser(Update request)
        ***REMOVED***
            User? user = await _context.Users.FirstOrDefaultAsync(user => user.Email == request.Email);

            if (user is null) return null;

            User newUser = _mapper.Map<User>(request);

            if (!string.IsNullOrEmpty(request.Password))
            ***REMOVED***
                var salt = bcrypt.GenerateSalt();
                var pass1 = bcrypt.HashPassword(request.Password, salt);
                var pass2 = bcrypt.HashPassword(request.ConfirmPassword, salt);

                if (pass1 != pass2) return null;

                newUser.Password = pass1;
        ***REMOVED***

            newUser.CreatedOn = user.CreatedOn;
            newUser.UserId = user.UserId;

            await _context.Users.AddAsync(newUser);
            await _context.SaveChangesAsync();

            return _mapper.Map<UserDetails>(newUser);
    ***REMOVED***

        public async Task SendConfirmationEmail(string emailAddress, string firstname, string lastname, string hash)
        ***REMOVED***
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Pro Collab", "procollab@zohomail.com"));
            message.To.Add(new MailboxAddress($"***REMOVED***firstname***REMOVED*** ***REMOVED***lastname***REMOVED***", emailAddress));
            message.Subject = "Confirmation email";
            message.Body = new TextPart ("plain")***REMOVED*** Text = $"Hey ***REMOVED***firstname***REMOVED*** ***REMOVED***lastname***REMOVED***,\nTo start using your account please click the link below:\n\nhttps://localhost:7159/activate?email=***REMOVED***emailAddress***REMOVED***&token=***REMOVED***hash***REMOVED***\n\nIf you have any questions, please email us at procollab@zohomail.com\n\nHave a nice day!\nPro Collab Team"***REMOVED***;
            using (var client = new SmtpClient())
            ***REMOVED***
                await client.ConnectAsync("smtp.zoho.com", 587, SecureSocketOptions.StartTls);
                await client.AuthenticateAsync("procollab@zohomail.com", "*********");
                await client.SendAsync(message);
                await client.DisconnectAsync(true);
        ***REMOVED***
    ***REMOVED***
***REMOVED***
***REMOVED***