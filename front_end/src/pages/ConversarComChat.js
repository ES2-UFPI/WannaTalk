import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import '../styles/style.conversarChat.css'

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('Usuário');
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchGreeting = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/chat', {
        message: 'Dê uma saudação ao usuário.',
        conversation: [],
      });
      const aiGreeting = response.data.message.trim();
      setMessages([{ text: aiGreeting, sender: 'ai', name: 'IA' }]);
      scrollToBottom();
    } catch (error) {
      console.error('Erro ao buscar saudação:', error);
      setError('Não foi possível obter uma saudação. Tente novamente mais tarde.');
    }
  };

  useEffect(() => {
    fetchGreeting();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: 'user', name: userName }];
      setMessages(newMessages);

      try {
        const response = await axios.post('http://localhost:3001/api/chat', {
          message: input,
          conversation: newMessages.map((msg) => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text,
          })),
        });

        const aiMessage = response.data.message.trim();
        setMessages([...newMessages, { text: aiMessage, sender: 'ai', name: 'IA' }]);
        setInput('');
        setError(null);
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        setError('Não foi possível enviar a mensagem. Tente novamente mais tarde.');
      }
      
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
      setInput('');
    }
  };

  return (
    <div>
      <NavBar />
      <div className="chat-container bg-gray-100">
        <div className="flex-grow p-6">
          <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
            <div className="messages-wrapper h-96 overflow-y-auto mb-4">
              <div className="messages-container">
                {messages.map((msg, index) => (
                  <div key={index} className="mb-4">
                    <div className={`font-semibold ${msg.sender === 'ai' ? 'text-blue-500' : 'text-gray-700'}`}>
                      {msg.name}
                    </div>
                    <div className={`p-2 rounded-lg ${msg.sender === 'ai' ? 'bg-blue-100' : 'bg-gray-200'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            {error && (
              <div className="text-red-500 mb-4">
                {error}
              </div>
            )}
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow p-2 border rounded-l-lg"
                placeholder="Digite sua mensagem..."
              />
              <button
                onClick={()=>{
                    sendMessage()
                    setInput('');
                }}
                className="p-2 bg-blue-500 text-white rounded-r-lg"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
