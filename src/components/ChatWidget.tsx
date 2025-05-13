import  { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, ArrowUp, User, Bot } from 'lucide-react';

// Simulated FAQ responses
const faqResponses: Record<string, string> = {
  "how does it work": "SoftSell works in 3 simple steps: 1) Upload your license details securely, 2) Receive an instant valuation based on market rates, 3) Accept our offer and get paid within 48 hours.",
  "how do i sell": "To sell your license, start by filling out our contact form. Our team will guide you through the process of securely transferring your license and receiving payment.",
  "what licenses": "We accept licenses from major software vendors including Microsoft, Adobe, Oracle, SAP, Autodesk, VMware, and many others. If you're unsure, please contact us!",
  "payment methods": "We offer multiple payment methods including bank transfer, PayPal, and cryptocurrency transfers. You can select your preferred method during the selling process.",
  "how long": "The entire process typically takes 2-5 business days from submission to payment. Valuation is provided within minutes, and payment is processed within 48 hours after accepting our offer.",
  "is it legal": "Yes, our process is completely legal. We follow all software vendors' license transfer policies and ensure compliance with legal requirements for license transfers.",
  "security": "We take security seriously. All license data is encrypted using industry-standard encryption, and we never store your license keys after the transaction is complete.",
};

// Suggested questions for the user
const suggestedQuestions = [
  "How does it work?",
  "How do I sell my license?",
  "What types of licenses do you accept?",
  "What payment methods do you offer?",
  "How long does the process take?",
  "Is it legal to resell licenses?",
  "How do you ensure security?"
];

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi there! I'm SoftSell's AI assistant. How can I help you with selling your software licenses today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate typing delay
    setTimeout(() => {
      // Generate response based on input
      let responseText = "I'm not sure how to answer that. Would you like to speak with a human representative?";
      
      // Check for matching FAQ
      const lowerInput = input.toLowerCase();
      for (const [key, value] of Object.entries(faqResponses)) {
        if (lowerInput.includes(key)) {
          responseText = value;
          break;
        }
      }
      
      // Add bot response
      const botResponse: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    // Focus the input after setting the suggested question
    const inputElement = document.getElementById('chat-input');
    if (inputElement) {
      inputElement.focus();
    }
  };
  
  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg z-40 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        aria-label="Chat Support"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white ring-2 ring-white">
              1
            </span>
          </div>
        )}
      </motion.button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-20 right-6 w-80 sm:w-96 h-[450px] bg-white dark:bg-secondary-800 rounded-xl shadow-2xl overflow-hidden z-40 flex flex-col border border-gray-200 dark:border-secondary-700"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-1.5 mr-3">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">SoftSell Support</h3>
                  <div className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
                    <span className="text-xs text-white/80">Online | AI Assistant</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded p-1.5 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-lg shadow-sm ${
                      message.sender === 'user' 
                        ? 'bg-primary-600 text-white rounded-tr-none' 
                        : 'bg-white dark:bg-secondary-700 border border-gray-200 dark:border-secondary-600 rounded-tl-none'
                    }`}
                  >
                    <div className="flex items-start">
                      {message.sender === 'bot' && (
                        <Bot className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <p className="text-sm">{message.text}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      {message.sender === 'user' && (
                        <User className="h-5 w-5 ml-2 mt-1 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Suggested Questions */}
            <div className="p-3 border-t border-gray-200 dark:border-secondary-700 bg-gray-50 dark:bg-secondary-800/50">
              <p className="text-xs font-medium text-secondary-500 dark:text-secondary-400 mb-2 px-1">Suggested questions:</p>
              <div className="grid grid-cols-2 gap-2 px-1">
                {suggestedQuestions.slice(0, 4).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs text-left whitespace-nowrap bg-white dark:bg-secondary-700 text-primary-600 dark:text-primary-400 px-3 py-2 rounded-md border border-primary-200 dark:border-primary-800/30 hover:bg-primary-50 dark:hover:bg-secondary-600 transition-colors truncate"
                  >
                    {question}
                  </button>
                ))}
              </div>
              {suggestedQuestions.length > 4 && (
                <button
                  onClick={() => handleSuggestedQuestion(suggestedQuestions[4])}
                  className="text-xs text-primary-600 dark:text-primary-400 mt-2 px-1 hover:underline"
                >
                  See more suggestions...
                </button>
              )}
            </div>
            
            {/* Chat Input */}
            <div className="p-3 border-t border-gray-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 flex items-center">
              <input
                id="chat-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 dark:bg-secondary-700 border-0 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim()}
                className={`ml-2 p-3 rounded-lg ${
                  input.trim() 
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm' 
                    : 'bg-gray-200 dark:bg-secondary-700 text-gray-400 dark:text-secondary-500 cursor-not-allowed'
                } transition-colors`}
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Chat Notification Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ delay: 1.5, duration: 0.3 }}
            className="fixed bottom-20 right-6 max-w-xs p-4 bg-white dark:bg-secondary-800 rounded-lg shadow-lg z-40 border border-gray-200 dark:border-secondary-700"
          >
            <button 
              onClick={() => setIsOpen(true)}
              className="absolute -top-2 -right-2 bg-gray-100 dark:bg-secondary-700 rounded-full p-1"
              aria-label="Close notification"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-sm font-medium">Have questions about selling your licenses?</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Our AI assistant can help you get started!</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Backdrop for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="sm:hidden fixed inset-0 bg-black/20 z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ChatWidget;
  