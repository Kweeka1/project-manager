using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace mvc.Models.User.Request;

[BindProperties]
public class Activation
***REMOVED***
    [Required]
    [EmailAddress]
    public string Email ***REMOVED*** get; set; ***REMOVED***
    [Required]
    [StringLength(88)]
    public string Token ***REMOVED*** get; set; ***REMOVED***
***REMOVED***