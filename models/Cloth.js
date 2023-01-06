const { Schema, model } = require('mongoose')

const clothSchema = new Schema({
    
}, {
    versionKey: false,
})

module.exports = model('Cloth', clothSchema)