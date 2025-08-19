// Mensaje al cargar la página
console.log("Página de Arquitectura Moderna cargada correctamente.");

// Función para el formulario de contacto
function enviarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    alert("Gracias " + nombre + ", tu mensaje ha sido enviado.");
    return false; // Evita que la página se recargue
}