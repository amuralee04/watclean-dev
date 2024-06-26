// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/bookings');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB set-up
const user = process.env.USERNAME;
const password = process.env.PASSWORD;

mongoose.connect(`mongodb+srv://${user}:${password}@watclean.juizn5s.mongodb.net/?retryWrites=true&w=majority&appName=watclean`, {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});