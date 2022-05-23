using Microsoft.AspNetCore.Mvc;
using mvc.Models.User.Request;

namespace mvc.Controllers
{
    [Route("[Controller]")]
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
        public IActionResult Index(Login login)
        {
            if (ModelState.IsValid)
            {
                var email = login.Email;
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