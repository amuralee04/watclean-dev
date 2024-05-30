const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  cleanerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  time: String,
  status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' },
});
module.exports = mongoose.model('Booking', BookingSchema);