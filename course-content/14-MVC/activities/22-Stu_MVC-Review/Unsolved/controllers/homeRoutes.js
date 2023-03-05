const router = require('express').Router();
const User = require('../models/User')

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const userData = await User.findAll();
    const userDataArr = userData.map((user) => user.get({ plain:true }))
    res.render('homepage', {userDataArr});
  } catch (err) {
    res.status(500).json(err);
  }


});

module.exports = router;
