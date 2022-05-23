using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace mvc.ValidationAttributes;

public class PasswordField : ValidationAttribute
***REMOVED***
    protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
    ***REMOVED***
        string? password = (string?)value;

        if (string.IsNullOrEmpty(password)) return new ValidationResult("Password field is required");

        Regex passwordPattern = new Regex(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.***REMOVED***8,24***REMOVED***)");
        
        return passwordPattern.IsMatch(password) 
            ? ValidationResult.Success 
            : new ValidationResult("Password must contains uppercase and lowercase letters and digits");
***REMOVED***
***REMOVED***