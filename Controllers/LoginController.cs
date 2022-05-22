using Microsoft.AspNetCore.Mvc;
using mvc.Models.User.Request;

namespace mvc.Controllers
{
    [Route("login")]
    public class LoginController : Controller
    {
        private readonly ILogger<LoginController> _logger;

        public LoginController(ILogger<LoginController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Index(AuthRequest authRequest)
        {
            if (ModelState.IsValid)
            {
                var Email = authRequest.Email;
                return RedirectToAction("Index", "Home");
            }
            return RedirectToAction("Index");
        }

        [Route("signup")]
        public IActionResult Signup()
        {
            return View();
        }

    }
}