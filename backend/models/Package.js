const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  duration: {
    type: String,
    required: true
  },
  features: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Package', packageSchema);



