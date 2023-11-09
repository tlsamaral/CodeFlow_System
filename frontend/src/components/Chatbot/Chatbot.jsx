import React, { useState, useEffect, useRef, useContext } from 'react';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import MonsterImage from '../../assets/images/monstro.png';

import './Chatbot.css';
import './Chatbot-old.css';

function ChatHeader({ chatShow, closeChat, minimizeChat }) {
  return (
    <section className="header-chat">
      <div className="header-chat-left">
        <div className="area-avatar">
          <img src={MonsterImage} alt="monstro/png" />
        </div>
        <span className="nome-avatar-chat">Giovano</span>
      </div>
      <div className="header-chat-right">
        <span className="area-icon" onClick={chatShow}>
          {
            minimizeChat ? <i className="bi bi-plus-lg"></i> : <i className="bi bi-dash-lg"></i>
          }
        </span>
        <span className="area-icon" onClick={closeChat}>
          <i className="bi bi-x-lg"></i>
        </span>
      </div>
    </section>
  );
}

function ChatMessages({ messages, bodyChatRef }) {
  return (
    <section className="body-chat" ref={bodyChatRef}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`messages__item ${
            message.name === 'Chatbot' ? 'messages__item--visitor' : 'messages__item--operator'
          }`}
        >
          {message.message}
        </div>
      ))}
    </section>
  );
}

function ChatFooter({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    onSend(message);
    setMessage('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section className="footer-chat">
      <div className="area-input-message">
        <input type="text"
          placeholder="Escreva uma mensagem..."
          value={message}
          onKeyDown={handleKeyDown}
          onChange={(e) => setMessage(e.target.value)}/>
        <button className="area-icon">
          <i className="bi bi-mic-fill"></i>
        </button>
        <button className="area-icon" onClick={handleSendMessage}>
          <i className="bi bi-send"></i>
        </button>
      </div>
    </section>
  );
}

function Chatbot() {
  //const [chatOpen, setChatOpen] = useState(false);
  const bodyChatRef = useRef();

  const [chatMessages, setChatMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [minimizeChat, setMinimizeChat] = useState(false);
  
  const { closeChat, setCloseChat } = useContext(AppContext);

  // Função para rolar o elemento para baixo
  const scrollToBottom = () => {
    if (bodyChatRef.current) {
      bodyChatRef.current.scrollTop = bodyChatRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Role para baixo quando chatMessages for atualizado
    scrollToBottom();
  }, [chatMessages]);

  // const toggleChat = () => {
  //   setChatOpen(!chatOpen);
  // };

  const sendMessage = async (message) => {
    if (message.trim() === '') {
      return;
    }
  
    // Atualizar o estado com a mensagem do usuário
    const userMessage = { name: 'User', message: message };
 
    setChatMessages((prev) => [...prev, userMessage]);
  
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(chatMessages);

        const chatbotMessage = { name: 'Chatbot', message: data.answer };
        setChatMessages((prev) => [...prev, chatbotMessage]);

      } else {
        console.error('Erro na resposta do servidor');
      }
    } catch (error) {
      console.error('Erro na comunicação com o servidor', error);
    }
  };
  
  const handleMinimizeChat = () => {
    setMinimizeChat(!minimizeChat);
  };

  const handleCloseChat = () => {
    setCloseChat(!closeChat);
  };

  return (
    <div className={`chat ${closeChat ? 'close' : ''} ${minimizeChat ? 'minimize' : ''}`}>
      <ChatHeader chatShow={handleMinimizeChat} closeChat={handleCloseChat} minimizeChat={minimizeChat}/>
      <ChatMessages messages={chatMessages} bodyChatRef={bodyChatRef}/>
      <ChatFooter
        messageInput={messageInput}
        onMessageInputChange={(e) => setMessageInput(e.target.value)}
        onSend={sendMessage}
      />
    </div>
  );
}

export default Chatbot;

ChatMessages.propTypes = {
  messages: propTypes.array,
  bodyChatRef: propTypes.func
};

ChatFooter.propTypes = {
  onSend: propTypes.func
};

ChatHeader.propTypes = {
  chatShow: propTypes.func, 
  closeChat: propTypes.func,
  minimizeChat: propTypes.bool
};
