const express = require('express');
const router = express.Router();
const Player = require('../database/models/Player');
const checkPlayerExists = require('../middleware/checkPlayerExists');

// GET all players
router.get('/', async (req, res) => {
  const players = await Player.findAll();
  res.json(players);
});

// GET a single player by ID
router.get('/:id', async (req, res) => {
  const player = await Player.findByPk(req.params.id);
  if (!player) return res.status(404).json({ error: 'Player not found' });
  res.json(player);
});

// POST create a new player
router.post('/', async (req, res) => {
  const newPlayer = await Player.create(req.body);
  res.status(201).json(newPlayer);
});

// PUT update an existing player
router.put('/:id', checkPlayerExists, async (req, res) => {
  await req.player.update(req.body);
  res.json(req.player);
});

// DELETE a player
router.delete('/:id', checkPlayerExists, async (req, res) => {
  await req.player.destroy();
  res.json({ message: 'Player deleted successfully' });
});

module.exports = router;
