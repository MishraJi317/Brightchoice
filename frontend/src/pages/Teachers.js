import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Teachers.css';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
  }, []);


  const fetchTeachers = async () => {
    try {
      const response = await axios.get('/api/teachers');
      setTeachers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Teachers:', error);
      // Set sample data if API fails
      setTeachers([
        {
          teacherName: "Bharti",
          qualification: "XYZ",
          experience: 2
        },
        {
          teacherName: "Khushboo",
          qualification: "XYZ",
          experience: 2
        }
        , {
          teacherName: "XYZ",
          qualification: "XYZ",
          experience: 2
        }
      ]);
      setLoading(false);
    }
  };


  if (loading) {
    return (
      <div className="courses-page">
        <div className="loading">Loading Teachers Info... 🎨</div>
      </div>
    );
  }

  return (
   <div className="teachers-container">

    <div className="teachers-header">
        <h1>🌟 Our Amazing Teachers 🌟</h1>
        <p>Meet our dedicated and experienced teachers who make learning fun!</p>
      </div>

    {teachers.length === 0 ? (
          <div className="no-teachers">
            <p>No teachers available at the moment. Check back soon! 🎉</p>
          </div>
        ) : (
          
          <div className="teachers-grid">
            {teachers.map((teacher) => (
               <article class="profile-card" aria-label="Profile card">
               <header class="profile-header">
                 <div class="avatar" aria-hidden="true">
                  
                   <img src="/assets/teacher_pfp.png" alt="Teacher Profile" />
                 </div>
           
                 <div class="name-qual">
                   <div class="name">{teacher.teacherName}</div>
                   <div class="qualification">{teacher.qualification}</div>
                 </div>
               </header>
           
               <div class="meta" role="list">
                 <div class="experience" role="listitem">{teacher.experience}</div>

               </div>
           
               <p class="bio">
               </p>
             </article>
            ))}
          </div>
        )}
   </div>
  );
};

export default Teachers;