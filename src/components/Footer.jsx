
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-portfolio-dark py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-portfolio-purple to-portfolio-blue">
              Mithun MS
            </div>
            <p className="text-gray-400 text-sm mt-1">
              Full Stack Developer & AI/ML Engineer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={handleScrollToTop}
              className="w-10 h-10 mb-4 bg-portfolio-purple/20 rounded-full flex items-center justify-center text-portfolio-purple hover:bg-portfolio-purple/30 transition"
            >
              <ArrowUp size={18} />
            </button>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mithun MS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
