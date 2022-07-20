using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using mvc.Entities.UserEntity;

namespace mvc.Entities.EmailConfirmations;

public class ToConfirm
***REMOVED***
    [Key]
    [Required]
    public Guid UserId ***REMOVED*** get; set; ***REMOVED***

    [Required]
    [MaxLength(16)]
    [MinLength(3)]
    public string Username ***REMOVED*** get; set; ***REMOVED***

    [Required]
    public string Email ***REMOVED*** get; set; ***REMOVED***
    [Required]
    public string Password ***REMOVED*** get; set; ***REMOVED***
    
    [Required]
    public string FirstName ***REMOVED*** get; set; ***REMOVED***
    
    [Required]
    public string LastName ***REMOVED*** get; set; ***REMOVED***

    [Required]
    [StringLength(88)]
    public string Token ***REMOVED*** get; set; ***REMOVED***
    
***REMOVED***