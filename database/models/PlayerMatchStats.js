const { DataTypes } = require('sequelize');
const sequelize = require('../index');

// Define the PlayerMatchStats model
const PlayerMatchStats = sequelize.define('PlayerMatchStats', {
  championPlayed: DataTypes.STRING,
  kills: DataTypes.INTEGER,
  deaths: DataTypes.INTEGER,
  assists: DataTypes.INTEGER,
  damageDealt: DataTypes.INTEGER,
  damageTaken: DataTypes.INTEGER,
  goldEarned: DataTypes.INTEGER,
  cs: DataTypes.INTEGER,
  visionScore: DataTypes.INTEGER,
  damagePerMinute: DataTypes.FLOAT,
  goldEfficiency: DataTypes.FLOAT,
  killParticipation: DataTypes.FLOAT,
  csPerMinute: DataTypes.FLOAT,
});

// Export the PlayerMatchStats model
module.exports = PlayerMatchStats;
