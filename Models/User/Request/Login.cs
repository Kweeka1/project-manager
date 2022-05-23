using System.ComponentModel.DataAnnotations;
using mvc.ValidationAttributes;

namespace mvc.Models.User.Request
{
    public class Login
    {
        [Required]
        [EmailField]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [PasswordField]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Required]
        [Display(Name = "Remember me")]
        public bool LongSession { get; set; }

    }
}