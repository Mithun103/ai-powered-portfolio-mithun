import React from 'react';
import { Github, Linkedin, Mail, Phone, Sparkles } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-portfolio-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Get in Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Info and Social Links */}
          <div className="flex flex-col items-center gap-8 mb-16">
            {/* Email and Phone */}
            <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
              {/* Contact Info Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/* Email Button */}
                <a 
                  href="mailto:msmithunof@gmail.com"
                  className="group relative w-full p-0.5 bg-gradient-to-br from-portfolio-purple to-portfolio-blue rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                >
                  <div className="relative bg-portfolio-dark/95 rounded-lg px-4 py-3 flex items-center gap-3 h-full">
                    <div className="bg-portfolio-purple/20 p-2 rounded-lg group-hover:bg-portfolio-purple/30 transition-colors duration-300">
                      <Mail className="text-portfolio-purple group-hover:text-white transition-colors duration-300" size={20} />
                    </div>
                    <div className="flex flex-col min-w-0"> {/* Added min-w-0 for proper text truncation */}
                      <span className="text-sm text-gray-400 group-hover:text-gray-300">Email</span>
                      <span className="text-gray-300 group-hover:text-white font-medium truncate">msmithunof@gmail.com</span>
                    </div>
                  </div>
                </a>

                {/* Phone Button */}
                <a 
                  href="tel:+918637670755"
                  className="group relative w-full p-0.5 bg-gradient-to-br from-portfolio-blue to-portfolio-purple rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                >
                  <div className="relative bg-portfolio-dark/95 rounded-lg px-4 py-3 flex items-center gap-3 h-full">
                    <div className="bg-portfolio-blue/20 p-2 rounded-lg group-hover:bg-portfolio-blue/30 transition-colors duration-300">
                      <Phone className="text-portfolio-blue group-hover:text-white transition-colors duration-300" size={20} />
                    </div>
                    <div className="flex flex-col min-w-0"> {/* Added min-w-0 for proper text truncation */}
                      <span className="text-sm text-gray-400 group-hover:text-gray-300">Phone</span>
                      <span className="text-gray-300 group-hover:text-white font-medium whitespace-nowrap">+91 8637670755</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-8 justify-center mt-8">
                {/* GitHub Link */}
                <a 
                  href="https://github.com/mithun103" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  <div className="p-4 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 relative">
                    <Github size={24} className="z-10 relative" />
                    <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-portfolio-purple rounded-full border-2 border-portfolio-dark animate-pulse"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
                    <Sparkles 
                      className="absolute -top-2 -right-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow" 
                      size={16} 
                    />
                  </div>
                </a>

                {/* LinkedIn Link */}
                <a 
                  href="https://linkedin.com/in/mithun-ms-5836b3297/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  <div className="p-4 bg-gradient-to-br from-portfolio-blue to-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 relative">
                    <Linkedin size={24} className="z-10 relative" />
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-portfolio-blue rounded-full border-2 border-portfolio-dark animate-pulse"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-blue to-blue-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
                    <Sparkles 
                      className="absolute -top-2 -right-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow" 
                      size={16} 
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
