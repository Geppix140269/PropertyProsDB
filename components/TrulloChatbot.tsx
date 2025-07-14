// PATH: components/TrulloChatbot.tsx
'use client'
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface TrulloChatbotProps {
  language?: 'en' | 'it';
}

export default function TrulloChatbot({ language = 'en' }: TrulloChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: language === 'en' 
        ? `Ciao! I'm Trullo, your Puglia property assistant. How can I help you today?`
        : `Ciao! Sono Trullo, il tuo assistente immobiliare per la Puglia. Come posso aiutarti?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate API call - replace with actual AI integration
    setTimeout(() => {
      const responses = {
        en: {
          default: `I'd be happy to help you with that! Let me find the information you need.`,
          buying: `Looking to buy in Puglia? We can connect you with verified local professionals who speak your language.`,
          trullo: `Trulli are traditional stone houses unique to Puglia. They require special restoration expertise.`,
          cost: `Property costs in Puglia vary widely. Trulli start around €50,000 needing work, while restored ones can be €200,000+.`,
          process: `The buying process typically takes 2-3 months. You'll need a geometra, notary, and possibly a lawyer.`
        },
        it: {
          default: `Sarò felice di aiutarti! Fammi trovare le informazioni di cui hai bisogno.`,
          buying: `Vuoi comprare in Puglia? Possiamo metterti in contatto con professionisti locali verificati.`,
          trullo: `I trulli sono case tradizionali in pietra uniche della Puglia. Richiedono competenze speciali per il restauro.`,
          cost: `I costi immobiliari in Puglia variano molto. I trulli da ristrutturare partono da €50.000.`,
          process: `Il processo di acquisto richiede tipicamente 2-3 mesi. Avrai bisogno di un geometra, notaio e forse un avvocato.`
        }
      };

      // Simple keyword matching - replace with AI
      let response = responses[language].default;
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes('buy') || lowerInput.includes('comprare')) {
        response = responses[language].buying;
      } else if (lowerInput.includes('trullo') || lowerInput.includes('trulli')) {
        response = responses[language].trullo;
      } else if (lowerInput.includes('cost') || lowerInput.includes('price') || lowerInput.includes('costo')) {
        response = responses[language].cost;
      } else if (lowerInput.includes('process') || lowerInput.includes('processo')) {
        response = responses[language].process;
      }

      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-xl transition-all duration-300 ${
          isOpen 
            ? 'bg-stone-600 hover:bg-stone-700' 
            : 'bg-gradient-to-r from-terracotta to-terracotta-dark hover:shadow-2xl hover:scale-110'
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-terracotta to-terracotta-dark p-6 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Trullo</h3>
                <p className="text-sm text-white/80">
                  {language === 'en' ? 'Your Puglia Property Assistant' : 'Il tuo assistente immobiliare'}
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-sea text-white'
                      : 'bg-stone-100 text-stone-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {message.role === 'user' ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.role === 'user' ? 'text-sea-light' : 'text-stone-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-stone-100 rounded-2xl px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-stone-200 p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={language === 'en' ? 'Type your message...' : 'Scrivi il tuo messaggio...'}
                className="flex-1 px-4 py-2 border border-stone-300 rounded-full focus:outline-none focus:border-terracotta"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className={`p-2 rounded-full transition-colors ${
                  input.trim() && !isTyping
                    ? 'bg-terracotta text-white hover:bg-terracotta-dark'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-stone-500 mt-2 text-center">
              {language === 'en' 
                ? 'Powered by AI • Available 24/7' 
                : 'Powered by AI • Disponibile 24/7'
              }
            </p>
          </div>
        </div>
      )}
    </>
  );
}
