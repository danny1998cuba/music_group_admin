const { Schema, model } = require('mongoose')

const gainSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    currecies: [
        {
            currecy: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            change: {
                type: Number
            }
        }
    ],
    total_amount: Number,
    found: {
        amount: {
            type: Number,
            required: true
        },
        percent: {
            type: Number,
            required: true
        }
    }
}, {
    versionKey: false,
})

module.exports = model('Gain', gainSchema)