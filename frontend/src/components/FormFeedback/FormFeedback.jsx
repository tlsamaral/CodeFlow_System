import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppContext from '../../context/AppContext';
import './FormFeedback.css';


function FormFeedback() {
  const initialState = {
    name: '',
    comment: '',
    rating: 0,
    submissionDate: null,
  };

  const [feedback, setFeedback] = useState(initialState);

  const { setComments } = useContext(AppContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value
    }));
  };

  const handleRatingChange = (event) => {
    const rating = parseInt(event.target.value, 10);
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      rating
    }));
  };

  const submitFormFeedback = async (e) => {
    e.preventDefault();
  
    const currentDate = new Date();
  
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      submissionDate: currentDate,
    }));
  };
  
  useEffect(() => {
    if (feedback.submissionDate) {
      const baseUrl = 'http://localhost:3001/comments';
      const method = 'post';
  
      axios[method](baseUrl, feedback).then((resp) => {
        setComments((prev) => {
          toast.success('O seu feedback é muito importante para nós.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });

          setFeedback(initialState);
          
          return [...prev, resp.data];
        });
      });
    }
  }, [feedback.submissionDate]);

  return (
    <form onSubmit={submitFormFeedback} className="feedback-form">
      <label>Nome</label>
      <input
        type="text"
        name="name"
        value={feedback.name}
        onChange={handleInputChange}
        className="input"
      />

      <label>Comentário</label>
      <textarea
        name="comment"
        value={feedback.comment}
        onChange={handleInputChange}
        className="input"
      ></textarea>

      <div className="rating">
        {[5, 4, 3, 2, 1].map((value) => (
          <React.Fragment key={value}>
            <input
              value={value}
              name="rating"
              id={`star${value}`}
              type="radio"
              checked={feedback.rating === value}
              onChange={handleRatingChange}
            />
            <label htmlFor={`star${value}`}></label>
          </React.Fragment>
        ))}
      </div>

      <div className="button-submit-area">
        <button className="button-submit">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
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
    </form>
  );
}

export default FormFeedback;
