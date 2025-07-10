// 📁 backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const carRoutes = require('./routes/car');
const bookingRoutes = require('./routes/booking');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/cars', carRoutes);
app.use('/booking', bookingRoutes);

app.get('/', (req, res) => {
  res.send('🚗 Car Rental Backend Running');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server: http://localhost:${PORT}`));
  })
  .catch(err => console.error('❌ DB Error:', err));