const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./logger.js');
const compression = require('compression');
const helmet = require('helmet');

module.exports = app => {
    app.set('port', process.env.PORT || 3000);
    app.set('json spaces', 4);
    app.use(morgan('common', {
        stream: {
            write: (message) => {
                logger.info(message);
            }
        }
    }));
    app.use(helmet());
    app.use(cors({
        origin: ['http://localhost:8080'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization']
    }));
    app.use(compression());
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.use((req, res, next) => {
        // Middleware de pré-execução das rotas
        delete req.body.id;
        next();
    });
    app.use(express.static('public'));
};