using System.ComponentModel.DataAnnotations;
using mvc.ValidationAttributes;

namespace mvc.Models.User.Request;

public class Registration
{
    [Required]
    [EmailField]
    [Display(Name = "Email")]
    public string Email { get; set; }
    
    [Required]
    [MaxLength(15)]
    [MinLength(3)]
    [Display(Name = "First name")]
    public string FirstName { get; set; }
    
    [Required]
    [MaxLength(20)]
    [MinLength(3)]
    [Display(Name = "Last name")]
    public string LastName { get; set; }
    
    [Required]
    [PasswordField]
    [Display(Name = "Password")]
    public string Password { get; set; }
    
    [Required]
    [PasswordField]
    [Display(Name = "Confirm password")]
    public string ConfirmPassword { get; set; }
}