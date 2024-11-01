const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});
router.get('/views/dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/dashboard.html'));
});
router.get('/views/register.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/register.html'));
});

module.exports = router;
