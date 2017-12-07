const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Person = mongoose.model('Person');

const passport = require('passport');

const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.SIGN_SECRET,
    userProperty: 'jwt'
});

//TODO: populate
const populate = [];

router.param('person', function (req, res, next, id) {
    Person.findById(id, function (err, person) {
        if (err) return next(err);
        if (!person) return next(new Error(`${req.params.id} not found`));
        req.person = person;
        return next();
    });
});

router.get('/', auth, function (req, res, next) {
    return Person.find({
        '_id': {
            $ne: req.jwt._id
        }
    }).populate(populate).exec(function (err, people) {
        if (err) return next(err);
        return res.json(people);
    });
});

router.get('/:person', function (req, res, next) {
    return res.json(req.person);
});

router.post('/checkEmail', function (req, res, next) {
    Person.findOne({
        email: req.body.email
    }, function (err, person) {
        if (err) return next(err);
        return res.json({
            email: person == null ? "emailExists" : "ok"
        });
    });
});

router.post('/', function (req, res, next) {
    if (!req.body.password) return next(new Error('password is required'));

    const person = new Person({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });

    person.setPassword(req.body.password);

    person.save(function (err, p) {
        if (err) return next(err);
        res.json(p);
    });
});

router.post('/login', function (req, res, next) {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }

    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (user) {
            return res.json({
                token: user.generateJWT()
            });
        } else {
            return res.status(401).json(info);
        }
    })(req, res, next);
});

router.patch('/:person', auth, function (req, res, next) {
    if (req.person._id != req.jwt.id) return next(new Error('wrong user'));

    req.person.firstname = req.body.firstname || req.person.firstname;
    req.person.lastname = req.body.lastname || req.person.lastname;
    req.person.email = req.body.email || req.person.email;

    //TODO: events

    req.person.save(function (err, person) {
        if (err) return res.next(err);
        return res.json(person);
    });
});

router.delete('/:person', auth, function (req, res, next) {
    if (req.person._id != req.jwt.id) return next(new Error('wrong user'));

    req.person.remove(function (err) {
        if (err) return next(err);
        return res.json(req.person);
    })
});

module.exports = router;