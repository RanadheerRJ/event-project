import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://18.236.133.167/api/events/')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleBookPass = (event) => {
    navigate(`/eventpass/${event.id}`, { state: { event } });
  };

  return (
    <div>
      <h1>Upcoming Events</h1>
      <p>Join us for these exciting events and celebrations. Click on an event to learn more and book your tickets.</p>
      <div className="events-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} onBookPass={() => handleBookPass(event)} />
        ))}
      </div>
    </div>
  );
};

const EventCard = ({ event, onBookPass }) => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const eventDate = new Date(event.date).getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeRemaining('Event has started!');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [event.date]);

  return (
    <div className="event-card">
      <h2>{event.name}</h2>
      <p>{event.date}</p>
      <p>{event.venue}</p>
      <p>{event.description}</p>
      <p>Time remaining: {timeRemaining}</p>
      <button onClick={onBookPass}>Book Event Pass</button>
    </div>
  );
};

export default Events;
