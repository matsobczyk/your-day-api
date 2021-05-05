const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    weather: {
    },
    clouds: {
    },
    wind: {
    },
    temperature: {
    },
   });

module.exports = mongoose.model('Weather', weatherSchema);
