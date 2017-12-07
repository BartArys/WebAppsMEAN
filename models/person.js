const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const personSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String
    },
    hash: {
        type: String
    }
}, {
    toJSON: {
        transform: function (doc, ret) {
            delete ret.__v;
            delete ret.salt;
            delete ret.hash;
        }
    }
});

personSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(32).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
}

personSchema.methods.isPassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
    return this.hash === hash;
}

personSchema.methods.generateJWT = function () {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 14)
    return jwt.sign({
        _id: this._id,
        firstname: this.firstname,
        lastname: this.lastname,
        exp: parseInt(exp.getTime() / 1000)
    }, process.env.SIGN_SECRET);
}

mongoose.model('Person', personSchema);