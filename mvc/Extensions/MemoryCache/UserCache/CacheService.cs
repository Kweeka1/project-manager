using System.Text.Json;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Caching.Memory;
using mvc.Entities.EmailConfirmations;

namespace mvc.Extensions.MemoryCache.UserCache;

public class CacheService : ICacheService
{
    private readonly IDistributedCache _cache;

    public CacheService(IDistributedCache cache)
    {
        _cache = cache;
    }

    public async Task<T> Get<T>(string key)
    {
        string? obj = await _cache.GetStringAsync(key);

        if (string.IsNullOrEmpty(obj))
        {
            return default;
        }

        return JsonSerializer.Deserialize<T>(obj);
    }

    public async Task Set<T>(string key, T value)
    {
        var options = new DistributedCacheEntryOptions();
        
        if (typeof(T).GetHashCode() == typeof(ToConfirm).GetHashCode())
        {
            options.AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(20);
        }

        await _cache.SetStringAsync(key, JsonSerializer.Serialize(value), options);
    }

    public async Task Remove(string key)
    {
        await _cache.RemoveAsync(key);
    }
}