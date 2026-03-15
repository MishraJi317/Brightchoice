import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './About.css';


const About = () => {

  return (
    <div className="about-page">
      <div className="about-header">
        <div className='about-content'>
          <h1>About Us</h1>
          <p>Welcome to our online learning platform! Our goal is to make high-quality education accessible to learners everywhere. We believe that learning should not be limited by location, background, or schedule. By combining modern technology with carefully designed courses, we provide a flexible and engaging environment where anyone can develop new knowledge and skills.
          </p>
          <br />
          <p>
            Established in 2023 by Bharti Mishra, Bright Choice is proud to nurture and support the academic growth of over 200+ students.
            Bright Choice is committed to shaping confident learners through quality education, thoughtful guidance, and a positive learning experience. We focus on building strong academic foundations while encouraging curiosity and lifelong learning.
          </p>
          <br />
          <p>
            Behind our platform is a team of experienced educators, industry professionals, and passionate contributors who are dedicated to delivering meaningful learning experiences. Each course is carefully developed to ensure clear explanations, practical examples, and up-to-date information so that learners receive valuable and relevant knowledge.
          </p>
          <br />
          
          
          <p>
            Join us on this journey of learning, discovery, and growth.</p>
        </div>
        <div className='founders-desk'>
           <h1>From the Founder’s Desk</h1>
           <img src="/assets/teacher_pfp.png" alt="Founder" className='founder-img'/>
          <p>
            At our learning platform, we believe that every child has the potential to learn, grow, and shine when guided with the right approach. Our aim is to make education engaging, meaningful, and confidence-building through structured programs in phonics, language learning, and teacher training. We are committed to creating strong foundations and inspiring a lifelong love for learning in every learner we work with.
          </p>
          <br/>
          <br/>
          <p> <b>-- Bharti Mishra, Founder</b></p>
        </div>
      </div>


    </div>
  );
};

export default About;



