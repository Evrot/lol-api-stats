const { DataTypes } = require('sequelize');
const sequelize = require('../index');
const Player = require('./Player');
const Match = require('./Match');

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

// Define relationships
Player.belongsToMany(Match, { through: PlayerMatchStats, foreignKey: 'playerId' });
Match.belongsToMany(Player, { through: PlayerMatchStats, foreignKey: 'matchId' });

// Export the PlayerMatchStats model
module.exports = PlayerMatchStats;
