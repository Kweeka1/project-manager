using System.ComponentModel.DataAnnotations;

namespace mvc.Models.User.Request
***REMOVED***
    public class AuthRequest
    ***REMOVED***
        [Required]
        [Display(Name = "Email")]
        public string Email ***REMOVED*** get; set; ***REMOVED***

        [Required]
        [Display(Name = "Password")]
        public string Password ***REMOVED*** get; set; ***REMOVED***

        [Required]
        [Display(Name = "Remember me")]
        public bool LongSession ***REMOVED*** get; set; ***REMOVED***

***REMOVED***
***REMOVED***