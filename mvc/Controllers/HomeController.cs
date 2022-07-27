using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mvc.BackgroundServices;
using mvc.Models;
using Quartz;

namespace mvc.Controllers;
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IScheduler _scheduler;

    public HomeController(ILogger<HomeController> logger, IScheduler scheduler)
    {
        _logger = logger;
        _scheduler = scheduler;
    }

    [HttpGet("/")]
    public IActionResult RedirectToHome()
    {
        return Redirect("/home");
    }
    
    [HttpGet("/home")]
    public async Task<IActionResult> Index()
    {
        // var job = JobBuilder.Create<AnotherJob>().Build();
        // var trigger = TriggerBuilder.Create().StartNow().Build();
        // await _scheduler.ScheduleJob(job, trigger);
        return View();
    }

    [HttpGet("/home/privacy")]
    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}


