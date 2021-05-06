const router = require('express').Router();
const quoteController = require('../controllers/api/quote');
const auth = require('../middlewares/auth');

//quotes
router.get('/', auth.auth, quoteController.getQuotes);

module.exports = router;