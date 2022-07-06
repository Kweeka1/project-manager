using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using mvc.ValidationAttributes;

namespace mvc.Entities.UserEntity
{
    public class User 
    {
        [Key]
        [Required]
        public Guid UserId {get; set;}

        [Required]
        public DateTime CreatedOn {get; set;}

        [Required]
        [MaxLength(16)]
        [MinLength(3)]
        public string Username { get; set; }
        
        [Required]
        [EmailField]
        public string Email { get; set; }
        
        [Required]
        [MaxLength(15)]
        [MinLength(2)]
        public string FirstName { get; set; }
        
        [Required]
        [MaxLength(20)]
        [MinLength(2)]
        public string LastName { get; set; }
        
        [Required]
        [PasswordField]
        public string Password { get; set; }
        
        [Required]
        public Boolean IsConfirmed { get; set; }

        [Required] 
        public bool IsDeactivationRequested { get; set; }
        
        [Required]
        public DateTime DeactivationRequestedOn { get; set; }

        [Required] 
        public DateTime IsDeactivatedOn => DeactivationRequestedOn.AddDays(14);

        [Required] 
        public bool Deactivate => IsDeactivationRequested && DateTime.UtcNow > IsDeactivatedOn;
    }
}