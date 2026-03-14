const express = require('express');
const router = express.Router();
const About = require('../models/About');

// Get all About sections       
router.get('/', async (req, res) => {
  try {
    const abouts = await About.find().sort({ createdAt: -1 });
    res.json(abouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Create teacher (for admin - you can add auth later)
router.post('/', async (req, res) => {
  try {
    const about = new About(req.body);
    await about.save();
    res.status(201).json(about);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;



