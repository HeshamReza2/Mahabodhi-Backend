const mongoose = require('mongoose')

const States = new mongoose.Schema({
    type: {
        type: String,
        default: 'state'
    },
    name: { type: String },
    districts: [{
        type: Array,
        default: []
    }]
})

module.exports = mongoose.model('States', States)