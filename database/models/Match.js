const { DataTypes } = require('sequelize');
const sequelize = require('../index');

// Define the Match model
const Match = sequelize.define('Match', {
  matchId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  matchDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER, // Duration in seconds
    allowNull: false,
  },
  patchVersion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teamBlue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teamRed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  winner: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Export the Match model
module.exports = Match;
