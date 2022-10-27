const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var userSchema = new Schema({
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
    }
  });
  
const userDB = mongoose.model("User", userSchema);

module.exports = userDB;