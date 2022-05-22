using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mvc.Extensions.ExceptionHandler
***REMOVED***
    public class CustomExceptionHandler
    ***REMOVED***
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;

        public CustomExceptionHandler(RequestDelegate next, ILoggerFactory logFactory)
        ***REMOVED***
            _next = next;

            _logger = logFactory.CreateLogger("CustomExceptionHandler");
    ***REMOVED***

        public async Task Invoke(HttpContext httpContext)
        ***REMOVED***
            await _next(httpContext);
            int statusCode = httpContext.Response.StatusCode;
            
            _logger.LogInformation("reached middleware");
            
            _logger.LogInformation(statusCode.ToString());
            if (statusCode == 404) 
            ***REMOVED***

                string? originalPath = httpContext.Request.Path.Value;
                httpContext.Request.Path = (PathString)"/Error/PageNotFound";
                httpContext.Items["originalPath"] = originalPath;
                httpContext.Response.Redirect($"/Error/PageNotFound?path=***REMOVED***originalPath***REMOVED***");
        ***REMOVED*** 
            
            // calling next middleware
    ***REMOVED***
***REMOVED***

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class CustomExceptionHandlerExtensions
    ***REMOVED***
        public static IApplicationBuilder UseCustomExceptionHandler(this IApplicationBuilder builder)
        ***REMOVED***
            return builder.UseMiddleware<CustomExceptionHandler>();
    ***REMOVED***
***REMOVED*** 
***REMOVED***