const mongoose = require('mongoose');

const RobotsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    lethal: Boolean,
    isDangerous: String,
    weapon: String,
})
module.exports = mongoose.model('robots', RobotsSchema)
