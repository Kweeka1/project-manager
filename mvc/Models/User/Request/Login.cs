using System.ComponentModel.DataAnnotations;
using mvc.ValidationAttributes;

namespace mvc.Models.User.Request
***REMOVED***
    public class Login
    ***REMOVED***
        [Required]
        [EmailField]
        [Display(Name = "Email")]
        public string Email ***REMOVED*** get; set; ***REMOVED***

        [Required]
        [PasswordField]
        [Display(Name = "Password")]
        public string Password ***REMOVED*** get; set; ***REMOVED***

        [Required]
        [Display(Name = "Remember me")]
        public bool LongSession ***REMOVED*** get; set; ***REMOVED***

***REMOVED***
***REMOVED***