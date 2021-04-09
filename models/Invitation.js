const mongoose = require('mongoose');

const Invitation = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    inv: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Invitation", Invitation);