function submitForm (event){
    event.preventDefault()
    var passwordLength = document.getElementById("passwordLength").value
    var showPassword = document.getElementById("showNewPassword")
    if (passwordLength > 100) showPassword.innerText = "Length of password should be less than 100 chars"
    else if (passwordLength < 5) showPassword.innerText = "Length of password should be more than 5 chars"
    else showPassword.innerText =  generateNewPassword(passwordLength)
}

function generateNewPassword(passwordLength) {
    var chars = "0123456789ABCDEFGHJKLMOPQRZXYabcdefghijklmopqrt"
    var generatedPassword = ""
    var randomChar = 0
    for (var i=1; i <= passwordLength; i++){
        randomChar = Math.floor(Math.random() * 40)
        generatedPassword += chars.substr(randomChar,1)
    }
    return generatedPassword
}