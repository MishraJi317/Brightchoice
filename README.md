# BrightChoice - Online Teaching Platform for Kids 🌟

A vibrant, kid-friendly MERN stack application for an online teaching platform that offers courses, packages, and allows parents to leave reviews.

## Features

- 🎨 **Bright, Colorful UI** - Kid-friendly design with vibrant colors and animations
- 📚 **Courses** - Browse and explore various educational courses
- 🎁 **Packages** - Special learning packages with discounts
- ⭐ **Reviews** - Parents can leave reviews and ratings
- 💾 **MongoDB Integration** - All data stored in MongoDB database

## Tech Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Styling**: CSS3 with gradients and animations

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Create a `.env` file in the backend directory**
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/brightchoice
   ```
   Or use MongoDB Atlas:
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start MongoDB** (if using local MongoDB)
   ```bash
   mongod
   ```

2. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   # or for development with auto-reload:
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

3. **Start the Frontend**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

### Seeding Sample Data (Optional)

To populate the database with sample courses, packages, and reviews:

```bash
cd backend
npm run seed
```

This will create sample data including:
- 6 courses (Coding, Art, Math, Science, Languages, Music)
- 3 packages (Starter, Explorer, Adventure)
- 5 sample reviews

You can also add data through the API endpoints or directly in MongoDB.

## API Endpoints

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create a course

### Packages
- `GET /api/packages` - Get all packages
- `GET /api/packages/:id` - Get single package
- `POST /api/packages` - Create a package

### Reviews
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/:type/:id` - Get reviews for course or package
- `POST /api/reviews` - Create a review

## Project Structure

```
BrightChoice/
├── backend/
│   ├── models/
│   │   ├── Course.js
│   │   ├── Package.js
│   │   └── Review.js
│   ├── routes/
│   │   ├── courses.js
│   │   ├── packages.js
│   │   └── reviews.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Courses.js
│   │   │   ├── Packages.js
│   │   │   └── Reviews.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Features in Detail

### Home Page
- Hero section with animated elements
- Feature cards highlighting platform benefits
- Testimonials section

### Courses Page
- Grid display of all available courses
- Course details including age group, duration, and price
- Bright, colorful course cards

### Packages Page
- Special learning packages with discounts
- Featured package highlighting
- Detailed feature lists

### Reviews Page
- Display all parent reviews
- Form to submit new reviews
- Star rating system
- Parent and child name display

## Customization

You can customize:
- Colors in CSS files (using CSS variables)
- Course and package data through the API
- MongoDB connection string in `.env` file
- Port numbers in backend and frontend

## Notes

- The frontend includes sample data that displays if the API is not connected
- Make sure MongoDB is running before starting the backend
- CORS is enabled for development (adjust for production)

## License

This project is open source and available for educational purposes.

---

Made with ❤️ for kids' education! 🌟

