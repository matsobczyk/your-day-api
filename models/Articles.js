const { json } = require('body-parser');
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    articles: {
    }
   });

   module.exports = mongoose.model('Article', articleSchema);
