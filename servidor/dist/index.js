"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hola desde escuela');
});
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
//# sourceMappingURL=index.js.map