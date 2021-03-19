"use strict"
const express = require('express');
const cors = require('cors');
const corsOptions = {
    origin: [
        'http://localhost:8080',
        'https://localhost:8080'
    ],
    credentials: true,

    exposedHeaders: ['set-cookie']
};
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');

const server = require('./models/server');
server.app.use(express.static('public'));
server.app.use(express.json());
server.app.use(cors(corsOptions));
server.app.use(routes);
server.app.use(cookieParser());
server.start();