const express = require('express')
const router = express.Router()

// define the home page for route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
})

module.exports = router
