const express = require('express');
const router = express.Router();
const trailsCtrl = require("../controllers/trails.js")

// GET /trails
router.get('/trails', trailsCtrl.index);

// GET /trails/new

// GET /trails/:id/new

// GET /trails/:id
router.get('/trails/:id', trailsCtrl.show);

// POST /trails/:id
router.post('/trails/:id', trailsCtrl.create);

module.exports = router;