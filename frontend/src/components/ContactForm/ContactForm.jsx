import React, { Fragment, useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

function ContactForm() {

  const initialState = {
    name: '',
    email: ''
  };
  const [formContact, setFormContact] = useState(initialState);

  const handleFormContact = (event) => {
    const { name, value } = event.target;
    setFormContact((prevFormContact) => ({
      ...prevFormContact,
      [name]: value
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const baseUrl = 'http://localhost:3002/send';
  
    try {
      const response = await axios.post(baseUrl, formContact);
      console.log(response.data); // Isso imprimirá a resposta do servidor
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="left">
          <form className="form">
            <div className="input-block">
              <input className="input" type="text" name="nome" required="" onChange={handleFormContact}/>
              <label htmlFor="email">Nome</label>
            </div>
            <div className="input-block">
              <input className="input" type="email" name="email" required="" onChange={handleFormContact}/>
              <label htmlFor="pass">Email</label>
            </div>
            <div className="input-block">
              <span className="forgot"><a href="#">Forgot Password?</a></span>
              <button type="submit" onClick={submitForm}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );

}

export default ContactForm;
