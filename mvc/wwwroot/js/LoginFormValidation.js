$(function() {
    const emailPattern = /^[a-zA-Z0\d.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z\d-]+\.[a-zA-Z\d-]{2,3}$/;
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.{8,24})/;

    function isEmailValid(email) {
        return emailPattern.test(email)
    }

    function isPasswordValid(password) {
        return passPattern.test(password)
    }

     $("#email").on("input", function(e) {
         $("#emailField_container").attr("style", "")
         if (isEmailValid(e.target.value)) {
             $("#email").css("border-color", "#006613")
         } else {
             $("#email").css("border-color", "rgb(221, 18, 18)")
         }
     })
     $("#password").on("input", function(e) {
         $("#passwordField_container").attr("style", "")
         if (isPasswordValid(e.target.value)) {
             $("#password").css("border-color", "#006613")
         } else {
             $("#password").css("border-color", "rgb(221, 18, 18)")
         }
     })
    $("#cpassword").on("input", function (e) {
        $("#cpasswordField_container").attr("style", "")
        if ($("#password").val() === $("#cpassword").val()) {
            $("#cpassword").css("border-color", "#006613")
        } else {
            $("#cpassword").css("border-color", "rgb(221, 18, 18)")
        }
    })
    $("#form_login").submit(function(e) {
        if (!isEmailValid($("#email").val())) {
            e.preventDefault()
            $("#emailField_container").css("animation", "shake 0.4s")
            return false
        }
        if (!isPasswordValid($("#password").val())) {
            e.preventDefault()
            $("#passwordField_container").css("animation", "shake 0.4s")
            return false
        }
        if ($("#password").val() !== $("#cpassword").val()) {
            e.preventDefault()
            $("#cpasswordField_container").css("animation", "shake 0.4s")
            return false
        }
    })
})