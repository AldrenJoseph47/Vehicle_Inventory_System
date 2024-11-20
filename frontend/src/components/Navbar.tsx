import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css'


const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      {/* Navbar Title */}
      <h1 className="navbar-title">Vehicle Inventory</h1>

      {/* Navbar Links */}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>

        {isAuthenticated ? (
          <>
            <Link to="/vehicle-list" className="navbar-link">
              Vehicle List
            </Link>
            <Link to="/" onClick={logout} className="navbar-link">
              Logout
            </Link>
          </>
        ) : (
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
