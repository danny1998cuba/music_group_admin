const { Schema, model } = require('mongoose')

const wpSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minLength: 10,
        trim: true
    },
    direction: {
        type: String
    },
    contract_from: {
        type: Date,
        default: new Date()
    }
}, {
    versionKey: false,
})

module.exports = model('Workplace', wpSchema)