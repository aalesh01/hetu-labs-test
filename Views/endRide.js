const rideDB = require('../Models/ride');

const endRide = async (req,res) => {
    const rideId = req.body.rideId;
    const ride = await rideDB.findOne({ _id: rideId });
    rideDB.updateOne({_id:rideId},{$set:{status:"ended"}},(err,result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
        }
        res.send("Ride ended,Please pay the fare Rs." + " " + ride.fare);
    });
}

module.exports = endRide;