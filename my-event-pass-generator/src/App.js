import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Events from './components/Events';
import ContactUs from './components/ContactUs';
import EventPass from './components/EventPass';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/eventpass/:id" element={<EventPass />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
