// -----------------------------
// VALIDACIÓN DEL FORMULARIO NOSOTROS
// -----------------------------


document.getElementById("nosotForm").addEventListener("submit", function(e) {
e.preventDefault(); // evita envío real


let errores = "";
const nombre = document.getElementById("nombre").value.trim();
const email = document.getElementById("email").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();


const errorBox = document.getElementById("errores");
const successBox = document.getElementById("exito");


errorBox.innerHTML = "";
successBox.style.display = "none";


// -----------------------------
// VALIDACIONES
// -----------------------------


if (nombre === "") {
errores += "• El nombre es obligatorio.<br>";
}


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
errores += "• Ingresá un email válido.<br>";
}


if (mensaje.length < 10) {
errores += "• El mensaje debe tener al menos 10 caracteres.<br>";
}


// Si hay errores
if (errores !== "") {
errorBox.innerHTML = errores;
return;
}


// -----------------------------
// SI TODO ESTÁ BIEN
// -----------------------------


successBox.style.display = "block";


// Limpiar campos
document.getElementById("nombre").value = "";
document.getElementById("email").value = "";
document.getElementById("mensaje").value = "";
});