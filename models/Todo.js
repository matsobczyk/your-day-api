const mongoose = require('mongoose');
const User = require('./User');

const Todo = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const Todos = new mongoose.Schema({
    userId: { 
        type: String,
        required: true
    },
    todos: [],
    date: {
        type: Date,
        default: Date.now
    }
});



module.exports = mongoose.model("Todo", Todo);
module.exports = mongoose.model("Todos", Todos);