const express = require('express');
const router = express.Router();
const parksCtrl = require('../controllers/parks')
const verifyUser = require('../config/verifyUser')

// GET /parks 
router.get('/', parksCtrl.index);

// POST /parks
router.post('/', verifyUser, parksCtrl.create);

// GET /trails/new
router.get('/new', verifyUser, parksCtrl.new);

// GET /trails/:id
router.get('/:id', parksCtrl.show);

module.exports = router;