const express = require('express')
const router = express.Router()

// @route GET api/auth
// @desc TEST ROUTE
// @access Public
router.get('/', (req, res) => {
  res.send(`Auth Route TEST`)
})



module.exports = router