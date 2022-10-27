const mongoose = require('mongoose');


async function connectDatabase() {
    return new Promise((res, rej) => {
        const uri = process.env.MONGODB_URI;
        mongoose.connect(uri, (err) => {
            if (err) {
                console.error("Error connecting to DataBase", err);
                return rej(err)
            }
            console.log("Successfully connected to database")
            res();
        })
    })
}
module.exports = connectDatabase;

