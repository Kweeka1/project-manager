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
    public class ErrorController : Controller
    {
        private readonly ILogger<ErrorController> _logger;

        public ErrorController(ILogger<ErrorController> logger)
        {
            _logger = logger;
        }
        [HttpGet("/Error")]
        public IActionResult Index()
        {
            _logger.LogInformation("error");
            return View();
        }

        [HttpGet("PageNotFound")]
        public IActionResult PageNotFound()
        {
            var url = HttpContext.Items["originalPath"] as string;
            _logger.LogInformation(url);
            ViewBag.UnkownPage = url ?? "Empty";
            return View();
        }
    }
}