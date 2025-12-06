const Player = require('./Player');
const Match = require('./Match');
const PlayerMatchStats = require('./PlayerMatchStats');

// Many-to-many
Player.belongsToMany(Match, {
  through: PlayerMatchStats,
  foreignKey: 'playerId',
  otherKey: 'matchId'
});

Match.belongsToMany(Player, {
  through: PlayerMatchStats,
  foreignKey: 'matchId',
  otherKey: 'playerId'
});

// One-to-many
PlayerMatchStats.belongsTo(Player, { foreignKey: 'playerId' });
PlayerMatchStats.belongsTo(Match, { foreignKey: 'matchId' });

// Reverse associations
Player.hasMany(PlayerMatchStats, { foreignKey: 'playerId' });
Match.hasMany(PlayerMatchStats, { foreignKey: 'matchId' });

// Export associations
module.exports = { Player, Match, PlayerMatchStats };
