import React, { Fragment } from 'react';
import Banners from '../Banners/Banners';
import ProductGateway from '../ProductGateway/ProductGateway';
import EngageBanner from '../EngageBanner/EngageBanner';
import FeedbackArea from '../FeedbackArea/FeedbackArea';
import ClientFeedBackArea from '../ClientFeedbackArea/ClientFeedBackArea';
//import ContactForm from '../ContactForm/ContactForm';
import Chatbot from '../Chatbot/Chatbot';
import ToogleChatbot from '../ToogleChatbot/ToogleChatbot';
import AboutUs from '../AboutUs/AboutUs';
import ModalFeedback from '../ModalFeedback/ModalFeedback';
import ContactForm from '../ContactForm/ContactForm';

function Main() {
  return ( 
    <Fragment>
      <Banners />
      <ProductGateway />
      <EngageBanner />
      <FeedbackArea />
      <ClientFeedBackArea />
      <AboutUs />
      <Chatbot />
      <ModalFeedback />
      <ToogleChatbot />
      <ContactForm />
    </Fragment>
  );  
}

export default Main;
