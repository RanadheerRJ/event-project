import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to Event Pass Generator</h1>
      <p>Generate passes for your favorite events easily!</p>
      <div className="animation-container">
        <div className="animation-box" onClick={() => navigate('/events')}>
          <h2>Easy Booking</h2>
          <p>Click here to book your event pass easily.</p>
          <span className="tooltip">Book your pass in a few clicks!</span>
        </div>
        <div className="animation-box" onClick={() => navigate('/events')}>
          <h2>Check Exclusive Events</h2>
          <p>Discover and book exclusive events.</p>
          <span className="tooltip">Find events you won't want to miss!</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
