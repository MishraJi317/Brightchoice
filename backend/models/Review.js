const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  parentName: {
    type: String,
    required: true
  },
  childName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    default: null
  },
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
    default: null
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);



