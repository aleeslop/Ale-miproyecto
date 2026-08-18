"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hola desde escuela con TypeScript');
});
app.get('/alumnos', (req, res) => {
    res.json([
        { nombre: 'Ruben', matricula: '22E31' },
        { nombre: 'Luis', matricula: '22E32' },
        { nombre: 'Mireya', matricula: '22E33' }
    ]);
});
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
//# sourceMappingURL=index.js.map