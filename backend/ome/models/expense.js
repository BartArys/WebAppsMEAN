const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    paidBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },
    paidFor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    }],
    amount: {
        type: Number,
        required: true
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
}, {
    toJSON: {
        transform: function (doc, ret) {
            delete ret.__v;
        }
    }
});
/*

expenseSchema.pre('remove', function (next) {
    this.model('Expense').remove({
        events: this._id
    }, next);
})
    */

mongoose.model('Expense', expenseSchema);