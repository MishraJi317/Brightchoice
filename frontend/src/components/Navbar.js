import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="/assets/logo.jpeg" alt="EduPlatform Logo" className="logo-image" />
        </Link>

        {/* Hamburger Button */}
        <div 
          className={`menu-toggle ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          <li className="navbar-item">
            <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          </li>

          <li className="navbar-item">
            <Link to="/reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
          </li>

          <li className="navbar-item">
            <Link to="/teachers" onClick={() => setMenuOpen(false)}>Teachers</Link>
          </li>

          <li className="navbar-item">
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;



