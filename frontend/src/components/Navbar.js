import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🌟</span>
          BrightChoice
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/courses" className="navbar-link">Courses</Link>
          </li>
          <li className="navbar-item">
            <Link to="/packages" className="navbar-link">Packages</Link>
          </li>
          <li className="navbar-item">
            <Link to="/reviews" className="navbar-link">Reviews</Link>
          </li>
          <li className="navbar-item">
            <Link to="/teachers" className="navbar-link">Teachers</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



