"use client";

import React, { useState } from 'react';

const Chat = () => {
  const [inputText, setInputText] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSendMessage = () => {
 
    setConversation([...conversation, { text: inputText, sender: 'user' }]);
    setInputText('');
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {conversation.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Digite sua mensagem..."
        className="border p-2 w-full"
      />
      <button onClick={handleSendMessage} className="mt-2 bg-blue-500 text-white p-2">
        Enviar
      </button>
    </div>
  );
};

export default Chat;