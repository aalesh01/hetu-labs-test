const express = require('express');
const historyRouter = express.Router();
const rideDB = require('../../Models/ride');

historyRouter.post('/driver', async (req, res) => {
    const driverId = req.body.driverId;
    const rides = await rideDB.find({ driver: driverId });
    res.send(rides);
}
);

historyRouter.post('/user', async (req, res) => {
    const userId = req.body.userId;
    const rides = await rideDB.find({ user: userId });
    res.send(rides);
}
);

module.exports = historyRouter;
