const router = require('express').Router();
const noteController = require('../controllers/note')

router.get('/', noteController.getNotes);

router.get('/:noteId', noteController.getNote);
router.post('/', noteController.postNote);
router.patch('/:noteId', noteController.patchNote);
router.delete('/:noteId', noteController.deleteNote);

module.exports = router;
