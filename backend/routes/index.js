const router = require('express').Router();
const offers = require('./offers');

router.use('/offers', offers);

router.get('/', function (req, res) {
  res.status(200).json({ message: 'connected to our API' });
});

module.exports = router;