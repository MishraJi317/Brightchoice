import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Courses.css';


const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coursedata, setCoursedata] = useState();
  const [isvisible, setIsvisible] = useState(false);
  const [sourceimg, setSourceimg] = useState('');

const viewImage = (imgsrc) => {
  setSourceimg(imgsrc);
  setIsvisible(true);
  document.body.style.overflow = 'hidden';
}


const hideImage = () => {
  setIsvisible(false);
    document.body.style.overflow = 'auto';
}

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
          id: '1',
          title: 'Fun with Coding',
          description: 'Learn programming basics through fun games and interactive activities!',
          ageGroup: '6-10 years',
          duration: '12 weeks',
          price: 199,
          category: 'Technology',
          image: '💻'
        }
      ]);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    
    try {
    

      setCoursedata({
      ...coursedata,
      [e.target.name]: e.target.value
    });

      

      const courses = await axios.post('/api/courses', coursedata);
      setCourses([courses.data, ...courses]);
      
    } catch (error) {
      console.error('Error submitting Cources:', error);
     
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
      {isvisible && (
      <div className="course-image">
        <img className='closebtn' onClick={() => hideImage()} src='/assets/close.png'/>
        <img className='course_img' src={`${sourceimg}`} alt="" />
      </div>) }

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
                <div className="course-icon">
                  <img className='course_id' src={course.image} alt={course.title} />
                </div>
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
                <button className="course-button" onClick={ () => viewImage(course.pamphlet_image)}>Know More 🚀</button>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;



