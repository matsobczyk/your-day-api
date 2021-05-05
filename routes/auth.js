const AuthController = require('../controllers/auth');
const verifyToken = require('../middlewares/verifyInvitation');
const invitationController = require('../controllers/invite');
const router = require('express').Router();

//register user
router.post('/register',verifyToken, AuthController.register);
router.post('/register/check',invitationController.checkInvitation);
//login user
router.post('/login', AuthController.login);

//register admin
router.post('/registerAdmin', AuthController.registerAdmin);
//login admin
router.post('/loginAdmin', AuthController.loginAdmin);


module.exports = router;