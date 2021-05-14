const router = require('express').Router();
const noteController = require('../controllers/note')
const auth = require('../middlewares/auth');

router.get('/', noteController.getNotes);

router.get('/:noteID', auth.auth, noteController.getNote);
router.post('/', auth.auth, noteController.postNote);
router.patch('/:noteID',auth.auth, noteController.patchNote);
router.delete('/:noteID',auth.auth, noteController.deleteNote);


module.exports = router;
