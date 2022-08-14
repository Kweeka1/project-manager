using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace mvc.ValidationAttributes;

public class EmailField : ValidationAttribute
{      
    protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
    {   
        string? email = (string?)value;
        
        if (string.IsNullOrEmpty(email)) return new ValidationResult("Please enter your email");

        Regex emailPattern = new Regex(@"^[a-zA-Z0\d.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z\d-]+\.[a-zA-Z\d-]{2,3}$");
        
        if (emailPattern.IsMatch(email)) return ValidationResult.Success;

        return new ValidationResult("Invalid email format");
    }        
}
