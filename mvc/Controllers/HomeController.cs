using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mvc.BackgroundServices;
using mvc.Models;
using Quartz;

namespace mvc.Controllers;
public class HomeController : Controller
***REMOVED***
    private readonly ILogger<HomeController> _logger;
    private readonly IScheduler _scheduler;

    public HomeController(ILogger<HomeController> logger, IScheduler scheduler)
    ***REMOVED***
        _logger = logger;
        _scheduler = scheduler;
***REMOVED***

    [HttpGet("/")]
    public IActionResult RedirectToHome()
    ***REMOVED***
        return Redirect("/home");
***REMOVED***
    
    [HttpGet("/home")]
    public async Task<IActionResult> Index()
    ***REMOVED***
        // var job = JobBuilder.Create<AnotherJob>().Build();
        // var trigger = TriggerBuilder.Create().StartNow().Build();
        // await _scheduler.ScheduleJob(job, trigger);
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


