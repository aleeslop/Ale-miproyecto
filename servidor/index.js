import express from "express";
import pkg from "pg";
import path from "path";
import { fileURLToPath } from "url";

const { Pool } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "..")));

// Simple CORS headers to allow the frontend to fetch data
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Endpoint GET
app.get("/alumnos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM alumnos");
    res.json(result.rows || []);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener alumnos" });
  }
});

// Endpoint POST
app.post("/alumnos", async (req, res) => {
  const { nombre, matricula, grado } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO alumnos (nombre, matricula, grado) VALUES ($1, $2, $3) RETURNING *",
      [nombre, matricula, grado]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar alumno" });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo...");
});
