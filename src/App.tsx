import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import { MessageSquareText } from "lucide-react";
import { ThemeProvider } from "./context/ThemeContext";

const ChatbotLead = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Need help? Try my AI assistant!",
    "Ask me anything about my work!",
    "Let's have a conversation!",
    "I'm here to help!",
  ];

  useEffect(() => {
    // Listen for chatbot state changes
    const handleChatbotState = (event) => {
      setIsChatbotOpen(event.detail.isOpen);
    };

    window.addEventListener('chatbotState', handleChatbotState);
    return () => window.removeEventListener('chatbotState', handleChatbotState);
  }, []);

  useEffect(() => {
    if (isChatbotOpen) {
      setIsVisible(false);
      return;
    }

    // Show message for 5 seconds, hide for 3 seconds, then show next message
    const interval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 5000); // Show for 5 seconds
    }, 8000); // Total cycle: 5 seconds show + 3 seconds hide

    return () => clearInterval(interval);
  }, [isChatbotOpen, messageIndex]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 animate-slide-in-right">
      <div className="bg-gradient-to-r from-portfolio-purple/20 to-portfolio-blue/20 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-3">
          <MessageSquareText className="text-portfolio-purple" size={28} />
          <p className="text-sm text-gray-300 animate-text-flow">
            {messages[messageIndex]}
          </p>
        </div>
        <div className="absolute -bottom-2 right-0 w-3 h-3 bg-portfolio-purple rounded-full animate-pulse"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <>
                <Index />
                <ChatbotLead />
              </>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
