const mongoose = require("mongoose");
const db = require("../models");

const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/galaxyGetaways"
);
// Define array of users
const seedUsers = [
    {
        firstName: "Ricky",
        lastName: "Bobby",
        email: "test@gmail.com",
        password: "password",
        creditCard: "123456",
        street: "123 Test Street",
        city: "Dallas",
        state: "TX",
        zip: "75006"
    },
    {
        firstName: "Sally",
        lastName: "Mae",
        email: "test2@gmail.com",
        password: "password",
        creditCard: "654321",
        street: "321 Fun Dr.",
        city: "Fargo",
        state: "ND",
        zip: "84029"
    },

];

// Define trips
const seedTrips = [
    {
        destination: "Mars",
        departureDate: "09/01/2021",
        returnDate: "09/10/2021",
        passengers: 3,
        spaceline: "SpaceX",
        section: "Economy",
        pricePerTicket: 5000,
        total: 15000,
    },
    {
        destination: "Neptune",
        departureDate: "12/11/2021",
        returnDate: "02/09/2022",
        passengers: 1,
        spaceline: "SpaceX",
        section: "First Class",
        pricePerTicket: 12000,
        total: 12000,
    },
];
// Insert users
db.User
    .remove({})
    .then(() => db.User.collection.insertMany(seedUsers))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        // loop through array of inserted users' ids
        console.log(data.result);
        // Figure out where "insertedIds" array is
        // data.result.insertedIds.forEach(userId => {
        //     seedTrips.forEach(trip => {
        //         db.Trip.create(trip)
        //         .then(({ _id }) => db.User.findOneAndUpdate({ _id: userId }, { $push: { trips: _id } }, { new: true }))
        //         .then(dbUser => {
        //             process.exit(0);
        //         })
        //         .catch(err => {
        //             process.exit(0);
        //         });
        //     });
        // })
    })
    // Insert Trips
    .catch(err => {
        console.error(err);
        process.exit(1);
    });