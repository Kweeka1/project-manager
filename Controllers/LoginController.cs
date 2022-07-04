using Microsoft.AspNetCore.Mvc;
using mvc.Entities.EmailConfirmations;
using mvc.Entities.UserEntity;
using mvc.Models.User;
using mvc.Models.User.Request;
using mvc.Models.User.Response;
using mvc.Repositories.Interfaces;
using mvc.Repositories.Services;

namespace mvc.Controllers
{
    [Route("/")]
    public class LoginController : Controller
    {
        private readonly ILogger<LoginController> _logger;
        private readonly IUserServices _userServices;
        public LoginController(ILogger<LoginController> logger, IUserServices userServices)
        {
            _logger = logger;
            _userServices = userServices;
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
            _logger.LogInformation(request.Email);
            _logger.LogInformation(request.Password);
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

            if (string.IsNullOrEmpty(email)) return View();

            return Redirect($"/confirm?email={email}");
        }
        
        [HttpGet("confirm")]
        public async Task<IActionResult> Confirm(string email)
        {
            _logger.LogCritical(email);
            if (string.IsNullOrEmpty(email)) return RedirectToAction("Index", "Home");
            
            EmailArgs? userDetails = await _userServices.CheckUserForConfirmation(email);
            
            if (userDetails is null) return RedirectToAction("Signup");

            // await _userServices.SendConfirmationEmail(
            //     userDetails.Email, 
            //     userDetails.FirstName,
            //     userDetails.LastName, 
            //     userDetails.Hash
            // );
            
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