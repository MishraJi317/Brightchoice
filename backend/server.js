const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const dirname = path.resolve(); 

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/brightchoice';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected Successfully'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.use('/api/courses', require('./routes/courses'));
app.use('/api/packages', require('./routes/packages'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/teachers', require('./routes/teachers'));


app.use(express.static(path.join(dirname,"/frontend/build")))

app.get('*',(req,res) =>{
  res.sendFile(path.resolve(dirname,"frontend","build","index.html"))
});
// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'BrightChoice API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



