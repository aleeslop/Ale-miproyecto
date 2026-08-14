const form = document.querySelector("#formEscuela");
const errores = document.querySelector("#errores");
const exito = document.querySelector("#exito");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  errores.textContent = "";
  exito.textContent = "";

  const nombre = document.querySelector("#nombre").value.trim();
  const email = document.querySelector("#email").value.trim();
  const matricula = document.querySelector("#matricula").value.trim();

  let mensajesError = [];

  if (!nombre || !email || !matricula) {
    mensajesError.push("Todos los campos son obligatorios.");
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !regexEmail.test(email)) {
    mensajesError.push("Correo electrónico inválido.");
  }

  if (matricula && matricula.length < 8) {
    mensajesError.push("Matrícula inválida: debe tener al menos 8 caracteres.");
  }

  if (mensajesError.length > 0) {
    errores.textContent = mensajesError.join(" | ");
    errores.style.color = "red";
  } else {
    exito.textContent = "Formulario enviado correctamente";
    exito.style.color = "green";
    document.body.style.backgroundColor = "#e0f2fe";
  }
});
