const { Schema, model, Types } = require('mongoose')

const actSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    workplace: {
        type: String,
        required: true
    },
    clothes: [String],
    gains: Types.ObjectId,
}, {
    versionKey: false,
})

module.exports = model('Activity', actSchema)