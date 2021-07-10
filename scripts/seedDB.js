const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/galaxyGetaways"
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
        zip: "75006",
        trips: [],
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
        zip: "84029",
        trips: [],
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
db.Trips.remove({})
    .then(() => db.Trips.collection.insertMany(seedTrips))
    .then((data) => {
        console.log(data.result.n + " trips inserted");
        console.log(data);
        let userData;
        db.Users.remove({})
            .then(() => db.Users.collection.insertMany(seedUsers))
            .then((data2) => {
                console.log(data2.result.n + " users inserted");
                console.log(data2);
                userData = data2;
            })
            .then(() => {
                console.log(userData.insertedIds["0"])
                db.Users.findOneAndUpdate(
                    { _id: userData.insertedIds["0"] },
                    { $push: { trips: { $each: data.ops } } },
                    { new: true }
                ).then((res) => {
                    console.log('a', res);
                })
                db.Users.findOneAndUpdate(
                    { _id: userData.insertedIds["1"] },
                    { $push: { trips: { $each: data.ops } } },
                    { new: true }
                ).then((res) => {
                    console.log('a', res);
                })
            })

            .catch(err => {
                console.error(err);
                process.exit(1);
            });
    });