const express = require('express');
const router = express.Router();
const trailsCtrl = require("../controllers/trails.js")

// GET /trails (use / because of how it is mounted in server.js)
router.get('/', trailsCtrl.index);

// GET /trails/new
router.get('/new', trailsCtrl.new);

// POST /trails/new
router.post('/new', trailsCtrl.createTrail);

// GET /trails/:id
router.get('/:id', trailsCtrl.show);

// POST /trails/:id
router.post('/:id', trailsCtrl.create);

module.exports = router;