const { Schema, model } = require('mongoose')

const actSchema = new Schema({
    
}, {
    versionKey: false,
})

module.exports = model('Activity', actSchema)