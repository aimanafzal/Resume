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
    
    <section id='contact' className="resume1" >


      </section>
    
   
  );
};

export default ContactForm;
