const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('mongoose').model('Person');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, done) {
        console.log(`${email}: ${password}`);

        Person.findOne({
            email: email
        }, function (err, person) {
            if (err) {
                return done(err);
            }
            if (!person) {
                return done(null, false, {
                    message: 'Incorrect email.'
                });
            }
            if (!person.isPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, person);
        });
    }
));