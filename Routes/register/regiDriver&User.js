const driverDB = require("../../Models/driver");
const userDB = require("../../Models/user");
const express =  require("express");

const regiRouter = express.Router();

regiRouter.post("/driver", async (req, res) => {
    try {
        const driver = new driverDB(req.body);
        await driver.save();
        res.status(201).send(driver);
    } catch (error) {
        res.status(400).send(error);
    }
}
);

regiRouter.post("/user", async (req, res) => {
    try {
        const user = new userDB(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}
);



module.exports = regiRouter;
