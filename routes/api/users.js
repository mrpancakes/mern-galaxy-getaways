const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Trips = require('../../models/trips');
const Users = require('../../models/users')
const auth = require('../../middleware/auth');
const mongoose = require("mongoose");

// POST: Create new trip from http://localhost:3000/book-trip
// GET: All of a users trips on http://localhost:3000/my-trips
// DELETE: Removing a user's trips when the click the cancel button on http://localhost:3000/my-trips
router.post('/sign-up', async (req, res) => {
    console.log(req.body)
    try {
        const createUser = await Users.create(req.body)
        jwt.sign({
                user: {
                    email: createUser.email,
                    _id: createUser._id,
                }
            },
            "SSEMNG$51423", {
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
router.post('/book-trip', auth, async (req, res) => {
    //console.log(req.body)
    try {
        const postTrip = await Trips.create(req.body)

        await Users.updateOne({
            _id: req.user._id
        }, {
            $push: {
                trips: mongoose.Types.ObjectId(postTrip._id)
            }
        }, {
            new: true
        })

        const updatedUser = await Users.findOne({
            _id: req.user._id
        }).select("-creditCard -password").populate("trips")
        res.send(updatedUser)
    } catch (error) {
        res.send(error)
    }
})
router.get('/my-trips', auth, async (req, res) => {
    try {
        const updatedUser = await Users.findOne({
            _id: req.user._id
        }).select("-creditCard -password").populate("trips")

        res.send(updatedUser)
    } catch (error) {
        res.send(error)
    }
})
router.delete('/my-trips', auth, async (req, res) => {
    try {
        const deleteTrips = await Trips.deleteOne(req.body)
        res.send(deleteTrips)
    } catch (error) {
        res.send(error)
    }
});
module.exports = router;