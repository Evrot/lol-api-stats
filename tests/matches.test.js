const request = require('supertest');
const app = require('../server');
const sequelize = require('../database');
const Match = require('../database/models/Match');
const Player = require('../database/models/Player');
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
describe("Matches API", () => {

  test("POST /api/matches should create a match", async () => {
    const res = await request(app)
      .post('/api/matches')
      .send({
        matchDate: "2023-11-10",
        duration: 1800,
        patchVersion: "14.1",
        teamBlue: "T1",
        teamRed: "G2",
        winner: "T1"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.winner).toBe("T1");
  });

  test("GET /api/matches should list matches", async () => {
    const res = await request(app).get('/api/matches');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /api/matches/:id should return a match", async () => {
    const match = await Match.create({
      matchDate: "2023-11-11",
      duration: 1900,
      patchVersion: "14.1",
      teamBlue: "C9",
      teamRed: "100T",
      winner: "C9"
    });

    const res = await request(app).get(`/api/matches/${match.matchId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.winner).toBe("C9");
  });

  test("GET /api/matches/:id/stats should work when stats exist", async () => {
    const player = await Player.create({
      summonerName: "Faker",
      teamName: "T1",
      role: "Mid",
      region: "KR"
    });

    const match = await Match.create({
      matchDate: "2023-11-11",
      duration: 1800,
      patchVersion: "14.1",
      teamBlue: "T1",
      teamRed: "G2",
      winner: "T1"
    });

    await PlayerMatchStats.create({
      matchId: match.matchId,
      playerId: player.playerId,
      championPlayed: "Ahri",
      kills: 10,
      deaths: 1,
      assists: 9,
      damageDealt: 34000,
      damageTaken: 8000,
      goldEarned: 15000,
      cs: 300,
      visionScore: 22,
      killParticipation: 0.65,
      damagePerMinute: 600,
      goldEfficiency: 1.1,
      csPerMinute: 9.2
    });

    const res = await request(app).get(`/api/matches/${match.matchId}/stats`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});
