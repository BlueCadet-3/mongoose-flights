const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
  arrival: {type: Date}
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: {type: String, enum: ['American', 'Southwest', 'United']},
  airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN'},
  departs: {type: Date, default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))},
  destinations: [destinationSchema],
  flightNo: {type: Number, min: 10, max: 9999}
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);