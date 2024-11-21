import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo192.png" alt="Logo" className="footer-logo-img" />
        </div>
        <div className="footer-text">
          <p>&copy; 2024 Vehicle Inventory System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
