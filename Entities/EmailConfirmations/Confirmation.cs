using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using mvc.Entities.UserEntity;

namespace mvc.Entities.EmailConfirmations;

public class ToConfirm
{
    [Key]
    [Required]
    public Guid UserId { get; set; }

    [Required]
    [MaxLength(16)]
    [MinLength(3)]
    public string Username { get; set; }

    [Required]
    public string Email { get; set; }
    [Required]
    public string Password { get; set; }
    
    [Required]
    public string FirstName { get; set; }
    
    [Required]
    public string LastName { get; set; }
    
    [Required]
    public DateTime IssuedAt { get; set; }
    
    [Required]
    public DateTime ExpiresAt { get; set; }

    [Required] 
    public bool IsExpired => DateTime.UtcNow > ExpiresAt;

    [Required]
    [StringLength(88)]
    public string Hash { get; set; }
    
}