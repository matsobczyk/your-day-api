const gitController = require('../controllers/git');
const auth = require('../middlewares/auth');
const router = require('express').Router();

router.get('/pull', auth.auth, gitController.pull);

module.exports = router;
