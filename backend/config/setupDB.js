const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Usuário root do MySQL para criar outro usuário
  password: process.env.ROOT_PASS // Pegamos a senha do usuário root do .env
});

// Comandos SQL para criar banco e usuário
const database = 'sistema_usuarios';
const newUser = 'appuser';
const newPassword = 'appsenha';

const sqlCommands = [
  `CREATE DATABASE IF NOT EXISTS ${database};`,
  `CREATE USER IF NOT EXISTS '${newUser}'@'localhost' IDENTIFIED BY '${newPassword}';`,
  `GRANT ALL PRIVILEGES ON ${database}.* TO '${newUser}'@'localhost';`,
  `FLUSH PRIVILEGES;`,
  `USE ${database};`,
  `CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL
  );`
];

// Executar os comandos
sqlCommands.forEach(query => {
  connection.query(query, (err, results) => {
    if (err) console.error('Erro ao executar query:', err);
    else console.log('Query executada com sucesso:', query);
  });
});


connection.end(() => console.log('Conexão encerrada.'));