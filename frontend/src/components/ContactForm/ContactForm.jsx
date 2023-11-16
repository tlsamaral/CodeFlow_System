import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import './ContactForm.css';

function ContactForm() {

  const initialState = {
    name: '',
    email: '',
    sistem: ''
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
      
      if(response.data == 'E-mail enviado com sucesso!'){
        toast.success('Estraremos em contato com você, obrigado.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });

        setFormContact(initialState);
      }

    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
    }
  };

  return (
    <section className="contact" id="contactForm">
      <div className="content">
        <h2>Contate-nos</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dolorum similique tenetur temporibus et, a vero facere repudiandae, molestiae neque tempora? Eius fuga ullam nihil asperiores perferendis? Fugit, atque at.</p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
            </div>
            <div className="text">
              <h3>Endereço</h3>
              <p>
                Dom Bôsco, 284, 
                <br />
                Centro, Lorena - SP,
                <br />
                12600-100
              </p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
            </div>
            <div className="text">
              <h3>Telefone</h3>
              <p>12 9999-9999</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
            </div>
            <div className="text">
              <h3>E-mail</h3>
              <p>codeflowinnovation@outlook.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form onSubmit={submitForm}>
            <h2>Enviar Mensagem</h2>
            <div className="inputBox">
              <input type="text" name="nome" required="required" onChange={handleFormContact}/>
              <span>Nome</span>
            </div>
            <div className="inputBox">
              <input type="text" name="email" required="required" onChange={handleFormContact}/>
              <span>E-mail</span>
            </div>
            <select className="select" name="sistem" value={formContact.sistem} onChange={handleFormContact}>
              <option disabled>Selecione o sistema</option>
              <option value="iPet">iPet</option>
              <option value="SmartCircuits">Smart Circuits</option>
              <option value="MaisAjuda">Mais Ajuda</option>
            </select>
            <div className="inputBox">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );

}

export default ContactForm;
