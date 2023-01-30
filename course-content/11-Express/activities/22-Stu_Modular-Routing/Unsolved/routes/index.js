const express = require('express')
const router = express.Router()
const feedback = require('./feedbackRouter.js');
const tips = require('./tipsRouter.js');

router.use('/feedback', feedback)
router.use('/tips', tips)

module.exports = router; 