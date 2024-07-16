import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-nav">
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/contactus">Contact Us</Link>
    </div>
    <p>&copy; 2024 Event Pass Generator. All rights reserved.</p>
  </footer>
);

export default Footer;
