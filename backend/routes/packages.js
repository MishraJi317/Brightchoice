const express = require('express');
const router = express.Router();
const Package = require('../models/Package');

// Get all packages
router.get('/', async (req, res) => {
  try {
    const packages = await Package.find().populate('courses').sort({ createdAt: -1 });
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single package
router.get('/:id', async (req, res) => {
  try {
    const package = await Package.findById(req.params.id).populate('courses');
    if (!package) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.json(package);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create package (for admin - you can add auth later)
router.post('/', async (req, res) => {
  try {
    const package = new Package(req.body);
    await package.save();
    res.status(201).json(package);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;



