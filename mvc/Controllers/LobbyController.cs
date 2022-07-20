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
    public class Lobby : Controller
    ***REMOVED***
        private readonly ILogger<Lobby> _logger;

        public Lobby(ILogger<Lobby> logger)
        ***REMOVED***
            _logger = logger;
    ***REMOVED***

        public IActionResult Index()
        ***REMOVED***
            return View("Index");
    ***REMOVED***
***REMOVED***
***REMOVED***