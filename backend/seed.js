const mongoose = require('mongoose');
require('dotenv').config();

const Course = require('./models/Course');
const Package = require('./models/Package');
const Review = require('./models/Review');
const Teacher = require('./models/Teachers');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/brightchoice';

const sampleCourses = [
  {
    title: 'Fun with Coding',
    description: 'Learn programming basics through fun games and interactive activities! Perfect for young minds to start their coding journey.',
    ageGroup: '6-10 years',
    duration: '12 weeks',
    price: 199,
    category: 'Technology',
    image: '💻'
  },
  {
    title: 'Creative Art Studio',
    description: 'Express yourself through painting, drawing, and digital art! Unleash your creativity with our amazing art classes.',
    ageGroup: '5-12 years',
    duration: '10 weeks',
    price: 179,
    category: 'Arts',
    image: '🎨'
  },
  {
    title: 'Math Adventures',
    description: 'Make math fun with puzzles, games, and real-world problems! Transform math from boring to exciting!',
    ageGroup: '7-11 years',
    duration: '14 weeks',
    price: 189,
    category: 'Mathematics',
    image: '🔢'
  },
  {
    title: 'Science Explorers',
    description: 'Discover the wonders of science through exciting experiments! Hands-on learning that sparks curiosity.',
    ageGroup: '6-10 years',
    duration: '12 weeks',
    price: 199,
    category: 'Science',
    image: '🔬'
  },
  {
    title: 'Language Learning',
    description: 'Learn new languages through stories, songs, and games! Make language learning fun and interactive.',
    ageGroup: '5-12 years',
    duration: '16 weeks',
    price: 219,
    category: 'Languages',
    image: '🌍'
  },
  {
    title: 'Music & Rhythm',
    description: 'Explore music, learn instruments, and create your own songs! Develop musical skills while having fun.',
    ageGroup: '6-11 years',
    duration: '10 weeks',
    price: 179,
    category: 'Music',
    image: '🎵'
  }
];

const samplePackages = [
  {
    name: 'Starter Pack',
    description: 'Perfect for beginners! Get started with 2 courses of your choice.',
    courses: [],
    price: 349,
    discount: 10,
    duration: '3 months',
    features: [
      '2 courses of your choice',
      'Weekly progress reports',
      'Certificate of completion',
      '24/7 parent support'
    ]
  },
  {
    name: 'Explorer Pack',
    description: 'For curious minds! Access to 5 courses with amazing discounts.',
    courses: [],
    price: 799,
    discount: 20,
    duration: '6 months',
    features: [
      '5 courses of your choice',
      'Weekly progress reports',
      'Certificates for all courses',
      'Priority support',
      'Bonus learning materials',
      'Live Q&A sessions'
    ]
  },
  {
    name: 'Adventure Pack',
    description: 'The ultimate learning experience! Unlimited courses for a full year.',
    courses: [],
    price: 1499,
    discount: 30,
    duration: '12 months',
    features: [
      'Unlimited courses',
      'Daily progress reports',
      'All certificates included',
      'VIP support',
      'Exclusive bonus content',
      'Monthly live sessions',
      'Early access to new courses',
      'Personal learning coach'
    ]
  }
];

const sampleTeachers = 
[
  {
    teacherName:"Bharti",
    qualification: "XYZ",
    experience: 2
  },
  {
    teacherName:"Khushboo",
    qualification: "XYZ",
    experience: 2
  }
  ,{
    teacherName:"XYZ",
    qualification: "XYZ",
    experience: 2
  }
]

const sampleReviews = [
  {
    parentName: 'Sarah Johnson',
    childName: 'Emma',
    rating: 5,
    comment: 'My daughter absolutely loves the coding classes! The teachers are patient and make learning so much fun. Highly recommend!',
  },
  {
    parentName: 'Michael Chen',
    childName: 'Alex',
    rating: 5,
    comment: 'Best investment in my child\'s education. The art classes have really brought out his creativity. Amazing platform!',
  },
  {
    parentName: 'Emily Rodriguez',
    childName: 'Sophia',
    rating: 5,
    comment: 'The math adventures course has made my daughter actually enjoy math! The interactive games are fantastic.',
  },
  {
    parentName: 'David Thompson',
    childName: 'Lucas',
    rating: 5,
    comment: 'Science Explorers is incredible! My son comes home excited to tell us about his experiments every day.',
  },
  {
    parentName: 'Lisa Wang',
    childName: 'Mia',
    rating: 5,
    comment: 'The language learning program is outstanding. Mia is already speaking basic phrases after just a few weeks!',
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing data
    await Course.deleteMany({});
    await Package.deleteMany({});
    await Review.deleteMany({});
    await Teacher.deleteMany({});
    console.log('Cleared existing data');

    // Insert courses
    const createdCourses = await Course.insertMany(sampleCourses);
    console.log(`Inserted ${createdCourses.length} courses`);

    // Update packages with course IDs
    samplePackages[0].courses = [createdCourses[0]._id, createdCourses[1]._id];
    samplePackages[1].courses = createdCourses.slice(0, 5).map(c => c._id);
    samplePackages[2].courses = createdCourses.map(c => c._id);

    // Insert packages
    const createdPackages = await Package.insertMany(samplePackages);
    console.log(`Inserted ${createdPackages.length} packages`);

    // Insert reviews
    const createdReviews = await Review.insertMany(sampleReviews);
    console.log(`Inserted ${createdReviews.length} reviews`);

     // Insert Teachers
     const createdTeachers = await Review.insertMany(sampleTeachers);
     console.log(`Inserted ${createdTeachers.length} reviews`);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();



