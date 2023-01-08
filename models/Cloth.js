const { Schema, model } = require('mongoose')

const clothSchema = new Schema({
    category: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {
    versionKey: false,
})

module.exports = model('Cloth', clothSchema)