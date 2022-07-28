const express = require('express')

//Controller Functions

const {signupUser, loginUser} = require('../controllers/userController') 

const router = express.Router()

// Login Route

router.post('/login', () => {})


// Sugnup Route

router.post('/signup', () => {})


module.exports = router