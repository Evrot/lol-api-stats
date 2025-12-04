const Player = require('../database/models/Player');

// Middleware to check if a player exists by ID
const checkPlayerExists = async (req, res, next) => {
  const player = await Player.findByPk(req.params.id);
  if (!player) {
    return res.status(404).json({ error: 'Player not found' });
  }
  req.player = player; // pass player object to next middleware/handler
  next();
};

// Export the middleware
module.exports = checkPlayerExists;
