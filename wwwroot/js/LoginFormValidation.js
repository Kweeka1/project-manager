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
        $("#InvalidEmail").attr("style", "display: none")
        isEmailValid(e.target.value)
            ? $("#email").attr("style", "border-color: #006613;") 
            : $("#email").attr("style", "border-color: rgb(221, 18, 18);")
         
 ***REMOVED***)
     $("#password").on("input", function(e) ***REMOVED***
        $("#InvalidPassword").attr("style", "display: none")
         isPasswordValid(e.target.value) 
            ? $("#password").attr("style", "border-color: #006613") 
            : $("#password").attr("style", "border-color: rgb(221, 18, 18);")
 ***REMOVED***)
    $("#form_login").submit(function(e) ***REMOVED***
        if (!isEmailValid($("#email").val())) ***REMOVED***
            e.preventDefault()
            $("#InvalidEmail").attr("style", "display: flex; font-family: 'Roboto', 'sans serif';")
            return false
    ***REMOVED***
        if (!isPasswordValid($("#password").val())) ***REMOVED***
            e.preventDefault()
            $("#InvalidPassword").attr("style", "display: flex; font-family: 'Roboto', 'sans serif';")
            return false
    ***REMOVED***
***REMOVED***)
***REMOVED***)