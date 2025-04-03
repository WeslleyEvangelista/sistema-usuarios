const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  User.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createUser = (req, res) => {
  const { nome, email } = req.body;
  User.create(nome, email, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, nome, email });
  });
};