const Todo = require('../models/Todo');

exports.createTodo = (async (req, res) => {
    const todo = new Todo({
        todo: req.body.todo
    });

    const todos = new Todos({
        userId: req.params.todoId, 
        todos: todo
    });
        try {
            const savedTodos = await todos.save();
            res.send(savedTodos);
        }catch(err){
            res.status(400).send(err);
        }   
       
});

exports.getAllTodos = (async(req,res) => {
    const todos = await Todos.find();
    res.json(todos);
})

exports.patchTodo = (async (req, res) => {
    try{
        const patchedTodo = await Todo.updateOne(
            {userId: req.params.userId}, 
            {$push: {
                todos: {
                    $each: [req.body.todo],
                    $position: 0}}
                }
            );
        res.json(patchedTodo);
    }catch(err){
        res.json(err);
    }
});
    

exports.deleteTodo = (async(req, res) => {
    try{
        const removedTodo = await Todo.deleteOne({_id: req.params.userId});
        res.json(removedTodo);
    }catch(err){
        res.json(err);
    }
});



