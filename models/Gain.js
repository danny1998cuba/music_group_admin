const { Schema, model } = require('mongoose')

const gainSchema = new Schema({
    
}, {
    versionKey: false,
})

module.exports = model('Gain', gainSchema)