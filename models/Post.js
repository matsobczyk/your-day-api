const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
   });

   
module.exports = mongoose.model('Post', PostSchema);