const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Rename and replace with actual schema:

const usersSchema = new Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    creditCard: { type: Number, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },

    trips: [{
        type: mongoose.ObjectId,
        ref: "Trips"
    },
    ]
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
