using System.Security.Cryptography;

namespace mvc.Extensions.RNG;

public static class BytesGenerator
***REMOVED***
    public static string Generate()
    ***REMOVED***
        using (var rng = RandomNumberGenerator.Create())
        ***REMOVED***
            var bytes = new byte[64];
            rng.GetBytes(bytes);
            return Convert.ToBase64String(bytes);
    ***REMOVED***
***REMOVED***
***REMOVED***