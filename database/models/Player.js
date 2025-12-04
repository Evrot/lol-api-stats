const { DataTypes } = require('sequelize');
const sequelize = require('../index');

// Define the Player model
const Player = sequelize.define('Player', {
  playerId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  summonerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Export the Player model
module.exports = Player;
