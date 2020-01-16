const express = require('express');
const helmet = require('helmet');

const carsRouter =  require('./routes/carsRoute')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => res.send("Success"));

server.use('/api/cars', carsRouter)


module.exports = server;
