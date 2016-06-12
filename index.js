process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const consign = require('consign');
const app = express();

app.set('json spaces', 4);

consign({ verbose: false })
    .include('libs/config.js')
    .then('db.js')
    .then('auth.js')
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);

module.exports = app;