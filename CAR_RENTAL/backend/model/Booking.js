const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  carName: String,
  userEmail: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
