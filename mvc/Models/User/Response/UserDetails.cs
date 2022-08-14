using System.ComponentModel.DataAnnotations;

namespace mvc.Models.User.Response;

public class UserDetails
{
    [Required] 
    public DateTime CreatedOn { get; set; }

    [Required]
    [MaxLength(15)]
    [MinLength(3)]
    public string Username { get; set; }

    [Required]
    public string Email { get; set; }

    [Required]
    [MaxLength(15)]
    [MinLength(2)]
    public string FirstName { get; set; }

    [Required]
    [MaxLength(20)]
    [MinLength(2)]
    public string LastName { get; set; }
}