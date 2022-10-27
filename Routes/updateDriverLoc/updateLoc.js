const express = require('express');
const driverDB = require('../../Models/driver');
const updateLocRouter = express.Router();

updateLocRouter.post('/driver-loc',(req,res)=>{
    const driverId = req.body.driverId;
    const loc = req.body.loc;
    driverDB.updateOne({_id:driverId},{$set:{location:loc}},(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
        }
        res.send("Location updated");
    }
    );
});

module.exports = updateLocRouter;