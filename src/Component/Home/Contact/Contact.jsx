import React, { useState } from 'react';
import './Contact.css';
import toast from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      number: number,
      email: email,
      message: message
    };

    fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          toast.success('Form Successfully Submitted!')
          setName('');
          setNumber('');
          setEmail('');
          setMessage('');
        } else {
         toast.error("Form Submission Failed.")
        }
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  };

  return (
    <div className="Contact-container">
      <div className="contact-info">
        <div className="contact-details">
          <div className="Contact-head">
            <h5>Contact Now</h5>
          </div>
          <div className="contact-Heading">
            <h1>GET IN TOUCH NOW</h1>
          </div>
          <div className="contact-para">
            <p>Contact us for any inquiries or assistance. We're here to help!</p>
          </div>
          <div className="contact-number">
            <div className="phone-head">
              <h5>Phone</h5>
            </div>
            <div className="phone-num">
              <div className="l1-num">
                <h6>+1 (555) 123-4567</h6>
              </div>
              <div className="l1-num">
                <h6>+1 (555) 987-6543</h6>
              </div>
            </div>
          </div>
          <div className="contact-mail">
            <div className="email-head">
              <h6>Email</h6>
            </div>
            <div className="email">
              <a href="mailto:needhelp@company.com">needhelp@company.com</a>
            </div>
          </div>
          <div className="address">
            <div className="address-head">
              <h6>Address</h6>
            </div>
            <div className="adress-para">
              <p>123 Main Street, Anytown, USA</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Your Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
