const router = require('express').Router();
const invitationController = require('../controllers/invite');
const adminController = require('../controllers/admin');
const gitController = require('../controllers/api/git');
const auth = require('../middlewares/auth');

//invitation
router.get('/invitation/:invitationId', auth.authAdmin, invitationController.getInvitation);
router.post('/invitation/', auth.authAdmin, invitationController.createInvitation);
router.patch('/invitation/:invitationId', auth.authAdmin, invitationController.updateInvitation);
router.delete('/invitation/:invitationId', auth.authAdmin, invitationController.deleteInvitation);
router.get('/invitation', auth.authAdmin, invitationController.getInvitations);

//user
//TODO: patch, post user
router.get('/users', auth.authAdmin, adminController.getUsers);
router.delete('/user/:userId', auth.authAdmin, adminController.deleteUser);

//gitHub
router.get('/git', auth.authAdmin, gitController.pull);

module.exports = router;