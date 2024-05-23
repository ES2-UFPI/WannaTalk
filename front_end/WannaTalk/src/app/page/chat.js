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
      <div className="flex-grow overflow-y-auto border p-4 mb-4 rounded-lg bg-white">
        {conversation.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
            <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center fixed bottom-0 left-0 w-full p-4 bg-gray-100">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="border p-2 rounded-lg flex-grow mr-2"
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-lg">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
