const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], index: '2dsphere' },
    },
    driving: {
        type: Boolean,
        default: false
    },
});

DriverSchema.index({ location: "2dsphere" });

const driverDB = mongoose.model("driver", DriverSchema);

module.exports = driverDB;