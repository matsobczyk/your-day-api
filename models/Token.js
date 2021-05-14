const mongoose = require('mongoose');

const Token = new mongoose.Schema({
    token: { 
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Token", Token);