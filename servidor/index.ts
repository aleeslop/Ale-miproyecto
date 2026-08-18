import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hola desde escuela con TypeScript');
});

app.get('/alumnos', (req: Request, res: Response) => {
  res.json([
    { nombre: 'Ruben', matricula: '22E31' },
    { nombre: 'Luis', matricula: '22E32' },
    { nombre: 'Mireya', matricula: '22E33' }
  ]);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});