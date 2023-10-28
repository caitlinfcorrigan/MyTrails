const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


// GET /reviews -- User views My Reviews
router.get('/', reviewsCtrl.index);

// PUT /reviews/:id  -- User modifies their review
router.put('/:id', reviewsCtrl.update);

// DELETE /reviews/:id -- User deletes their review
router.delete('/:id', reviewsCtrl.delete);

module.exports = router;