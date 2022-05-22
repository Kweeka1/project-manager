using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace mvc.Controllers
***REMOVED***
    [Route("[controller]")]
    public class ErrorController : Controller
    ***REMOVED***
        private readonly ILogger<ErrorController> _logger;

        public ErrorController(ILogger<ErrorController> logger)
        ***REMOVED***
            _logger = logger;
    ***REMOVED***
        [HttpGet("/Error")]
        public IActionResult Index()
        ***REMOVED***
            _logger.LogInformation("error");
            return View();
    ***REMOVED***

        [HttpGet("PageNotFound")]
        public IActionResult PageNotFound()
        ***REMOVED***
            var url = HttpContext.Items["originalPath"] as string;
            _logger.LogInformation(url);
            ViewBag.UnkownPage = url ?? "Empty";
            return View();
    ***REMOVED***
***REMOVED***
***REMOVED***