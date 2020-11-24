const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, function(err, movies) {
    res.render('flights/index', { title: 'All Flights', Flight });
  });
}

function newFlight(req, res) {
  res.render('flights/new', {title: 'New Flight'});
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights/new');
  });
}