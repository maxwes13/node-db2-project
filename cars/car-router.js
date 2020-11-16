const express = require("express");

const db = require("../data/db-config.js");

const carRouter = express.Router();

carRouter.get("/", (req, res) => {
  db("cars")
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

carRouter.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then((ids) => {
      db("cars")
        .where({ id: ids[0] })
        .then((newCarEntry) => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch((error) => {
      console.log("POST error", error);
      res.status(500).json({ message: "Failed to store new data" });
    });
});

module.exports = carRouter;