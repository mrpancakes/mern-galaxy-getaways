const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Rename and replace with actual schema:

const tripsSchema = new Schema({


    Destination: { type: String, required: true },
    departureDate: { type: Date},
    returnDate: { type: Date },
    




});

const Trips = mongoose.model("Trips", tripsSchema);

module.exports = Trips;
