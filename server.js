const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const sessionRoutes = require('./routes/sessions');
const simulateRoutes = require('./routes/simulate');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/sessions', sessionRoutes);
app.use('/api/simulate', simulateRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.error('Mongo error:', err));
