using Microsoft.AspNetCore.Mvc;
using mvc.BackgroundServices;
using mvc.BackgroundServices.Jobs;
using mvc.Entities.EmailConfirmations;
using mvc.Entities.UserEntity;
using mvc.Models.User;
using mvc.Models.User.Request;
using mvc.Models.User.Response;
using mvc.Repositories.Interfaces;
using mvc.Repositories.Services;
using Quartz;

namespace mvc.Controllers
{
    [Route("/")]
    public class LoginController : Controller
    {
        private readonly ILogger<LoginController> _logger;
        private readonly IScheduler _scheduler;
        private readonly IConfiguration _config;
        private readonly IUserServices _userServices;
        public LoginController(ILogger<LoginController> logger, IUserServices userServices, IConfiguration config, IScheduler scheduler)
        {
            _logger = logger;
            _userServices = userServices;
            _config = config;
            _scheduler = scheduler;
        }

        [HttpGet("login")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("login")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Index(Login request)
        {
            if (!ModelState.IsValid) return RedirectToAction("Index");
            UserDetails? user = await _userServices.AuthenticateUser(request);
            if (user is null) return View();
            return RedirectToAction("Index", "Home");
        }

        [HttpGet("signup")]
        public IActionResult Signup()
        {
            return View();
        }

        [HttpPost("signup")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Signup(Registration request)
        {
            if (!ModelState.IsValid) return View();
            
            string? email = await _userServices.RegisterUser(request);
            if (string.IsNullOrEmpty(email))
            {
                return View();
            }
            
            return Redirect($"/confirm?email={email}");
        }
        
        [HttpGet("confirm")]
        public async Task<IActionResult> Confirm(string email)
        {
            if (string.IsNullOrEmpty(email)) return RedirectToAction("Index", "Home");
            
            ToConfirm? userDetails = await _userServices.CheckUserForConfirmation(email);
            
            if (userDetails is null) return RedirectToAction("Signup");

            var job = JobBuilder.Create<SendConfirmationEmail>()
                .UsingJobData("Email", userDetails.Email)
                .UsingJobData("FirstName", userDetails.FirstName)
                .UsingJobData("LastName", userDetails.LastName)
                .UsingJobData("Token", userDetails.Token)
                .WithIdentity(nameof(SendConfirmationEmail)).Build();
            
            var trigger = TriggerBuilder.Create().StartNow().Build();
            
            await _scheduler.ScheduleJob(job, trigger);

            return View("Confirm");
        }
        
        [HttpGet("activate")]
        public async Task<IActionResult> Activate(Activation request)
        {
            if (!ModelState.IsValid) RedirectToAction("Signup");
            bool isActivated = await _userServices.ActivateAccount(request.Email, request.Token);
            if (!isActivated) return RedirectToAction("Signup");
            return RedirectToAction("Index");
        }
    }
}