const { Schema, model } = require('mongoose')

const songSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    composer: {
        type: [
            {
                name: {
                    type: String,
                    required: true
                },
                country: {
                    type: String,
                    required: true
                },
                birth_year: Number,
                death_year: Number
            }
        ],
        required: true
    },
    arranger: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    details: {
        type: {
            tempo: {
                type: Number,
                required: true
            },
            signature: {
                type: String,
                required: true
            },
            key: {
                type: String,
                required: true
            },
            measures_number: Number
        }
    },
    scores: {
        type: []
    }
}, {
    versionKey: false,
})

module.exports = model('Song', songSchema)