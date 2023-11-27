import React, { useState } from 'react';
import './Contact.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {motion} from 'framer-motion'

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setName('');
    setEmail('');
    setMessage('  ');
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <motion.div className="app"
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth,transition:{duration:0.1}}}
      >
        <header className="App-header">
          <Header />
          <ContactUs />
        </header>

      </motion.div>
      <Footer />
    </div>
  );
}

export default Contact;
