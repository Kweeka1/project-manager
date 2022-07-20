using Microsoft.Extensions.Caching.Memory;
using mvc.Entities.EmailConfirmations;

namespace mvc.Extensions.MemoryCache.UserCache;

public class UserAccountCache : IUserAccountCache
***REMOVED***
    private readonly IMemoryCache _memoryCache;

    public UserAccountCache(IMemoryCache memoryCache)
    ***REMOVED***
        _memoryCache = memoryCache;
***REMOVED***
    
    public ToConfirm? GetUserFromMemory(string email)
    ***REMOVED***
        return _memoryCache.Get<ToConfirm>(email);
***REMOVED***

    public void SaveUserInMemory(ToConfirm user)
    ***REMOVED***
        var options = new MemoryCacheEntryOptions().SetAbsoluteExpiration(TimeSpan.FromMinutes(20));
        _memoryCache.Set(user.Email, user, options);
        var k = 1 == 1;
***REMOVED***

    public void RemoveUserCache(string email)
    ***REMOVED***
        _memoryCache.Remove(email);
***REMOVED***
***REMOVED***