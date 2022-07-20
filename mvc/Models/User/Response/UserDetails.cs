using System.ComponentModel.DataAnnotations;

namespace mvc.Models.User.Response;

public class UserDetails
***REMOVED***
    [Required] 
    public DateTime CreatedOn ***REMOVED*** get; set; ***REMOVED***

    [Required]
    [MaxLength(15)]
    [MinLength(3)]
    public string Username ***REMOVED*** get; set; ***REMOVED***

    [Required]
    public string Email ***REMOVED*** get; set; ***REMOVED***

    [Required]
    [MaxLength(15)]
    [MinLength(2)]
    public string FirstName ***REMOVED*** get; set; ***REMOVED***

    [Required]
    [MaxLength(20)]
    [MinLength(2)]
    public string LastName ***REMOVED*** get; set; ***REMOVED***
***REMOVED***