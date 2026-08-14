import type { Request, Response } from 'express';
const express = require('express');
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hola desde escuela');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
