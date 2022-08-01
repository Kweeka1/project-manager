using System.Text.Json;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Caching.Memory;
using mvc.Entities.EmailConfirmations;

namespace mvc.Extensions.MemoryCache.UserCache;

public class UserAccountCache : ICacheService
***REMOVED***
    private readonly IDistributedCache _cache;

    public UserAccountCache(IDistributedCache cache)
    ***REMOVED***
        _cache = cache;
***REMOVED***

    public async Task<T> Get<T>(string key)
    ***REMOVED***
        string? obj = await _cache.GetStringAsync(key);

        if (string.IsNullOrEmpty(obj))
        ***REMOVED***
            return default;
    ***REMOVED***

        return JsonSerializer.Deserialize<T>(obj);
***REMOVED***

    public async Task Set<T>(string key, T value)
    ***REMOVED***
        var options = new DistributedCacheEntryOptions();
        
        if (typeof(T).GetHashCode() == typeof(ToConfirm).GetHashCode())
        ***REMOVED***
            options.AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(20);
    ***REMOVED***

        await _cache.SetStringAsync(key, JsonSerializer.Serialize(value), options);
***REMOVED***
***REMOVED***