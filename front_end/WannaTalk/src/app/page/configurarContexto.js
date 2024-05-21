// components/Chat.js

import { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const fetchReply = async (userMessage) => {
    // Simula uma chamada de API
    const reply = { text: `Resposta à mensagem: ${userMessage}`, sender: 'bot' };
    setMessages((prevMessages) => [...prevMessages, reply]);
  };

  const sendMessage = () => {
    if (input.trim() === '') return;
    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    fetchReply(input);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendClick = () => {
    sendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`p-2 rounded my-2 ${message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 self-start'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          onClick={handleSendClick}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
