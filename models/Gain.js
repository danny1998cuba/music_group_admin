const { Schema, model } = require('mongoose')

const gainSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    currecies: [{
        _id: false,
        currency: {
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
    }],
    founding: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    versionKey: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    id: false
})

/**
 * Virtuals
 */
gainSchema.virtual('full_amount').get(function () {
    if (this.currecies) {
        let totalAmount = 0

        this.currecies
            .filter(e => e.change)
            .forEach(curr => {
                totalAmount += (curr.amount * curr.change)
            })

        return totalAmount
    } else {
        return 0
    }
})

gainSchema.virtual('founding_percentage').get(function () {
    return ((this.founding / this.full_amount) * 100).toFixed(2)
})


/**
 *  Methods
 */
gainSchema.methods.totalAmount = function () {
    return this.full_amount - this.founding
}

module.exports = model('Gain', gainSchema)