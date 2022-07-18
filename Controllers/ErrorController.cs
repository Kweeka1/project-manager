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
        
        [HttpGet("")]
        public IActionResult Index()
        ***REMOVED***
            return View();
    ***REMOVED***

        [HttpGet("PageNotFound")]
        public IActionResult PageNotFound(string? path)
        ***REMOVED***
            ViewBag.path = path;
            return View();
    ***REMOVED***
***REMOVED***
***REMOVED***