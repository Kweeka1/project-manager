using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using mvc.ValidationAttributes;

namespace mvc.Entities.UserEntity
***REMOVED***
    public class User 
    ***REMOVED***
        [Key]
        [Required]
        public Guid UserId ***REMOVED***get; set;***REMOVED***

        [Required]
        public DateTime CreatedOn ***REMOVED***get; set;***REMOVED***

        [Required]
        [MaxLength(16)]
        [MinLength(3)]
        public string Username ***REMOVED*** get; set; ***REMOVED***
        
        [Required]
        [EmailField]
        public string Email ***REMOVED*** get; set; ***REMOVED***
        
        [Required]
        [MaxLength(15)]
        [MinLength(2)]
        public string FirstName ***REMOVED*** get; set; ***REMOVED***
        
        [Required]
        [MaxLength(20)]
        [MinLength(2)]
        public string LastName ***REMOVED*** get; set; ***REMOVED***
        
        [Required]
        [PasswordField]
        public string Password ***REMOVED*** get; set; ***REMOVED***
        
        [Required]
        public bool IsConfirmed ***REMOVED*** get; set; ***REMOVED***

        [Required] 
        public bool IsDeactivationRequested ***REMOVED*** get; set; ***REMOVED***
        
        [Required]
        public DateTime DeactivationRequestedOn ***REMOVED*** get; set; ***REMOVED***

        [Required] 
        public DateTime IsDeactivatedOn => DeactivationRequestedOn.AddDays(14);

        [Required] 
        public bool Deactivate => IsDeactivationRequested && DateTime.UtcNow > IsDeactivatedOn;
***REMOVED***
***REMOVED***