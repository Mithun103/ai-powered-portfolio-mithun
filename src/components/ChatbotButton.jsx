import React, { useState, useEffect } from 'react';
import { MessageSquareText, Sparkles } from 'lucide-react';
import axios from 'axios';

// --- Session ID Management ---
// Helper function to get an existing session ID or create a new one.
const getSessionId = () => {
  let sessionId = localStorage.getItem('chat_session_id');
  if (!sessionId) {
    // crypto.randomUUID() is a modern, secure way to generate a unique ID.
    sessionId = crypto.randomUUID();
    localStorage.setItem('chat_session_id', sessionId);
  }
  return sessionId;
};


const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  // Add an initial greeting message when the chat opens for the first time
  useEffect(() => {
      if (isOpen && chat.length === 0) {
          setChat([{
              sender: 'bot',
              text: "Hello! I'm Mithun's AI assistant. Feel free to ask me anything about his skills, projects, or experience."
          }]);
      }
  }, [isOpen, chat.length]);


  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        setIsPulsing(false);
    }
    // Dispatch a custom event for other parts of the app to listen to
    window.dispatchEvent(new CustomEvent('chatbotState', {
      detail: { isOpen: !isOpen }
    }));
  };

  // Function to format messages with bold text
  const formatMessage = (text) => {
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setChat(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Get the session ID for the current user
      const sessionId = getSessionId();

      // Send the message and session_id to the backend
      const res = await axios.post('https://portfolio-backend-ai.onrender.com/api/chat', {
        message: input,
        session_id: sessionId, // <-- The session ID is now included
      });

      // Add bot response to the chat window
      setChat(prev => [...prev, {
        sender: 'bot',
        text: res.data.response || "I'm sorry, I couldn't process that request."
      }]);
    } catch (err) {
      console.error('Chat error:', err);
      setChat(prev => [...prev, {
        sender: 'bot',
        text: "I apologize, but I'm having trouble connecting. Please try again later."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-gray-900/90 backdrop-blur-lg shadow-2xl rounded-xl p-4 flex flex-col justify-between animate-slide-in-up transition-all duration-500">
          <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Mithun's AI
              </h3>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <button
              onClick={toggleChatbot}
              className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-1 mb-3 scrollbar-thin scrollbar-thumb-purple-400/30 scrollbar-track-transparent">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`px-4 py-2.5 rounded-xl text-sm w-fit break-words whitespace-pre-wrap max-w-[85%] ${
                  msg.sender === 'user'
                    ? 'ml-auto bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-br-none'
                    : 'mr-auto bg-white/10 text-gray-300 rounded-bl-none'
                } transition-all duration-300 animate-fade-in`}
              >
                {formatMessage(msg.text)}
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto bg-white/10 text-gray-300 rounded-xl px-4 py-2.5 w-fit animate-pulse">
                <div className="flex items-center gap-2">
                  <span>Thinking</span>
                  <div className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2.5 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/5 text-gray-300 placeholder-gray-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-purple-600 to-blue-600 hover:opacity-90 text-white p-2.5 rounded-lg transition-all duration-300 disabled:opacity-50 active:scale-95 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled={isLoading || !input.trim()}
            >
              {isLoading ? (
                <div className="w-6 h-6 animate-spin">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6 transform rotate-45"
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </form>
        </div>
      )}

      <button
        onClick={toggleChatbot}
        className={`p-4 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 relative group ${
          isPulsing ? 'animate-pulse' : ''
        }`}
      >
        <MessageSquareText size={24} className="z-10 relative" />
        <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
        <Sparkles
          className="absolute -top-2 -right-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"
          size={16}
        />
      </button>
    </div>
  );
};

export default ChatbotButton;
