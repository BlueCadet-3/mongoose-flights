const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
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
    res.redirect('/flights');
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', {title: 'Flight Details', flight});
  });
}

// function show(req, res) {
//   Flight.findById(req.params.id)
//     .populate('destination').exec(function(err, flight) {
//       // Performer.find({}).where('_id').nin(movie.cast) <-- Mongoose query builder
//       // Native MongoDB approach 
//       Flight.find(
//         {_id: {$nin: flight.destinations}},
//         function(err, destinations) {
//           console.log(destinations);
//           res.render('flights/show', {
//             title: 'Flight Detail', flight, destinations
//           });
//         }
//       );
//     });
// }