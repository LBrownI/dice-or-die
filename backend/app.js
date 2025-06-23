// app.js
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); 

// Conexión a Mongo
require('./config/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors()); 

// ─── Middlewares (orden importante) ────────────────────────────────
app.use(logger('dev'));
app.use(express.json());                        // <-- aquí
app.use(express.urlencoded({ extended: false })); // <-- y aquí
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ─── Rutas ────────────────────────────────────────────────────────
app.use('/users', usersRouter);  // se monta *una sola vez*, después del parser
app.use('/', indexRouter);

// ─── Manejo de errores, etc.
module.exports = app;
