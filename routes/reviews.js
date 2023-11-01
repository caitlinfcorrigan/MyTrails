const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const verifyUser = require('../config/verifyUser')


// GET /reviews -- User views My Reviews
router.get('/', verifyUser, reviewsCtrl.index);

// GET /reviews/edit
router.get('/:id/edit', verifyUser, reviewsCtrl.edit);

// POST /reviews
// router.post('/', reviewsCtrl.create);

// PUT /reviews/:id  -- User modifies their review
router.put('/:id', verifyUser, reviewsCtrl.update);

// DELETE /reviews/:id -- User deletes their review
router.delete('/:id', verifyUser, reviewsCtrl.delete);

module.exports = router;