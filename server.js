const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./authRoutes');

const app = express();

// Middleware and other configurations go here

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hungryhub2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the authentication routes
app.use(express.json()); // Middleware to parse JSON requests
app.use('/api/auth', authRoutes); // Set the route prefix as needed

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
