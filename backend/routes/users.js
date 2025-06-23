var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// routes/users.js
const User = require('../models/User');

// POST /users/register
router.post('/register', async (req, res) => {
  const { user, password } = req.body;
  if (!user || !password) {
    return res.status(400).json({ error: 'user y contraseña son obligatorios.' });
  }

  try {
    // Crear y guardar el usuario
    const newUser = new User({ user, password });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado correctamente.' });
  } catch (err) {
    // Duplicate key
    if (err.code === 11000) {
      return res.status(409).json({ error: 'El correo ya está registrado.' });
    }
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

module.exports = router;
