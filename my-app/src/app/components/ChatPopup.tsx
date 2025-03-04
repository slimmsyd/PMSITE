"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactPopup from "./ContactPopup";  // Import ContactPopup component

interface Message {
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
  includeContactButton?: boolean;
}

interface ServiceOption {
  id: string;
  name: string;
  description: string;
}

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Service options for Preeminent Professional Services
  const serviceOptions: ServiceOption[] = [
    {
      id: "technical",
      name: "Professional/Technical Services",
      description: "Property management, real estate development, and industrial/commercial properties services."
    },
    {
      id: "environmental",
      name: "Commercial Cleaning/Environmental Services",
      description: "Comprehensive cleaning solutions for commercial properties."
    },
    {
      id: "staffing",
      name: "Professional Events and Staffing",
      description: "Temporary staffing for commercial and private/public events."
    },
    {
      id: "ev",
      name: "EV Services",
      description: "Turn-key services for commercial fleet and vehicle electrification."
    }
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      type: "assistant",
      content: "👋 Hi! I'm the Preeminent Professional Services assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Webhook URL for tracking conversations (you should replace this with your actual webhook URL)
  const webhookUrl = "YOUR_WEBHOOK_URL";

  // Function to send data to webhook
  const sendToWebhook = async (userMessage: string, assistantMessage: string) => {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMessage,
          assistantMessage,
          timestamp: new Date().toISOString(),
          source: 'Preeminent Professional Services Chat'
        }),
      });
      
      if (!response.ok) {
        console.error('Webhook error:', response.status);
      }
    } catch (error) {
      console.error('Error sending to webhook:', error);
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Add initial messages
  useEffect(() => {
    const timer = setTimeout(() => {
      const initialMessage = "I can help you learn about our services, including Professional/Technical Services, Commercial Cleaning, Events and Staffing, and EV Services. What would you like to know more about?";
      
      setMessages(prev => [...prev, 
        {
          type: "assistant",
          content: initialMessage,
          timestamp: new Date()
        }
      ]);
      
      // Send initial conversation to webhook
      sendToWebhook("", initialMessage);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Format message text with proper styling
  const formatMessageText = (text: string) => {
    let formattedText = text
      .replace(/• ([^:]+):/g, '• <strong>$1</strong>:')
      .replace(/(Professional\/Technical Services|Commercial Cleaning|Environmental Services|Events and Staffing|EV Services):/g, '<strong>$1</strong>:');
    
    return formattedText;
  };

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessageText = message.trim();
    const userMessage = {
      type: "user" as const,
      content: userMessageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatBot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessageText }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      const responseText = data.message || "";
      const includeContactButton = responseText.toLowerCase().includes('contact') || 
                                 responseText.toLowerCase().includes('consultation') ||
                                 responseText.toLowerCase().includes('team') ||
                                 responseText.toLowerCase().includes('book');
      
      const assistantMessage = {
        type: "assistant" as const,
        content: responseText || "I apologize, but I'm having trouble connecting right now. Please try again later or contact us directly.",
        timestamp: new Date(),
        includeContactButton
      };

      setMessages((prev) => [...prev, assistantMessage]);
      
      // Send to webhook
      sendToWebhook(userMessageText, responseText);
    } catch (error) {
      console.error('Error:', error);
      
      const errorMessageContent = "I apologize, but I'm having trouble connecting right now. Please try again later or contact us directly.";
      const errorMessage = {
        type: "assistant" as const,
        content: errorMessageContent,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
      
      // Send error to webhook
      sendToWebhook(userMessageText, errorMessageContent);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactButtonClick = () => {
    // Track contact button clicks in webhook
    sendToWebhook("User clicked contact button", "Opening contact popup");
    setIsOpen(false); // Close chat window
    setShowContactForm(true); // Show contact form
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500/80 to-blue-600/80 hover:from-blue-400/90 hover:to-blue-500/90 backdrop-blur-xl p-3.5 rounded-full transition-all duration-300 shadow-lg border border-white/20"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="w-2 h-2 rounded-full bg-white animate-pulse absolute top-3 right-3"></span>
          <svg 
            className="w-6 h-6 text-white drop-shadow-sm" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "550px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="fixed bottom-28 right-8 w-[380px] bg-gradient-to-br from-black/80 to-black/90 backdrop-blur-xl rounded-3xl shadow-2xl z-50 overflow-hidden border border-white/10 flex flex-col"
            style={{ 
              maxHeight: "85vh",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 40px 0px rgba(59, 130, 246, 0.1)"
            }}
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex-shrink-0 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-xl flex items-center justify-center border border-blue-500/20">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white/90 tracking-wide">PPS Assistant</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                      <p className="text-xs text-white/50 font-light">Service Expert</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {isMinimized ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 12H6" />
                      )}
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="p-5 space-y-5 overflow-y-auto flex-grow hide-scrollbar">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${
                        msg.type === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-3.5 ${
                          msg.type === "user"
                            ? "bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-white/90 rounded-2xl rounded-tr-sm backdrop-blur-xl border border-blue-500/10"
                            : "bg-gradient-to-br from-white/10 to-white/5 text-white/90 rounded-2xl rounded-tl-sm backdrop-blur-xl border border-white/10"
                        }`}
                      >
                        <div 
                          className="text-sm leading-relaxed whitespace-pre-line"
                          dangerouslySetInnerHTML={{ __html: formatMessageText(msg.content) }}
                        />
                        <p className="text-[10px] mt-1.5 text-white/40">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      
                      {/* Contact Button */}
                      {msg.includeContactButton && msg.type === "assistant" && (
                        <button
                          onClick={handleContactButtonClick}
                          className="mt-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-full text-sm hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-md flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Contact Us
                        </button>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 py-3 px-4 rounded-2xl flex items-center gap-2 backdrop-blur-xl border border-white/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse delay-150"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse delay-300"></div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-5 border-t border-white/10 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl flex-shrink-0">
                  <div className="flex items-center gap-3 relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Ask about our services..."
                      className="flex-1 py-3 px-4 rounded-full bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-sm text-white/90 placeholder-white/30 backdrop-blur-xl border border-white/10"
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isLoading}
                      className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white transition-all duration-300 flex items-center justify-center min-w-[44px] min-h-[44px] shadow-md"
                      aria-label="Send message"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Replace Contact Form Modal with ContactPopup component */}
      {showContactForm && (
        <ContactPopup 
          isOpen={showContactForm} 
          togglePopup={() => {
            setShowContactForm(false);
            setIsOpen(true); // Reopen chat when contact form is closed
          }} 
        />
      )}
    </>
  );
} 