using Microsoft.AspNetCore.Mvc;
using mvc.Models.User.Request;

namespace mvc.Controllers
***REMOVED***
    [Route("[Controller]")]
    public class LoginController : Controller
    ***REMOVED***
        private readonly ILogger<LoginController> _logger;

        public LoginController(ILogger<LoginController> logger)
        ***REMOVED***
            _logger = logger;
    ***REMOVED***

        [HttpGet]
        public IActionResult Index()
        ***REMOVED***
            return View();
    ***REMOVED***

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Index(Login login)
        ***REMOVED***
            if (ModelState.IsValid)
            ***REMOVED***
                var email = login.Email;
                return RedirectToAction("Index", "Home");
        ***REMOVED***
            return RedirectToAction("Index");
    ***REMOVED***

        [Route("signup")]
        public IActionResult Signup()
        ***REMOVED***
            return View();
    ***REMOVED***

***REMOVED***
***REMOVED***