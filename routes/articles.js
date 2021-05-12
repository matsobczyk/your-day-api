const router = require('express').Router();
const articleController = require('../controllers/api/article');
const auth = require('../middlewares/auth');

//articles
router.get('/', auth.auth, articleController.getArticles);
router.get('/updateArticles', auth.auth, articleController.updateArticles);

module.exports = router;