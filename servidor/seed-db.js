const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

(async () => {
  try {
    const schemaPath = path.join(__dirname, '..', 'db', 'schema.sql');
    const seedPath = path.join(__dirname, '..', 'db', 'seed.sql');

    if (!fs.existsSync(schemaPath)) {
      console.error('schema.sql not found at', schemaPath);
      process.exit(1);
    }

    const schema = fs.readFileSync(schemaPath, 'utf8');
    const seed = fs.existsSync(seedPath) ? fs.readFileSync(seedPath, 'utf8') : '';

    console.log('Running schema...');
    await pool.query(schema);
    console.log('Schema applied.');

    if (seed.trim()) {
      console.log('Running seed...');
      await pool.query(seed);
      console.log('Seed applied.');
    } else {
      console.log('No seed file found or seed is empty.');
    }

    console.log('Database initialization complete.');
  } catch (err) {
    console.error('Error initializing DB:', err.message || err);
    process.exit(1);
  } finally {
    await pool.end();
  }
})();
