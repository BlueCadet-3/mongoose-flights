const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight
};

function index(req, res) {
  Flight.find({}, function(err, movies) {
    res.render('flights/index', { title: 'All Flights', Flight });
  });
}

function newFlight(req, res) {
  res.render('flights/new', {title: 'New Flight'});
}