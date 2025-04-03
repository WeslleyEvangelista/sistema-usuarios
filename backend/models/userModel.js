const connection = require('../config/db');

const User = {
  getAll: callback => {
    connection.query('SELECT * FROM users', callback);
  },
  create: (nome, email, callback) => {
    connection.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email], callback);
  },
};

module.exports = User;