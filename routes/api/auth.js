const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
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
    console.log("login body:", req.body)
    try {
        const login = await Users.findOne({
            email: req.body.email,
        });
        if (!login) {
            return res.status(400).json({
                errors: [{
                    msg: "Email not found"
                }]
            });
        }
        console.log("login", login)

        console.log('Header: ', req.headers);

        
            console.log('ran else');
            // const isMatch = (req.body.password === login.password)
            const isMatch = await bcrypt.compare(req.body.password, login.password);
            // If isMatch is false error out as the password is incorrect
            if (!isMatch) {
                console.log('req body password and the log password dont match')
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
                    user: {
                        email: login.email,
                        _id: login._id,
                    }
                },
                secret,
                { expiresIn: '2h' }
            );
            console.log(retToken);
            res.json({token: retToken}) 
        
    }
    catch (error) {
        res.json(error)
    }
})
module.exports = router;