const router = require('express').Router();
const invitationController = require('../controllers/invite');


router.get('/invitation/:invitationId', invitationController.getInvitation);
router.post('/invitation/', invitationController.createInvitation);
router.patch('/invitation/:invitationId', invitationController.updateInvitation);
router.delete('/invitation/:invitationId', invitationController.deleteInvitation);

router.get('/invitations', invitationController.getInvitations);
// router.post('/invitations', invitationController.createInvitations);
// router.delete('/invitations', invitationController.deleteInvitations);
module.exports = router;