const express = require('express');
const router = express.Router();
const trailsCtrl = require('../controllers/trails')
const verifyUser = require('../config/verifyUser')

// GET /trails (use / because of how it is mounted in server.js)
router.get('/', trailsCtrl.index);

// GET /trails/new
router.get('/new', verifyUser, trailsCtrl.new);

// POST /trails
router.post('/', verifyUser, trailsCtrl.create);

// GET /trails/:id
router.get('/:id', trailsCtrl.show);

module.exports = router;