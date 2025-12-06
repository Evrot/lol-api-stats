const { Sequelize } = require('sequelize');
const path = require('path');

// Detect test environment
const isTest = process.env.NODE_ENV === 'test';

// Choose database based on environment
const storagePath = isTest
  ? path.join(__dirname, '../database.test.sqlite')  // test DB
  : path.join(__dirname, '../database.sqlite');      // main DB

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: storagePath,
  logging: false, // disable logging for cleaner test output
});

module.exports = sequelize;
