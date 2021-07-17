const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Trips = require('../../models/trips');
const Users = require('../../models/users')
const auth = require('../../middleware/auth');
const mongoose = require("mongoose");
// const secret = ;

// POST: Create new trip from http://localhost:3000/book-trip
// GET: All of a users trips on http://localhost:3000/my-trips
// DELETE: Removing a user's trips when the click the cancel button on http://localhost:3000/my-trips
router.post('/sign-up', async (req, res) => {
    
    try {
        console.log('This is req.body', req.body)

        const salt = await bcrypt.genSalt(10);
        const userPassword = await bcrypt.hash(req.body.password, salt);
        const userCreditCard = await bcrypt.hash(req.body.creditCard, salt);

        console.log(userPassword, userCreditCard);

        const user = new Users({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            email: req.body.email,
            password: userPassword,
            creditCard: userCreditCard,
        });
        
        // const createUser = await Users.create(user);
        console.log(user);
        await user.save();

        

        jwt.sign({
            user: {
                email: user.email,
                _id: user._id,
            }
        },
        process.env.JWT_SECRET, {
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
        console.log(error)
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
});

router.get('/my-trips', auth, async (req, res) => {
    try {
        const updatedUser = await Users.findOne({
            _id: req.user._id
        }).select("-creditCard -password").populate("trips")
        res.send(updatedUser)
    } catch (error) {
        res.send(error)
    }
});

router.delete('/my-trips/:id', auth, async (req, res) => {
    try {
        const foundUser = await Users.findOne({
            _id: req.user._id
        })
        console.log(req.params.id)
        console.log(req.user)
        console.log(foundUser);
        if (!foundUser) {
            return res.status(400).json({
                msg: 'trip not found'
            });
        } else {
            await Users.updateOne(
                { _id: req.user._id },
                { $pull: { trips: req.params.id } }
            );
            const updatedUser = await Users.findOne({
                _id: req.user._id
            }).select("-creditCard -password").populate("trips")
            res.send(updatedUser)
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
module.exports = router;