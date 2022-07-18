using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mvc.Extensions.ExceptionHandler
***REMOVED***
    public class CustomExceptionHandler
    ***REMOVED***
        private readonly RequestDelegate _next;
        private readonly ILogger<CustomExceptionHandler> _logger;

        public CustomExceptionHandler(RequestDelegate next, ILogger<CustomExceptionHandler> logger)
        ***REMOVED***
            _next = next;
            _logger = logger;
    ***REMOVED***

        public async Task Invoke(HttpContext httpContext)
        ***REMOVED***
            await _next(httpContext);
            
            if (httpContext.Response.StatusCode == 404) 
            ***REMOVED***
                string? originalPath = httpContext.Request.Path.Value;
                httpContext.Response.Redirect($"/Oops/PageNotFound?path=***REMOVED***originalPath***REMOVED***");
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