const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Event = mongoose.model('Event');
const Expense = mongoose.model('Expense');

const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.SIGN_SECRET,
  userProperty: 'jwt'
});

const populate = [{
  path: 'expenses',
  model: 'Expense',
  populate: [{
    path: 'paidBy',
    model: 'Person'
  }, {
    path: 'paidFor',
    model: 'Person'
  }]
}, {
  path: 'people',
  model: 'Person'
}];

router.param('event', function (req, res, next, id) {
  Event.findById(id).populate(populate).exec(function (err, event) {
    if (err) return next(err);
    if (!event) return next(new Error(`${id} not found`));
    else {
      req.event = event;
      next();
    }
  });
});

router.get('/', auth, function (req, res, next) {
  console.log(req.jwt);
  Event.find({
    people: req.jwt._id
  }).populate(populate).exec(function (err, events) {
    if (err) return next(err);
    else return res.json(events);
  })
});

router.get('/:event', auth, function (req, res, next) {
  let stringids = req.event.people.map(people => people._id.toString());
  console.log(stringids);
  if (stringids.indexOf(req.jwt._id) < 0) return next(new Error(`not your event`));

  return res.json(req.event);
});

router.post('/:event/expenses', auth, function (req, res, next) {
  let stringIds = req.body.paidFor.map(person => person.id);
  const expense = new Expense({
    description: req.body.description,
    paidBy: req.jwt._id,
    paidFor: stringIds,
    amount: req.body.amount,
    event: req.event
  });


  expense.save(function (err, exp) {
    if (err) return next(err);
    else {
      req.event.expenses.push(exp);
      req.event.save(function (err, event) {
        if (err) return next(err);
        else {
          return res.json({});
        }
      });
    }
  });

});

router.post('/', auth, function (req, res, next) {
  let attributes = {
    name: req.body.name,
    people: req.body.people
  };

  attributes.people = attributes.people.map(person => person.id);
  attributes.people.push(req.jwt._id);
  console.log(attributes.people);

  new Event(attributes).save(function (err, event) {
    if (err) return next(err);
    else return res.json(event);
  });
});

router.patch('/:event', function (req, res, next) {
  const event = req.event;

  event.name = req.body.event || event.name;

  event.save(function (err, event) {
    if (err) return next(err);
    else return res.json(event);
  });
})

router.delete('/:event', function (req, res, next) {
  req.event.remove(function (err) {
    if (err) return next(err);
    else return res.json(req.event);
  });
});

module.exports = router;
