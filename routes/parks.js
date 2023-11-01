const express = require('express');
const router = express.Router();
const parksCtrl = require("../controllers/parks.js")

// GET /parks 
router.get('/', parksCtrl.index);

// POST /parks
router.post('/', parksCtrl.create);

// GET /trails/new
router.get('/new', parksCtrl.new);

// GET /trails/:id
router.get('/:id', parksCtrl.show);

module.exports = router;