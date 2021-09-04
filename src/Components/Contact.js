import React, { Component, useState } from 'react';
import axios from 'axios';
// const url = require('../../Mailer/modal/config.json')


//import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [result, setResult] = useState(null);

  const sendEmail = event => {
    event.preventDefault();
    axios
      .post('http://localhost:4500/send', { ...state })
      .then(response => {
        setResult(response.data);
        setState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      });
     
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <section id='contact'  >
    
      
      
      

 <div className="row section-head">

   <div className="two columns header-col">

      <h1>CONTACT ME</h1>

   </div>

   <div className="ten columns">

   </div>
      </div> 
     
            <div className="row">
               <div className="eight columns">
               {/* <div class="title">WELCOME</div>
      <div class="subtitle">CONTACT ME</div> */}

         
      <form className='form' onSubmit={sendEmail}  name="contactForm" >
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your full name"
            onChange={onInputChange}
            required
           
          />
        </Form.Group >
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Enter subject"
            onChange={onInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="5"
            placeholder="Enter your message"
            onChange={onInputChange}
            required
          />
        </Form.Group>
        <Button className="submit" variant="primary" type="submit">
          Submit
        </Button>
      </form>
      
      </div>
      </div>
      <div>
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}</div>
      </section>
    
   
  );
};

export default ContactForm;
