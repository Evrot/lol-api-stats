# League of Legends Stats API

A REST API built for my final project in Application Development 1.
This API provides structured, relational data for League of Legends players, matches, and per-player match statistics.
It supports CRUD operations, relational queries, and is fully tested with Jest/Supertest.

## Features

Player CRUD (create, list, update, delete)

Match CRUD

PlayerMatchStats CRUD

Relational endpoint: GET /api/matches/:id/stats

Sequelize ORM (SQLite)

Modularized route structure

Error-handling middleware

Logger middleware

Fully tested (Jest + Supertest)

Postman-ready API

## Installation & Setup
1. Clone repository
git clone https://github.com/<your-username>/lol-api-stats.git
cd lol-api-stats

2. Install dependencies
npm install

3. Initialize the database
npm run setup-db
npm run seed-db

4. Run in development mode
npm run dev

5. Run tests
npm test


This uses an in-memory SQLite database for test isolation.

## API Endpoints
### Players
➤ GET /api/players

Returns all players.

Response:
[
  {
    "playerId": 1,
    "summonerName": "Faker",
    "teamName": "T1",
    "role": "Mid",
    "region": "KR"
  }
]

➤ GET /api/players/:id

Returns a single player.

➤ POST /api/players

Creates a player.

Body:
{
  "summonerName": "Faker",
  "teamName": "T1",
  "role": "Mid",
  "region": "KR"
}

➤ PUT /api/players/:id

Updates a player.

➤ DELETE /api/players/:id

Deletes a player.

### Matches
➤ GET /api/matches
➤ GET /api/matches/:id
➤ POST /api/matches

Body:

{
  "matchDate": "2024-01-01T12:00:00Z",
  "duration": 1800,
  "patchVersion": "14.1",
  "teamBlue": "T1",
  "teamRed": "G2",
  "winner": "T1"
}

➤ PUT /api/matches/:id
➤ DELETE /api/matches/:id
### Match Stats (Relational Endpoint)
➤ GET /api/matches/:id/stats

Returns all PlayerMatchStats for a given match.

### PlayerMatchStats
➤ POST /api/stats
Body:
{
  "playerId": 1,
  "matchId": 1,
  "championPlayed": "Ahri",
  "kills": 5,
  "deaths": 1,
  "assists": 8,
  "damageDealt": 20000
}

➤ GET /api/stats
➤ GET /api/stats/:id
➤ PUT /api/stats/:id
➤ DELETE /api/stats/:id
## Testing

Run tests with:

npm test


All tests use Jest + Supertest and an isolated in-memory SQLite database.

## Tech Stack

Node.js

Express

SQLite

Sequelize ORM

Jest / Supertest

Postman (API documentation)