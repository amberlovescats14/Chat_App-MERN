const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
//express validator
const {check, validationResult } = require('express-validator/check')

//user model
const User = require('../../models/User')

// @route POST api/users
// @desc Register user
// @access Public
router.post('/', [
  check('name', 'Name is required.')
  .not()
  .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', `Please enter a password with 6 or more Char`).isLength({
    min: 6
  })
], async (req, res) => {
  const errors = validationResult(req)
  // if there are errors
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }

//destructure
const { name, email, password } = req.body

try {
  //See if user exist
  let user = await User.findOne({email})
  //if exists, send error
  if(user) {
    return res.status(400).json({errors: [{msg: `User already exist`}]})
  }
  //get user gravitar
  const avatar = gravatar.url(email, {
    //size 200
    s: '200',
    //rating
    r: 'pg',
    //default
    d:'mm'
  })
  user = new User({
    name,
    email,
    avatar,
    password
  })
  // encript password
  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(password, salt)
  await user.save()
  // return json webtoken
  res.send(`User Registered`)
  } catch(err) {
    console.error(err.message)
    res.status(500).send(`Server error`)
  }
  res.send(`User POST`)
})



module.exports = router