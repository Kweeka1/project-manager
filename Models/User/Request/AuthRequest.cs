using System.ComponentModel.DataAnnotations;

namespace mvc.Models.User.Request
{
    public class AuthRequest
    {
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Required]
        [Display(Name = "Remember me")]
        public bool LongSession { get; set; }

    }
}