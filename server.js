const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON request bodies
app.use(express.json());


// Logger middleware
const logger = require('./middleware/logger');
app.use(logger);

// Load models and associations
require('./database/models/associations');

// Import routes
app.use('/api/players', require('./routes/players'));
app.use('/api/matches', require('./routes/matches'));
app.use('/api/stats', require('./routes/playerMatchStats'));


// Basic root route
app.get('/', (req, res) => {
  res.send('League of Legends Stats API is running!');
});

// Error handling middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Start server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
