const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripsSchema = new Schema({
    destination: { type: String, required: true },
    spaceline: { type: String, required: true },
    departureDate: { type: Date, required: true }, // Need to ensure the datepicker is formatting dates correctly
    returnDate: { type: Date, required: true }, // Need to ensure the datepicker is formatting dates correctly
    section: { type: String, required: true },
    passengers: { type: Number, required: true },
    pricePerTicket: { type: Number, required: true },
    total: { type: Number, required: true },
});

const Trips = mongoose.model("Trips", tripsSchema);

module.exports = Trips;
