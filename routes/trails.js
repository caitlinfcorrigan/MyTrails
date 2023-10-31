const express = require('express');
const router = express.Router();
const trailsCtrl = require("../controllers/trails.js")

// GET /trails (use / because of how it is mounted in server.js)
router.get('/', trailsCtrl.index);

// GET /trails/new
router.get('/new', trailsCtrl.new);

// POST /trails
router.post('/new', trailsCtrl.create);

// GET /trails/:id
router.get('/:id', trailsCtrl.show);

module.exports = router;