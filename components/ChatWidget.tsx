import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './Icons';
import { generateResponse } from '../services/geminiService';
import { ChatMessage, ChatSender } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: ChatSender.BOT, text: '👋 宝妈你好呀！我是“好头型”贴心小助手。不管是圆头扁头还是睡姿问题，都可以问我哦～ 💖' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: ChatSender.USER,
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const replyText = await generateResponse(input);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: ChatSender.BOT,
        text: replyText
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      // Error handled silently or generic message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] max-w-[350px] bg-white rounded-2xl shadow-redbook border border-brand-100 overflow-hidden flex flex-col h-[500px] animate-fade-in-up">
          <div className="bg-brand-500 p-4 flex justify-between items-center text-white bg-gradient-to-r from-brand-500 to-brand-400">
            <div className="flex items-center gap-2">
              <Icons.Brain className="w-5 h-5" />
              <span className="font-semibold">好头型 AI 顾问</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-brand-600/50 p-1 rounded transition-colors">
              <Icons.X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === ChatSender.USER 
                      ? 'bg-brand-500 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-1">
                  <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="问问头型问题..."
              className="flex-1 bg-gray-50 text-gray-800 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-200 border border-transparent focus:border-brand-200 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white p-2 rounded-full transition-colors shadow-md"
            >
              <Icons.Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-500 hover:bg-brand-600 text-white p-4 rounded-full shadow-redbook transition-transform hover:scale-110 flex items-center justify-center group"
      >
        {isOpen ? (
          <Icons.X className="w-8 h-8" />
        ) : (
          <Icons.MessageCircle className="w-8 h-8" />
        )}
        {!isOpen && (
           <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-sm border border-gray-100 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium">
             在线咨询
           </span>
        )}
      </button>
    </div>
  );
};