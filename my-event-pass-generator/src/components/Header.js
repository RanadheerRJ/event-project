import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/events" activeClassName="active">Events</NavLink></li>
        <li><NavLink to="/contactus" activeClassName="active">Contact Us</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
