using mvc.Entities.EmailConfirmations;

namespace mvc.Extensions.MemoryCache.UserCache;

public interface ICacheService
***REMOVED***
     Task<T> Get<T>(string key);
     Task Set<T>(string key, T value);

     Task Remove(string key);
***REMOVED***