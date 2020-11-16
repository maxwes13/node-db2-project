const express = require("express");

const helmet = require("helmet");

const cors = require("cors");

const carRouter = require("../cars/car-router.js");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/cars", carRouter);

module.exports = server;