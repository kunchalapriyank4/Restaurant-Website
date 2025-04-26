// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Database Connection
mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Menu Model
const MenuItem = mongoose.model('MenuItem', new mongoose.Schema({
  name: String,
  description: String,
  price: Number
}));

// Routes
app.get('/api/menu', async (req, res) => {
  const menuItems = await MenuItem.find();
  res.json(menuItems);
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
