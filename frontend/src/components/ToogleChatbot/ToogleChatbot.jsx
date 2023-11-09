import React, { useContext } from 'react';
import MonsterImage from '../../assets/images/monstro.png';
import AppContext from '../../context/AppContext';
import './ToogleChatbot.css';

function ToogleChatbot() {

  const { closeChat, setCloseChat } = useContext(AppContext);

  const handleCloseChat = () => {
    setCloseChat(!closeChat);
  }; 

  return ( 
    <button className={`toogle-chatbot ${!closeChat ? 'close' : ''}`} 
      onClick={handleCloseChat} >
      <img src={MonsterImage} alt="monster/png" />
    </button>
  );
}

export default ToogleChatbot;
