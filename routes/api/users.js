const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Trips = require('../../models/trips');
const Users = require('../../models/users')

// POST: Create new trip from http://localhost:3000/book-trip
// GET: All of a users trips on http://localhost:3000/my-trips
// DELETE: Removing a user's trips when the click the cancel button on http://localhost:3000/my-trips

router.post('/sign-up', async (req, res) => {
    console.log(req.body)

    try {
      const createUser = await Users.create(req.body)

      jwt.sign({
        data: {
            userEmail: createUser.email,
            userId: createUser._id,
        }
    },

    "SSEMNG$51423",

    {
        expiresIn: 360000
    },

    (err, token) => {
        if (err) throw err;
        res.json({
            token
        });
    }

)

    } catch (error) {
        res.send(error)
        
    }
})


router.post('/book-trip', async (req, res) => {
    //console.log(req.body)

    try {
        const postTrip = await Trips.create(req.body)
        res.send(postTrip)
    } catch (error) {
        res.send(error)
    }
})

router.get('/my-trips', async (req, res) => {
    try {
    const myTrips = await Trips.find(req.body)
    res.send(myTrips)  
    } catch (error) {
        res.send(error)
    }
})





module.exports = router;