const express = require('express')
const router = express.Router()

// @route GET api/post
// @desc TEST ROUTE
// @access Public
router.get('/', (req, res) => {
  res.send(`Post Route TEST`)
})



module.exports = router