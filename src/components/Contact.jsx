import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
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
            <div className="flex gap-6 items-center">
              <a 
                href="mailto:msmithunof@gmail.com"
                className="glass-card px-6 py-3 flex items-center gap-2 hover:scale-105 transition-all duration-300 group"
              >
                <Mail className="text-portfolio-purple group-hover:text-white transition-colors duration-300" size={20} />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">msmithunof@gmail.com</span>
              </a>
              
              <a 
                href="tel:+918637670755"
                className="glass-card px-6 py-3 flex items-center gap-2 hover:scale-105 transition-all duration-300 group"
              >
                <Phone className="text-portfolio-blue group-hover:text-white transition-colors duration-300" size={20} />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+91 8637670755</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a 
                href="https://github.com/mithun103" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-4 hover:scale-110 transition-all duration-300 group"
              >
                <Github className="text-white group-hover:text-portfolio-purple transition-colors duration-300" size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/mithun-ms-5836b3297/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-4 hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="text-white group-hover:text-portfolio-blue transition-colors duration-300" size={24} />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
