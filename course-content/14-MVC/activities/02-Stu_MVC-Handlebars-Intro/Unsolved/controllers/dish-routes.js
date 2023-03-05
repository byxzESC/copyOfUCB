// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// it is the controller
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// home route 
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
// when user get to the home route, it would render all.handlebars
  res.render('all');
});

module.exports = router;
