using System.Diagnostics;
using AutoMapper;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using MimeKit;
using mvc.Entities;
using mvc.Entities.EmailConfirmations;
using mvc.Entities.UserEntity;
using mvc.Extensions.MemoryCache;
using mvc.Extensions.MemoryCache.UserCache;
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
        private readonly IUserAccountCache _userAccountCache;
        private readonly ProjectContext _context;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        public UserServices(ILogger<UserServices> logger, ProjectContext context, IMapper mapper, IConfiguration config, IUserAccountCache userAccountCache)
        {
            _context = context;
            _logger = logger;
            _mapper = mapper;
            _config = config.GetSection("EmailConfig");
            _userAccountCache = userAccountCache;
        }
        public async Task<string?> RegisterUser(Registration request)
        {
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
                Token = BytesGenerator.Generate(),
                FirstName = request.FirstName,
                LastName = request.LastName,
                UserId = Guid.NewGuid(),
            };
            
            _userAccountCache.SaveUserInMemory(userInfo);
            
            return userInfo.Email;
        }

        public async Task<bool> ActivateAccount(string email, string token)
        {
            ToConfirm? userInfo = _userAccountCache.GetUserFromMemory(email);

            if (userInfo is null || userInfo.Token != token) return false;

            var newUser = _mapper.Map<User>(userInfo);
            newUser.CreatedOn = DateTime.UtcNow;
            newUser.UserId = userInfo.UserId;
            newUser.IsConfirmed = true;
            newUser.IsDeactivationRequested = false;

            _userAccountCache.RemoveUserCache(email);
            await _context.Users.AddAsync(newUser);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<UserDetails?> AuthenticateUser(Login request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(user => user.Email == request.Email);

            if (user is not null || bcrypt.Verify(request.Password, user?.Password))
            {
                return _mapper.Map<UserDetails>(user);
            }

            return null;
        }

        public ToConfirm? CheckUserForConfirmation(string email)
        {
            ToConfirm? userInfo = _userAccountCache.GetUserFromMemory(email);
            _logger.LogInformation($"From check email {userInfo?.Email}");
            if (userInfo is null) return null;

            return userInfo;
        }

        public async Task<bool> DeleteUser(Guid userId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(user => user.UserId == userId);

            if (user is null) return false;

            user.IsDeactivationRequested = true;
            user.DeactivationRequestedOn = DateTime.UtcNow;
                
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
    }
}