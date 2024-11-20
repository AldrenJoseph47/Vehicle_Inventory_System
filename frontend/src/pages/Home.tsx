// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Import the home page styles

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to the Vehicle Inventory System</h1>
        <p>Your one-stop platform to explore and manage vehicles.</p>
        <Link to="/vehicle-list" className="btn-primary">Browse Vehicles</Link>
      </div>

      {/* Quick Links Section */}
      <div className="quick-links">
        <h2>Quick Links</h2>
        <div className="links-container">
          <Link to="/login" className="link-card">
            <h3>Login</h3>
            <p>Access your account</p>
          </Link>
          <Link to="/vehicle-list" className="link-card">
            <h3>Vehicles</h3>
            <p>Browse and filter vehicles</p>
          </Link>
        </div>
      </div>

      {/* Vehicle Stats Section (Optional) */}
      <div className="stats-section">
        <h2>Our Vehicle Stats</h2>
        <div className="stats">
          <div className="stat-card">
            <h3>50+</h3>
            <p>Vehicles Available</p>
          </div>
          <div className="stat-card">
            <h3>100+</h3>
            <p>Satisfied Customers</p>
          </div>
          <div className="stat-card">
            <h3>5</h3>
            <p>Years in Business</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
