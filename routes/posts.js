const router = require('express').Router();
const postController = require('../controllers/post')
const auth = require('../middlewares/auth');

router.get('/', postController.getPosts);

router.get('/:postID', auth.auth, postController.getPost);
router.post('/', auth.auth, postController.postPost);
router.patch('/:postId',auth.auth, postController.patchPost);
router.delete('/:postId',auth.auth, postController.deletePost);


module.exports = router;
