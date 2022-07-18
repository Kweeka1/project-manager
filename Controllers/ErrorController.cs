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
    public class OopsController : Controller
    {
        private readonly ILogger<OopsController> _logger;

        public OopsController(ILogger<OopsController> logger)
        {
            _logger = logger;
        }
        [HttpGet("/oops")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("PageNotFound")]
        public IActionResult PageNotFound(string? path)
        {
            ViewBag.path = path;
            return View();
        }
    }
}