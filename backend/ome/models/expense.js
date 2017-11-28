const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    paidBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    }],
    paidFor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    }],
    amount: {
        type: Number,
        required: true
    }
});

mongoose.model('Expense', expenseSchema);