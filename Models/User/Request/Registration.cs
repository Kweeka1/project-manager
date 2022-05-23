using System.ComponentModel.DataAnnotations;
using mvc.ValidationAttributes;

namespace mvc.Models.User.Request;

public class Registration
***REMOVED***
    [Required]
    [EmailField]
    [Display(Name = "Email")]
    public string Email ***REMOVED*** get; set; ***REMOVED***
    
    [Required]
    [MaxLength(15)]
    [MinLength(3)]
    [Display(Name = "First name")]
    public string FirstName ***REMOVED*** get; set; ***REMOVED***
    
    [Required]
    [MaxLength(20)]
    [MinLength(3)]
    [Display(Name = "Last name")]
    public string LastName ***REMOVED*** get; set; ***REMOVED***
    
    [Required]
    [PasswordField]
    [Display(Name = "Password")]
    public string Password ***REMOVED*** get; set; ***REMOVED***
    
    [Required]
    [PasswordField]
    [Display(Name = "Confirm password")]
    public string ConfirmPassword ***REMOVED*** get; set; ***REMOVED***
***REMOVED***