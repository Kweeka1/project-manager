using mvc.Entities.EmailConfirmations;

namespace mvc.Extensions.MemoryCache.UserCache;

public interface IUserAccountCache
***REMOVED***
     ToConfirm? GetUserFromMemory(string username);
     void SaveUserInMemory(ToConfirm user); 
     void RemoveUserCache(string email);
***REMOVED***