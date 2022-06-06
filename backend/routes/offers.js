var router = require('express').Router();
var offersController = require ('../controllers/offersController')
const { body } = require('express-validator');

router.post('/getoffer', body('cups').not().isEmpty().trim().escape(), function(req, res) {
    offersController.getOffer(req, res);
});

module.exports = router;