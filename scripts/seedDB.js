const mongoose = require("mongoose");
const db = require("../models");

const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/spacetrips" // <--- RENAME
);
// Define array of users
const seedUsers = [
    {
        firstName: "Foo",
        lastName: "Jangles"
    },
    {
        firstName: "Foo",
        lastName: "Jangles"
    },
    {
        firstName: "Foo",
        lastName: "Jangles"
    },
    {
        firstName: "Foo",
        lastName: "Jangles"
    },
];
// define trips
const seedTrips = [
    {
        tripName: "Trip to Mars",
        // ...
    },
    {
        tripName: "Trip to Mars",
        // ...
    },
    {
        tripName: "Trip to Mars",
        // ...
    },
    {
        tripName: "Trip to Mars",
        // ...
    }
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