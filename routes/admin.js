const router = require('express').Router();
const invitationController = require('../controllers/invite');
const adminController = require('../controllers/admin');
const articleController = require('../controllers/article');
const quoteController = require('../controllers/quote');
const auth = require('../middlewares/auth');


//invitation
router.get('/invitation/:invitationId', auth.authAdmin, invitationController.getInvitation);
router.post('/invitation/', auth.authAdmin, invitationController.createInvitation);
router.patch('/invitation/:invitationId', auth.authAdmin, invitationController.updateInvitation);
router.delete('/invitation/:invitationId', auth.authAdmin, invitationController.deleteInvitation);
router.get('/invitations', auth.authAdmin, invitationController.getInvitations);

//user
//TODO patch, post user
router.get('/users', auth.authAdmin, adminController.getUsers);
router.delete('/user/:userId', auth.authAdmin, adminController.deleteUser);

//API
router.get('/articles', auth.authAdmin, articleController.getArticles);
router.get('/updateArticles', auth.authAdmin, articleController.updateArticles);

router.get('/quotes', auth.authAdmin, quoteController.getQuote);

module.exports = router;