const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Create Booking
router.post('/book', async (req, res) => {
  const { studentId, date, time } = req.body;
  const booking = new Booking({ studentId, date, time });
  await booking.save();
  res.status(201).send({ message: 'Booking created successfully' });
});

// Get Bookings
router.get('/', async (req, res) => {
  const bookings = await Booking.find();
  res.send(bookings);
});

module.exports = router;
