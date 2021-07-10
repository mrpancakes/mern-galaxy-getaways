const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../../models/users');
const secret = "SSEMNG$51423";
// Destructuring out the functions from express-validator
const {
    check,
    validationResult
} = require('express-validator');
// A function for checking the headers of a request for a token
const auth = require('../../middleware/auth');
// @route   GET api/auth
// @desc    Authentication check route
// @access  Public
// The auth function is called to check the user token to set the req.user value
router.get('/', auth, async (req, res) => {
    try {
        // Searching for a user by the value from the token and getting all info EXCEPT the password
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});
// @route   POST api/auth
// @desc    Authenticate user login
// @access  Public
// Passing an array to express-validator to check the req.body for validations
// https://express-validator.github.io/docs/

router.post('/login', async (req, res) => {
    console.log("login2", req.body)
    try {
        const login = await Users.find({
            email: req.body.email,
        });
        if (!login) {
            return res.status(400).json({
                errors: [{
                    msg: "Email not found"
                }]
            });
        }
        console.log("login", login[0])
        if (req.body.token) {

            const verifyToken = jwt.verify(req.body.token, "SSEMNG$51423", { maxAge: 360000 })
            const { data } = verifyToken
            console.log(data);

            if (login) {
                return res.json({
                    msg: "success!"
                })
            }
        } else {
            const isMatch = (req.body.password === login[0].password)
            // const isMatch = await bcrypt.compare(req.body.password, login.password);
            // If isMatch is false error out as the password is incorrect
            if (!isMatch) {
                console.log('loser')
                return res.status(400).json({
                    errors: [{
                        msg: 'Invalid Password'
                    }]
                });
            }
            console.log('it is a match')
            const retToken = 
            jwt.sign(
                {
                    data: {
                        email: login[0].email,
                        _id: login[0]._id,
                    }
                },
                secret,
                { expiresIn: '2h' }
            );
            console.log(retToken);
            res.json({token: retToken}) 
            // jwt.sign({
            //     data: {
            //         email: login.email,
            //         id: login._id,
            //     }
            // },
            // "SSEMNG$51423",
            // {
            //     expiresIn: 360000
            // },
            // (err, token) => {
            //     if (err) throw err;
            //     res.json({
            //         token
            //     });
            // }
        }
    }
    catch (error) {
        res.json(error)
    }
})
module.exports = router;