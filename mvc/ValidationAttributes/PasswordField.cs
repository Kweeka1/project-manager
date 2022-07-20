using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace mvc.ValidationAttributes;

public class PasswordField : ValidationAttribute
{
    protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
    {
        string? password = (string?)value;

        if (string.IsNullOrEmpty(password)) return new ValidationResult("Password field is required");
        
        return Regex.IsMatch(password, @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.{8,24})") 
            ? ValidationResult.Success 
            : new ValidationResult("Password must contains uppercase and lowercase letters and digits");
    }
}