require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // Azure SQL requiere esto
    trustServerCertificate: process.env.SQL_TRUST_CERT === 'true' // útil si es on-prem
  }
};

// 🚨 Validar variables de entorno para evitar crash silencioso
['DB_USER', 'DB_PASS', 'DB_NAME', 'DB_HOST'].forEach((key) => {
  if (!process.env[key]) {
    console.warn(`⚠️ Variable de entorno faltante: ${key}`);
  }
});

module.exports = config;
