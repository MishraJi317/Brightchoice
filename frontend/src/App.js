import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Packages from './pages/Packages';
import Reviews from './pages/Reviews';
import Teachers from './pages/Teachers';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;



