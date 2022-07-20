using Microsoft.Extensions.Caching.Memory;
using mvc.Entities.EmailConfirmations;

namespace mvc.Extensions.MemoryCache.UserCache;

public class UserAccountCache : IUserAccountCache
{
    private readonly IMemoryCache _memoryCache;

    public UserAccountCache(IMemoryCache memoryCache)
    {
        _memoryCache = memoryCache;
    }
    
    public ToConfirm? GetUserFromMemory(string email)
    {
        return _memoryCache.Get<ToConfirm>(email);
    }

    public void SaveUserInMemory(ToConfirm user)
    {
        var options = new MemoryCacheEntryOptions().SetAbsoluteExpiration(TimeSpan.FromMinutes(20));
        _memoryCache.Set(user.Email, user, options);
        var k = 1 == 1;
    }

    public void RemoveUserCache(string email)
    {
        _memoryCache.Remove(email);
    }
}