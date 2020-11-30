const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  new: newFlight,
  create,
  show,
  delete: deleteFlight
};

function index(req, res) {
	Flight.find({}).sort('departs').exec(function(err, flights) {
		res.render('flights/index', {flights, title: 'All Flights'});
	});
}

function newFlight(req, res) {
  res.render('flights/new', {title: 'New Flight'});
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    res.redirect('/flights');
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render('flights/show', {title: 'Flight Details', flight, tickets});
    });
  });
}

function deleteFlight(req, res) {
	Flight.findByIdAndRemove(req.params.id, function(err, flight) {
		res.redirect('/flights');
	});
}
