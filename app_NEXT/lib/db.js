import mysql from 'mysql2/promise';

// Configuración de la conexión a la base de datos MySQL (XAMPP)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Usuario por defecto en XAMPP
  password: '', // Contraseña por defecto en XAMPP (vacía)
  database: 'bdm',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
