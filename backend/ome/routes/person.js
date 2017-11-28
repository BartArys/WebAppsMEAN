const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Person = mongoose.model('Person');

//TODO: populate
const populate = [];

//TODO: AUTHORIZATION, LOGIN

router.param('person', function (req, res, next, id) {
    Person.findById(id, function (err, person) {
        if (err) return next(err);
        if (!person) return next(new Error(`${req.params.id} not found`));
        req.person = person;
        return next();
    });
});

router.get('/', function (req, res, next) {
    return Person.find().populate(populate).exec(function (err, people) {
        if (err) return next(err);
        return res.json(people);
    });
});

router.get('/:person', function (req, res, next) {
    return res.json(req.person);
});

router.post('/', function (req, res, next) {
    const person = new Person({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    //TODO: PASSWORD
    //TODO: events

    person.save(function (err, p) {
        if (err) return next(err);
        res.json(p);
    });
});

router.patch('/:person', function (req, res, next) {
    req.person.firstName = req.body.firstName || req.person.firstName;
    req.person.lastName = req.body.lastName || req.person.lastName;
    req.person.email = req.body.email || req.person.email;

    //TODO: events

    req.person.save(function (err, person) {
        if (err) return res.next(err);
        return res.json(person);
    });
});

router.delete('/:person', function (req, res, next) {
    req.person.remove(function (err) {
        if (err) return next(err);
        return res.json(req.person);
    })
});

module.exports = router;