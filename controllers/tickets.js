const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  res.render('tickets/new', {title: 'Create New Ticket', flightId: req.params.id});
}

function create(req, res) {
  flightId = req.params.id;
  req.body.flight = flightId;
  Ticket.create(req.body, function(err, ticket) {
    console.log(ticket);
    console.log(flightId);
    res.redirect(`/flights/${flightId}`);
  });
}
