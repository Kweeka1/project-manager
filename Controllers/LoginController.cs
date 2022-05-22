using Microsoft.AspNetCore.Mvc;
using mvc.Models.User.Request;

namespace mvc.Controllers
***REMOVED***
    [Route("login")]
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
        public IActionResult Index(AuthRequest authRequest)
        ***REMOVED***
            if (ModelState.IsValid)
            ***REMOVED***
                var Email = authRequest.Email;
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