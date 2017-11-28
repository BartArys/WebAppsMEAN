const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
    salt: {
        type: String
    },
    hash: {
        type: String
    }
});

mongoose.model('Person', personSchema);