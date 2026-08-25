"use strict";
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hola desde escuela con TypeScript');
});
app.get("/alumnos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM alumnos");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener alumnos" });
  }
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor escuchando en el puerto", process.env.PORT || 3000);
});
//# sourceMappingURL=index.js.map