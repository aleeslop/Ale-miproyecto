CREATE TABLE alumnos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  matricula VARCHAR(5),
  grado VARCHAR(50)
);

INSERT INTO alumnos (nombre, matricula, grado)
VALUES
  ('Ruben', '22E31', 'Primero'),
  ('Luis', '22E32', 'Segundo'),
  ('Mireya', '22E33', 'Tercero');

SELECT * FROM alumnos;