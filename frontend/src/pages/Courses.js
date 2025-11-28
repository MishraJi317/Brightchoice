import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('/api/courses');
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching courses:', error);
      // Set sample data if API fails
      setCourses([
        {
          _id: '1',
          title: 'Fun with Coding',
          description: 'Learn programming basics through fun games and interactive activities!',
          ageGroup: '6-10 years',
          duration: '12 weeks',
          price: 199,
          category: 'Technology',
          image: '💻'
        },
        {
          _id: '2',
          title: 'Creative Art Studio',
          description: 'Express yourself through painting, drawing, and digital art!',
          ageGroup: '5-12 years',
          duration: '10 weeks',
          price: 179,
          category: 'Arts',
          image: '🎨'
        },
        {
          _id: '3',
          title: 'Math Adventures',
          description: 'Make math fun with puzzles, games, and real-world problems!',
          ageGroup: '7-11 years',
          duration: '14 weeks',
          price: 189,
          category: 'Mathematics',
          image: '🔢'
        },
        {
          _id: '4',
          title: 'Science Explorers',
          description: 'Discover the wonders of science through exciting experiments!',
          ageGroup: '6-10 years',
          duration: '12 weeks',
          price: 199,
          category: 'Science',
          image: '🔬'
        },
        {
          _id: '5',
          title: 'Language Learning',
          description: 'Learn new languages through stories, songs, and games!',
          ageGroup: '5-12 years',
          duration: '16 weeks',
          price: 219,
          category: 'Languages',
          image: '🌍'
        },
        {
          _id: '6',
          title: 'Music & Rhythm',
          description: 'Explore music, learn instruments, and create your own songs!',
          ageGroup: '6-11 years',
          duration: '10 weeks',
          price: 179,
          category: 'Music',
          image: '🎵'
        }
      ]);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="courses-page">
        <div className="loading">Loading amazing courses... 🎨</div>
      </div>
    );
  }

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>🌟 Our Amazing Courses 🌟</h1>
        <p>Choose from a variety of fun and educational courses designed for your child!</p>
      </div>
      <div className="courses-container">
        {courses.length === 0 ? (
          <div className="no-courses">
            <p>No courses available at the moment. Check back soon! 🎉</p>
          </div>
        ) : (
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course._id} className="course-card">
                <div className="course-icon">{course.image || '📚'}</div>
                <div className="course-category">{course.category}</div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-details">
                  <div className="course-detail">
                    <span className="detail-label">👶 Age:</span>
                    <span>{course.ageGroup}</span>
                  </div>
                  <div className="course-detail">
                    <span className="detail-label">⏱️ Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="course-price">
                  <span className="price-amount">${course.price}</span>
                  <span className="price-label">per course</span>
                </div>
                <button className="course-button">Enroll Now! 🚀</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;



