using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace mvc.Models.User.Request;

[BindProperties]
public class Activation
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }
    [Required]
    [StringLength(88)]
    public string Token { get; set; }
}