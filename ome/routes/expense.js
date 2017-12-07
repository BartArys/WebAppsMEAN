const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Expense = mongoose.model('Expense');

const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.SIGN_SECRET,
    userProperty: 'jwt'
});

const populate = [{
    path: 'event',
    model: 'Event'
}, {
    path: 'paidBy',
    model: 'Person'
}, {
    path: 'paidFor',
    model: 'Person'
}];

router.get('/:id', auth, function (req, res, next) {
    Expense.findById(req.params.id).populate(populate).exec(function (err, expense) {
        if (err) return next(new Error(err));
        if (!expense) return next(new Error(`${req.params.id} not found`));
        else if (expense.paidBy._id != req.jwt._id) return next(new Error('not your expense'));
        else {
            console.log(`expense`);
            console.log(expense);
            return res.json(expense);
        }
    });
});

router.patch('/:id', auth, function (req, res, next) {
    Expense.findById(req.params.id).populate(populate).exec(function (err, expense) {
        if (err) return next(new Error(err));
        if (!expense) return next(new Error(`${req.params.id} not found`));
        else if (expense.paidBy._id != req.jwt._id) return next(new Error('not your expense'));
        else {

            if (req.body.paidFor) {
                expense.paidFor = req.body.paidFor.map(person => person.id);
            }

            expense.description = req.body.description || expense.description;
            expense.amount = req.body.amount || expense.amount;

            expense.save(function (err, expense) {
                if (err) return next(new Error(err));
                return res.json(expense);
            });
        }
    });
});

router.delete('/:id', auth, function (req, res, next) {
    Expense.findById(req.params.id).populate(populate).exec(function (err, expense) {
        if (err) return next(new Error(err));
        if (!expense) return next(new Error('no such expense'));
        else if (expense.paidBy._id != req.jwt._id) return next(new Error('not your expense'));
        else {
            expense.remove(function (err) {
                if (err) return next(new Error(err));
                return res.json({});
            });
        }
    });
});

module.exports = router;