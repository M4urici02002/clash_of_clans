function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("validationMessage");

    if(password.length < 8) {
        message.textContent = "La contraseña debe tener al menos 8 caracteres.";
        return;
    }

    if(password !== confirmPassword) {
        message.textContent = "Las contraseñas no coinciden.";
        return;
    }
    

    message.textContent = "Contraseña válida.";
    message.style.color = "green";
}
