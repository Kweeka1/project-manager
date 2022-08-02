using mvc.Entities.EmailConfirmations;
using mvc.Models.User.Request;
using mvc.Models.User.Response;
using mvc.Entities.UserEntity;
using mvc.Models.User;

namespace mvc.Repositories.Interfaces
{
    public interface IUserServices
    {
        Task<string?> RegisterUser(Registration request);
        Task<bool> ActivateAccount(string email, string token);
        Task<UserDetails?> AuthenticateUser(Login request);
        Task<ToConfirm?> CheckUserForConfirmation(string email);
        Task<bool> DeleteUser(Guid userId);
        Task<UserDetails?> UpdateUser(Update request);
    }
}