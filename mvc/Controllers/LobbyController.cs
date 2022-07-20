using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace mvc.Controllers
{
    [Route("[controller]")]
    public class Lobby : Controller
    {
        private readonly ILogger<Lobby> _logger;

        public Lobby(ILogger<Lobby> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View("Index");
        }
    }
}