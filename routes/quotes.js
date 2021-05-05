const router = require('express').Router();
const quoteController = require('../controllers/api/quote');
const auth = require('../middlewares/auth');

//quotes
router.get('/quotes', auth.auth, quoteController.getQuote);

module.exports = router;