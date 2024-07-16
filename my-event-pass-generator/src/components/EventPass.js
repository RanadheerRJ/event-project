import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';
import Modal from './Modal';
import './EventPass.css';

const EventPass = () => {
  const { state } = useLocation();
  const event = state?.event;

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [passGenerated, setPassGenerated] = useState(false);
  const [error, setError] = useState('');

  const generateTicketNumber = () => {
    return `T-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  const generateSeatNumber = () => {
    return `S-${Math.floor(Math.random() * 100) + 1}`;
  };

  const validateForm = () => {
    if (!name || !phoneNumber || !email) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setTicketNumber(generateTicketNumber());
      setSeatNumber(generateSeatNumber());
      setPassGenerated(true);
    }
  };

  const handleCloseModal = () => {
    setPassGenerated(false);
    setName('');
    setPhoneNumber('');
    setEmail('');
    setTicketNumber('');
    setSeatNumber('');
  };

  return (
    <div className="event-pass">
      <h1>Event Pass for {event?.name}</h1>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Generate Pass</button>
      </form>
      <Modal show={passGenerated} onClose={handleCloseModal}>
        <h2>Pass generated successfully!</h2>
        <p>Name: {name}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Email: {email}</p>
        <p>Event: {event?.name}</p>
        <p>Venue: {event?.venue}</p>
        <p>Date: {event?.date}</p>
        <p>Ticket Number: {ticketNumber}</p>
        <p>Seat Number: {seatNumber}</p>
        <div className="qr-code">
          <QRCode value={JSON.stringify({
            name,
            phoneNumber,
            email,
            event: event?.name,
            venue: event?.venue,
            date: event?.date,
            ticketNumber,
            seatNumber
          })} />
        </div>
      </Modal>
    </div>
  );
};

export default EventPass;
