const request = require('supertest');
const app = require('../server');
const sequelize = require('../database');
const Player = require('../database/models/Player');

// Setup and teardown
beforeAll(async () => {
  process.env.NODE_ENV = 'test';
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Players API", () => {

  test("POST /api/players should create a player", async () => {
    const res = await request(app)
      .post('/api/players')
      .send({
        summonerName: "Faker",
        teamName: "T1",
        role: "Mid",
        region: "KR"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.summonerName).toBe("Faker");
  });

  test("GET /api/players should return list of players", async () => {
    const res = await request(app).get('/api/players');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /api/players/:id should return a player", async () => {
    const player = await Player.create({
      summonerName: "Caps",
      teamName: "G2",
      role: "Mid",
      region: "EUW"
    });

    const res = await request(app).get(`/api/players/${player.playerId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.summonerName).toBe("Caps");
  });

  test("GET /api/players/:id should return 404 for missing player", async () => {
    const res = await request(app).get('/api/players/99999');
    expect(res.statusCode).toBe(404);
  });

});
