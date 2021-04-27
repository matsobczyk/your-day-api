const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required:false,
    }
   });

   module.exports = mongoose.model('Article', articleSchema);
