import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Mic, Paperclip, Smile } from 'lucide-react';
import { useTranslation } from 'react-i18next';

//const CHAT_BACKEND = "https://lyzr-agnt-production.up.railway.app/chat";
const CHAT_BACKEND = "https://plain-tree-e3d0.santoshhdandin.workers.dev/";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

export default function ChatWidget() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t('chatWidget.welcome'),
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    const messageToSend = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      const res = await fetch(CHAT_BACKEND, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend })
      });

      if (!res.ok) {
        throw new Error('Failed to get response');
      }

      const data = await res.json();

      const aiResponse: Message = {
        id: messages.length + 2,
        text: data.reply || t('chatWidget.respondError'),
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMessage: Message = {
        id: messages.length + 2,
        text: t('chatWidget.connectError'),
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-zinc-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-800/50 flex flex-col z-50 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle, #27272a 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />

          <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-green-600 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-white">{t('chatWidget.title')}</h3>
                <p className="text-xs text-green-100">{t('chatWidget.online')}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end space-x-2 animate-[slideUp_0.3s_ease-out] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user'
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                      : 'bg-zinc-800 border border-zinc-700'
                    }`}
                >
                  {message.sender === 'user' ? (
                    <span className="text-white text-sm font-semibold">U</span>
                  ) : (
                    <MessageCircle className="text-green-400" size={16} />
                  )}
                </div>
                <div className="flex flex-col max-w-[75%]">
                  <div
                    className={`px-4 py-2.5 rounded-2xl ${message.sender === 'user'
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-br-sm'
                        : 'bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 text-zinc-100 rounded-bl-sm'
                      } shadow-lg`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  <span className={`text-xs text-zinc-500 mt-1 px-1 ${message.sender === 'user' ? 'text-right' : 'text-left'
                    }`}>
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-end space-x-2 animate-[slideUp_0.3s_ease-out]">
                <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-green-400" size={16} />
                </div>
                <div className="bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="relative border-t border-zinc-800/50 p-4 bg-zinc-900/50 backdrop-blur-sm">
            <div className="flex items-end space-x-2">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('chatWidget.placeholder')}
                  className="w-full bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-xl px-4 py-3 pr-24 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
                  maxLength={500}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                  <button
                    className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700/50 rounded-lg transition-colors"
                    aria-label="Attach file"
                  >
                    <Paperclip size={16} />
                  </button>
                  <button
                    className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700/50 rounded-lg transition-colors"
                    aria-label="Add emoji"
                  >
                    <Smile size={16} />
                  </button>
                  <button
                    className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700/50 rounded-lg transition-colors"
                    aria-label="Voice input"
                  >
                    <Mic size={16} />
                  </button>
                </div>
              </div>
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className={`bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-xl transition-all ${inputValue.trim()
                    ? 'hover:from-green-500 hover:to-emerald-500 hover:scale-105 shadow-lg shadow-green-500/20'
                    : 'opacity-50 cursor-not-allowed'
                  }`}
                aria-label="Send message"
              >
                <Send size={20} className="text-white" />
              </button>
            </div>
            {inputValue.length > 0 && (
              <div className="absolute -top-6 right-4 text-xs text-zinc-500">
                {inputValue.length}/500
              </div>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'
          }`}
        style={{
          background: 'linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)',
          boxShadow: '0 10px 40px rgba(34, 197, 94, 0.4)',
        }}
        aria-label="Open chat"
      >
        <div className="relative">
          <MessageCircle className="text-white animate-pulse" size={28} />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
        </div>
      </button>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 3px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #52525b;
        }
      `}</style>
    </>
  );
}
