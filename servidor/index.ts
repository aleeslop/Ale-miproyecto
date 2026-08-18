import express, { Request, Response } from 'express';

const app = express();

// Middleware para permitir CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Lista fija de alumnos
const alumnos = [
  { nombre: 'Ruben', matricula: '22E31' },
  { nombre: 'Luis', matricula: '22E32' },
  { nombre: 'Mireya', matricula: '22E33' }
];

app.get('/', (req: Request, res: Response) => {
  res.send('Hola desde escuela con TypeScript');
});

app.get('/alumnos', (req: Request, res: Response) => {
  res.json(alumnos);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
