const express = require('express');
const rideRouter = express.Router();
const bookRide = require('../../Views/bookRide');
const endRide = require('../../Views/endRide');

rideRouter.post("/book",bookRide);
rideRouter.post("/end",endRide);


module.exports = rideRouter;
