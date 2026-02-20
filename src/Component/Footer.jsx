import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Parmar Brother Foodstep serves authentic Indian cuisine with fresh ingredients and traditional recipes.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#orders">Orders</a></li>
            <li><a href="#admin">Admin</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@parmarbrother.com</p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Address: Street, City, Country</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Parmar Brother Foodstep. All rights reserved.</p>
      </div>
    </footer>
  );
}
