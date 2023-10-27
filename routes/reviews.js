const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews')

// GET /reviews -- User views My Reviews
router.get('/reviews', reviewsCtrl.index);

// PUT /reviews/:id  -- User modifies their review
router.put('/reviews/:id', reviewsCtrl.update);

// DELETE /reviews/:id -- User deletes their review
router.delete('/reviews/:id', reviewsCtrl.delete);