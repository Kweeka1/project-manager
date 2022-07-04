using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mvc.Extensions.ExceptionHandler
{
    public class CustomExceptionHandler
    {
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;

        public CustomExceptionHandler(RequestDelegate next, ILoggerFactory logFactory)
        {
            _next = next;
            _logger = logFactory.CreateLogger("CustomExceptionHandler");
        }

        public async Task Invoke(HttpContext httpContext)
        {
            await _next(httpContext);
            int statusCode = httpContext.Response.StatusCode;
            
            _logger.LogInformation("reached middleware");
            
            _logger.LogInformation(statusCode.ToString());
            if (statusCode == 404) 
            {
                string? originalPath = httpContext.Request.Path.Value;
                //httpContext.Request.Path = (PathString)"/Error/PageNotFound";
                //httpContext.Items["originalPath"] = originalPath;
                httpContext.Response.Redirect($"/Error/PageNotFound?path={originalPath}");
            } 
            
            // calling next middleware
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class CustomExceptionHandlerExtensions
    {
        public static IApplicationBuilder UseCustomExceptionHandler(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<CustomExceptionHandler>();
        }
    } 
}