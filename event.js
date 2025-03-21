function validarFormulario() { 
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value; 
    let password = document.getElementById("password").value; 
    let confirmaPassword = document.getElementById("confirmaPassword").value; 
    let terms = document.getElementById("terms").checked; 

    if (nombre === "" || email === "" || password === "" || confirmaPassword === "" || !terms) {
        alert("Todos los campos son obligatorios");
        return false;
    }

    if (password !== confirmaPassword) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }

    if (password !== confirmaPassword) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    if (!checkbox) {
        errores.push("Debe aceptar los términos y condiciones.");
        return false;
    }

    alert("Formulario enviado correctamente");
    return true;
}