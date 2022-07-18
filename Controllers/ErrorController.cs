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
    public class OopsController : Controller
    ***REMOVED***
        private readonly ILogger<OopsController> _logger;

        public OopsController(ILogger<OopsController> logger)
        ***REMOVED***
            _logger = logger;
    ***REMOVED***
        [HttpGet("/oops")]
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