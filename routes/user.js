const router = require('express').Router();
const articleController = require('../controllers/api/article');
const quoteController = require('../controllers/api/quote');
const auth = require('../middlewares/auth');

//articles
router.get('/articles', auth.authAdmin, articleController.getArticles);
router.get('/updateArticles', auth.authAdmin, articleController.updateArticles);

//quotes
router.get('/quotes', auth.authAdmin, quoteController.getQuote);

module.exports = router;
