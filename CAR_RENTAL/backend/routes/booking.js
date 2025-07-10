const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
  const { carName, userEmail } = req.body;
  const booking = new Booking({ carName, userEmail });
  await booking.save();
  res.send({ message: 'Booking confirmed' });
});

module.exports = router;
