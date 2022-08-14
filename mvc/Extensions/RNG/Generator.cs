using System.Security.Cryptography;

namespace mvc.Extensions.RNG;

public static class BytesGenerator
{
    public static string Generate()
    {
        using (var rng = RandomNumberGenerator.Create())
        {
            var bytes = new byte[64];
            rng.GetBytes(bytes);
            return Convert.ToBase64String(bytes);
        }
    }
}