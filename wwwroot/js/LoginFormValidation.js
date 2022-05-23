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
        $("#InvalidEmail").attr("style", "display: none")
        isEmailValid(e.target.value)
            ? $("#email").attr("style", "border-color: #006613;") 
            : $("#email").attr("style", "border-color: rgb(221, 18, 18);")
         
     })
     $("#password").on("input", function(e) {
        $("#InvalidPassword").attr("style", "display: none")
         isPasswordValid(e.target.value) 
            ? $("#password").attr("style", "border-color: #006613") 
            : $("#password").attr("style", "border-color: rgb(221, 18, 18);")
     })
    $("#form_login").submit(function(e) {
        if (!isEmailValid($("#email").val())) {
            e.preventDefault()
            $("#InvalidEmail").attr("style", "display: flex; font-family: 'Roboto', 'sans serif';")
            return false
        }
        if (!isPasswordValid($("#password").val())) {
            e.preventDefault()
            $("#InvalidPassword").attr("style", "display: flex; font-family: 'Roboto', 'sans serif';")
            return false
        }
    })
})