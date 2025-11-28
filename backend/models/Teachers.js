const mongoose = require('mongoose');

const teachersSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Teachers', teachersSchema);



