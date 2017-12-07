const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    people: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    }],
    expenses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense'
    }]
});

eventSchema.pre('remove', async function (next) {
    const event = this;
    event.expenses.forEach(element => element.remove());
    next();
})

mongoose.model('Event', eventSchema);