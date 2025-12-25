import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌟 BrightChoice</h3>
            <p>Making learning fun and engaging for kids!</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/reviews">Reviews</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: brightchoice011@gmail.com</p>
            <p>Phone: 7982553140</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 BrightChoice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



