const driverDB = require('../Models/driver');
const rideDB = require('../Models/ride');
const geolib = require('geolib');

const bookRide = async (req, res) => {
    const srcLoc = req.body.srcLoc;
    const destLoc = req.body.destLoc;

    const driver = await driverDB.find({
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [srcLoc[0], srcLoc[1]]
                },
                $maxDistance: 10000
            }
        }
    });
    const distance = geolib.getDistance(
        { latitude: srcLoc[0], longitude: srcLoc[1] },
        { latitude: destLoc[0], longitude: destLoc[1] }
    );
    console.log(distance);
    const fare = (distance) => {
        if (distance < 6000) {
            return 50;
        }
        else {
            const cal = (distance) => {
                if (distance == 1) return 8;
                else return 8 + 5 * (distance - 1);
            }
            return 20 + 42 + (cal(distance-4));
        }
    }

    // if the most nearest driver driver[0] eccepts the request

    driverDB.updateOne({ _id: driver[0]._id }, { $set: { driving: true } }, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
        }

        rideDB.create({
            srcLoc: {
                type: "Point",
                coordinates: [srcLoc[0], srcLoc[1]]
            },
            destLoc: {
                type: "Point",
                coordinates: [destLoc[0], destLoc[1]]
            },
            distance: distance,
            driver: driver[0]._id,
            user: req.body.user,
            status: "riding",
            fare: fare(distance),
        });
        res.send("Ride booked");
    });
}

module.exports = bookRide;