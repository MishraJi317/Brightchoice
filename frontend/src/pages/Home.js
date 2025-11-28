import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-icon">🎨</span>
            Welcome to BrightChoice!
            <span className="title-icon">✨</span>
          </h1>
          <p className="hero-subtitle">
            Where Learning Meets Fun! Discover amazing courses designed 
            especially for your little ones.
          </p>
          <div className="hero-buttons">
            <a href="/courses" className="btn btn-primary">Explore Courses</a>
            <a href="/packages" className="btn btn-secondary">View Packages</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-elements">
            <span className="float-emoji">📚</span>
            <span className="float-emoji">🎯</span>
            <span className="float-emoji">🌟</span>
            <span className="float-emoji">🎨</span>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose BrightChoice?</h2>
          <div className="features-grid">
            <div className="feature-card" style={{ background: 'linear-gradient(135deg, #FF6B9D 0%, #FF8B42 100%)' }}>
              <div className="feature-icon">🎓</div>
              <h3>Expert Teachers</h3>
              <p>Learn from experienced educators who make learning fun!</p>
            </div>
            <div className="feature-card" style={{ background: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)' }}>
              <div className="feature-icon">🎮</div>
              <h3>Interactive Learning</h3>
              <p>Engaging activities and games that keep kids excited!</p>
            </div>
            <div className="feature-card" style={{ background: 'linear-gradient(135deg, #FFE66D 0%, #FF8B42 100%)' }}>
              <div className="feature-icon">🏆</div>
              <h3>Progress Tracking</h3>
              <p>Watch your child grow and achieve amazing milestones!</p>
            </div>
            <div className="feature-card" style={{ background: 'linear-gradient(135deg, #A8E6CF 0%, #88D8A3 100%)' }}>
              <div className="feature-icon">💡</div>
              <h3>Creative Projects</h3>
              <p>Hands-on projects that spark creativity and imagination!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Parents Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"My daughter loves her coding classes! The teachers are amazing!"</p>
              <p className="testimonial-author">- Sarah M.</p>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Best investment in my child's education. Highly recommended!"</p>
              <p className="testimonial-author">- John D.</p>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"The art classes have really brought out my son's creativity!"</p>
              <p className="testimonial-author">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;



