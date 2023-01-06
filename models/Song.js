const { Schema, model } = require('mongoose')

const songSchema = new Schema({
    
}, {
    versionKey: false,
})

module.exports = model('Song', songSchema)