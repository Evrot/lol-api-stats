const sequelize = require('./index');
const Player = require('./models/Player');
const Match = require('./models/Match');
const PlayerMatchStats = require('./models/PlayerMatchStats');

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Recreate tables
    await sequelize.sync({ force: true });

    // Seed Players
    const players = await Player.bulkCreate([
      { summonerName: 'ShadowBlade', teamName: 'Blue Lions', role: 'Mid', region: 'NA' },
      { summonerName: 'DragonFury', teamName: 'Red Dragons', role: 'Top', region: 'EU' },
      { summonerName: 'SwiftArrow', teamName: 'Blue Lions', role: 'ADC', region: 'NA' },
      { summonerName: 'IronShield', teamName: 'Red Dragons', role: 'Support', region: 'EU' },
      { summonerName: 'NightHunter', teamName: 'Blue Lions', role: 'Jungle', region: 'KR' },
    ]);

    // Seed Matches
    const matches = await Match.bulkCreate([
      {
        matchDate: new Date('2025-12-01T15:00:00'),
        duration: 2100,
        patchVersion: '13.23',
        teamBlue: 'Blue Lions',
        teamRed: 'Red Dragons',
        winner: 'Blue Lions',
      },
      {
        matchDate: new Date('2025-12-02T18:00:00'),
        duration: 1950,
        patchVersion: '13.23',
        teamBlue: 'Blue Lions',
        teamRed: 'Red Dragons',
        winner: 'Red Dragons',
      },
    ]);

    // Seed PlayerMatchStats
    const stats = await PlayerMatchStats.bulkCreate([
      {
        playerId: players[0].playerId,
        matchId: matches[0].matchId,
        championPlayed: 'Ahri',
        kills: 10,
        deaths: 2,
        assists: 5,
        damageDealt: 20000,
        damageTaken: 5000,
        goldEarned: 15000,
        cs: 250,
        visionScore: 30,
        damagePerMinute: 571.43,
        goldEfficiency: 1.2,
        killParticipation: 0.5,
        csPerMinute: 7.14,
      },
      {
        playerId: players[1].playerId,
        matchId: matches[0].matchId,
        championPlayed: 'Darius',
        kills: 5,
        deaths: 4,
        assists: 6,
        damageDealt: 18000,
        damageTaken: 7000,
        goldEarned: 14000,
        cs: 200,
        visionScore: 20,
        damagePerMinute: 514.29,
        goldEfficiency: 1.1,
        killParticipation: 0.4,
        csPerMinute: 5.71,
      },
      
    ]);

    console.log('Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('Error seeding database', err);
  }
};

// Run the seed function
seedDatabase();
