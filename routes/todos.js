const router = require('express').Router();
const auth = require('../middlewares/auth');
const todoController = require('../controllers/TodoController');

//żeby zadziałało potrzebny jest token zwracany przy logowaniu
//trzeba go przesłać w headerze

router.get('/',auth.auth, todoController.getAllTodos);
router.post('/create/:todoId',auth.auth, todoController.createTodo);

router.patch('/patch/:noteId',auth.auth, todoController.patchTodo);
router.delete('/delete/:noteId',auth.auth, todoController.deleteTodo );


module.exports = router;