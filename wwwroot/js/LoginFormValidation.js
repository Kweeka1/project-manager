$(function() ***REMOVED***
    const emailPattern = /^[a-zA-Z0\d.!#$%&'*+/=?^_`***REMOVED***|***REMOVED***~-]+@[a-zA-Z\d-]+\.[a-zA-Z\d-]***REMOVED***2,3***REMOVED***$/;
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.***REMOVED***8,24***REMOVED***)/;

    function isEmailValid(email) ***REMOVED***
        return emailPattern.test(email)
***REMOVED***

    function isPasswordValid(password) ***REMOVED***
        return passPattern.test(password)
***REMOVED***

     $("#email").on("input", function(e) ***REMOVED***
         $("#emailField_container").attr("style", "")
         if (isEmailValid(e.target.value)) ***REMOVED***
             $("#email").css("border-color", "#006613")
     ***REMOVED*** else ***REMOVED***
             $("#email").css("border-color", "rgb(221, 18, 18)")
     ***REMOVED***
 ***REMOVED***)
     $("#password").on("input", function(e) ***REMOVED***
         $("#passwordField_container").attr("style", "")
         if (isPasswordValid(e.target.value)) ***REMOVED***
             $("#password").css("border-color", "#006613")
     ***REMOVED*** else ***REMOVED***
             $("#password").css("border-color", "rgb(221, 18, 18)")
     ***REMOVED***
 ***REMOVED***)
    $("#cpassword").on("input", function (e) ***REMOVED***
        $("#cpasswordField_container").attr("style", "")
        if ($("#password").val() === $("#cpassword").val()) ***REMOVED***
            $("#cpassword").css("border-color", "#006613")
    ***REMOVED*** else ***REMOVED***
            $("#cpassword").css("border-color", "rgb(221, 18, 18)")
    ***REMOVED***
***REMOVED***)
    $("#form_login").submit(function(e) ***REMOVED***
        if (!isEmailValid($("#email").val())) ***REMOVED***
            e.preventDefault()
            $("#emailField_container").css("animation", "shake 0.4s")
            return false
    ***REMOVED***
        if (!isPasswordValid($("#password").val())) ***REMOVED***
            e.preventDefault()
            $("#passwordField_container").css("animation", "shake 0.4s")
            return false
    ***REMOVED***
        if ($("#password").val() !== $("#cpassword").val()) ***REMOVED***
            e.preventDefault()
            $("#cpasswordField_container").css("animation", "shake 0.4s")
            return false
    ***REMOVED***
***REMOVED***)
***REMOVED***)