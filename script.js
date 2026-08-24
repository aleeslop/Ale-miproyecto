const form = document.querySelector("#formEscuela");
const errores = document.querySelector("#errores");
const exito = document.querySelector("#exito");

// Función para cargar alumnos del servidor
function cargarAlumnos() {
  fetch("http://localhost:3000/alumnos")
    .then(res => res.json())
    .then(data => {
      const lista = document.getElementById("lista");
      lista.innerHTML = "";
      data.forEach(alumno => {
        const li = document.createElement("li");
        li.textContent = `${alumno.nombre} - ${alumno.matricula}`;
        lista.appendChild(li);
      });
    })
    .catch(() => {
      document.getElementById("lista").innerHTML =
        "<li style='color: red;'>Error: el servidor no responde</li>";
    });
}

// Cargar alumnos cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
  cargarAlumnos();
});

// Evento del formulario
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

  if (matricula && matricula.length < 5) {
    mensajesError.push("Matrícula inválida, debe tener al menos 5 caracteres.");
  }

  if (mensajesError.length > 0) {
    errores.textContent = mensajesError.join(" | ");
    errores.style.color = "red";
  } else {
    exito.textContent = "Formulario enviado correctamente";
    exito.style.color = "green";
    document.body.style.backgroundColor = "#e0f2fe";
    // Recargar lista de alumnos después de enviar
    cargarAlumnos();
  }
});
