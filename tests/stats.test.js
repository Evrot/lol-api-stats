const request = require('supertest');
const app = require('../server');
const sequelize = require('../database');
const Player = require('../database/models/Player');
const Match = require('../database/models/Match');
const PlayerMatchStats = require('../database/models/PlayerMatchStats');

// Setup and teardown
beforeAll(async () => {
  process.env.NODE_ENV = 'test';
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

// Tests
describe("PlayerMatchStats API", () => {

  test("POST /api/stats should create stats", async () => {
    const player = await Player.create({
      summonerName: "Faker",
      teamName: "T1",
      role: "Mid",
      region: "KR"
    });

    const match = await Match.create({
      matchDate: "2023-11-10",
      duration: 1800,
      patchVersion: "14.1",
      teamBlue: "T1",
      teamRed: "G2",
      winner: "T1"
    });

    const res = await request(app)
      .post('/api/stats')
      .send({
        playerId: player.playerId,
        matchId: match.matchId,
        championPlayed: "Ahri",
        kills: 10,
        deaths: 2,
        assists: 8,
        damageDealt: 25000
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.playerId).toBe(player.playerId);
  });

});
