const express = require('express');
const router = express.Router();
const PlayerMatchStats = require('../database/models/PlayerMatchStats');

// GET all stats
router.get('/', async (req, res) => {
  try {
    const stats = await PlayerMatchStats.findAll();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// GET stats by ID
router.get('/:id', async (req, res) => {
  try {
    const stat = await PlayerMatchStats.findByPk(req.params.id);
    if (!stat) return res.status(404).json({ error: 'Stat not found' });
    res.json(stat);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stat' });
  }
});

// POST new stat
router.post('/', async (req, res) => {
  try {
    const newStat = await PlayerMatchStats.create(req.body);
    res.status(201).json(newStat);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create stat', details: err });
  }
});

// PUT update stat
router.put('/:id', async (req, res) => {
  try {
    const stat = await PlayerMatchStats.findByPk(req.params.id);
    if (!stat) return res.status(404).json({ error: 'Stat not found' });

    await stat.update(req.body);
    res.json(stat);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update stat', details: err });
  }
});

// DELETE stat
router.delete('/:id', async (req, res) => {
  try {
    const stat = await PlayerMatchStats.findByPk(req.params.id);
    if (!stat) return res.status(404).json({ error: 'Stat not found' });

    await stat.destroy();
    res.json({ message: 'Stat deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete stat' });
  }
});

module.exports = router;
