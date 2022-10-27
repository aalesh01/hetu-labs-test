const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rideSchema = new Schema({
    srcLoc: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], index: '2dsphere' },
    },
    destLoc: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], index: '2dsphere' },
    },
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'driver'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    status: {
        type: String,
        default: 'pending'
    },
    distance: {
        type: Number,
        default: 0
    },
    fare: {
        type: Number,
        default: 0
    }
});

rideSchema.index({ srcLoc: "2dsphere" });
rideSchema.index({ destLoc: "2dsphere" });

const rideDB = mongoose.model('ride', rideSchema);

module.exports = rideDB;


