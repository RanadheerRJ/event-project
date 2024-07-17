import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import './ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!name || !phoneNumber || !email || !message) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post('http://18.236.133.167/api/contact/', {
        name,
        phone_number: phoneNumber,
        email,
        message
      })
      .then(() => setSubmitted(true))
      .catch(error => setError('Error submitting form: ' + error));
    }
  };

  const handleCloseModal = () => {
    setSubmitted(false);
    setName('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
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
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <button type="submit">Send</button>
      </form>
      <Modal show={submitted} onClose={handleCloseModal}>
        <h2>Thank you!</h2>
        <p>Your message has been received. We will contact you soon.</p>
      </Modal>
    </div>
  );
};

export default ContactUs;
