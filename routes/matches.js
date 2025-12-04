const express = require('express');
const router = express.Router();
const Match = require('../database/models/Match');

// GET all matches
router.get('/', async (req, res) => {
  try {
    const matches = await Match.findAll();
    res.json(matches);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
});

// GET a single match by ID
router.get('/:id', async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) return res.status(404).json({ error: 'Match not found' });
    res.json(match);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch match' });
  }
});

// POST create a new match
router.post('/', async (req, res) => {
  try {
    const newMatch = await Match.create(req.body);
    res.status(201).json(newMatch);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create match', details: err });
  }
});

// PUT update a match
router.put('/:id', async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) return res.status(404).json({ error: 'Match not found' });

    await match.update(req.body);
    res.json(match);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update match', details: err });
  }
});

// DELETE a match
router.delete('/:id', async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) return res.status(404).json({ error: 'Match not found' });

    await match.destroy();
    res.json({ message: 'Match deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete match' });
  }
});

module.exports = router;

