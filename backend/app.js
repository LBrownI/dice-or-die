const express      = require('express');
const cors         = require('cors');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose     = require('mongoose');
require('dotenv').config();            // lee .env

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongodb_container:27017/dice_or_die';

mongoose.connect(MONGODB_URI)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('Mongo error', err));

const app = express();

app.use(morgan('dev'));
app.use(cors());                       // ahora sí se usa
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/',       indexRouter);
app.use('/users',  usersRouter);       // POST /users/register  |  POST /users/login

// ── Manejo de errores / 404 omitido por brevedad
module.exports = app;
