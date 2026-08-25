async function cargarAlumnos() {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "Cargando...";
  try {
    // Usar ruta relativa para funcionar en cualquier despliegue
    const res = await fetch("/alumnos");
    if (!res.ok) throw new Error(`Error en el servidor: ${res.status}`);

    // Intentamos parsear JSON de forma segura
    let data;
    try {
      data = await res.json();
    } catch (e) {
      console.error('Respuesta no contiene JSON válido', e);
      data = [];
    }

    lista.innerHTML = "";
    if (!Array.isArray(data) || data.length === 0) {
      lista.textContent = "No hay alumnos para mostrar.";
      return;
    }

    data.forEach(alumno => {
      const li = document.createElement("li");
      li.textContent = `${alumno.nombre} (${alumno.matricula}) - ${alumno.grado}`;
      lista.appendChild(li);
    });
  } catch (error) {
    console.error(error);
    lista.textContent = "No se pudo cargar alumnos (ver consola).";
  }
}

document.addEventListener('DOMContentLoaded', cargarAlumnos);
