const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate('courseId', 'title')
      .populate('packageId', 'name')
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get reviews for a specific course or package
router.get('/:type/:id', async (req, res) => {
  try {
    const { type, id } = req.params;
    const query = type === 'course' ? { courseId: id } : { packageId: id };
    const reviews = await Review.find(query).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a review
router.post('/', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    const populatedReview = await Review.findById(review._id)
      .populate('courseId', 'title')
      .populate('packageId', 'name');
    res.status(201).json(populatedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;



