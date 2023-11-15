import React, { useContext } from 'react';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import FormFeedback from '../FormFeedback/FormFeedback';
import './ModalFeedback.css';


function ModalFeedback(/*{ modalIsOpen, closeModal }*/) {
  const { modalIsOpen, setModalIsOpen } = useContext(AppContext);

  const closeModal = () => {
    document.body.style.overflow = 'auto'; 
    setModalIsOpen(false);
  };

  const onClickModal = (e) => {
    e.stopPropagation();
  };

  return ( 
    <div className={`area-modal ${modalIsOpen ? 'show' : ''}`} onClick={closeModal}>
      <div className="modal-content" onClick={onClickModal}>
        <div className="modal">
          <div className="modal-header">
            <h3>Feedback</h3>
            <button type="button" className="btn-close-modal" aria-label="Close" onClick={closeModal}><i className="bi bi-x"></i></button>
          </div>
          <div className="modal-body">
            <FormFeedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalFeedback;

ModalFeedback.propTypes = {
  modalIsOpen: propTypes.bool, 
  closeModal: propTypes.func
};
