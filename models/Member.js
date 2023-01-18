const { Schema, model } = require('mongoose')

const memberSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    identification: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true,
        set: function (value) {
            let masc = ['m', 'masc', 'masculino']
            masc = [...masc, ...masc.map(i => i.toUpperCase())]
            masc = [...masc, ...masc.map(i => i[0].toUpperCase() + i.substring(1))]

            let fem = ['f', 'fem', 'femenino']
            fem = [...fem, ...fem.map(i => i.toUpperCase())]
            fem = [...fem, ...fem.map(i => i[0].toUpperCase() + i.substring(1))]

            if (masc.some(i => i == value))
                return 'm'
            else if (fem.some(i => i == value))
                return 'f'
            else
                return 'o'
        }
    }
}, {
    versionKey: false,
})

/**
 * Virtuals
 */
memberSchema.virtual('fullname').get(function () {
    return this.first_name + ' ' + this.last_name
})

memberSchema.virtual('age').get(function () {
    let diff = new Date() - this.birth_date
    return Math.floor(diff / 31557600000);
})

module.exports = model('Member', memberSchema)