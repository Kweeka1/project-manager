using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mvc.Models;

namespace mvc.Controllers;
public class HomeController : Controller
***REMOVED***
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    ***REMOVED***
        _logger = logger;
***REMOVED***

    [HttpGet("/")]
    public IActionResult RedirectToHome()
    ***REMOVED***
        return Redirect("/home");
***REMOVED***
    
    [HttpGet("/home")]
    public IActionResult Index()
    ***REMOVED***
        return View();
***REMOVED***

    [HttpGet("/home/privacy")]
    public IActionResult Privacy()
    ***REMOVED***
        return View();
***REMOVED***

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    ***REMOVED***
        return View(new ErrorViewModel ***REMOVED*** RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier ***REMOVED***);
***REMOVED***
***REMOVED***


