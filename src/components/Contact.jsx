
import React, { useEffect, useRef } from "react";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfo = ({ icon: Icon, title, value, link, delay = 0 }) => {
  const infoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-fade-in");
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    return () => {
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, [delay]);

  const content = link ? (
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer" 
      className="text-gray-300 hover:text-portfolio-purple transition flex items-center"
    >
      {value}
      {link.startsWith("http") && <ExternalLink size={14} className="ml-1" />}
    </a>
  ) : (
    <span className="text-gray-300">{value}</span>
  );

  return (
    <div ref={infoRef} className="flex items-center gap-4 opacity-0">
      <div className="w-12 h-12 rounded-xl bg-portfolio-purple/20 flex items-center justify-center">
        <Icon className="text-portfolio-purple" size={20} />
      </div>
      <div>
        <h3 className="text-sm text-gray-400">{title}</h3>
        {content}
      </div>
    </div>
  );
};

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-portfolio-dark/50"
    >
      <div className="container mx-auto px-4">
        <h2 ref={sectionRef} className="section-title text-center opacity-0">Get In Touch</h2>

        <div className="max-w-3xl mx-auto glass-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <ContactInfo 
                icon={Mail} 
                title="Email" 
                value="mithun2004vgs@gmail.com" 
                link="mailto:mithun2004vgs@gmail.com"
                delay={0}
              />
              <ContactInfo 
                icon={Phone} 
                title="Phone" 
                value="+91 8637670755"
                link="tel:+918637670755"
                delay={200}
              />
              <ContactInfo 
                icon={Github} 
                title="GitHub" 
                value="github.com/Mithun103"
                link="https://github.com/Mithun103"
                delay={400}
              />
              <ContactInfo 
                icon={Linkedin} 
                title="LinkedIn" 
                value="linkedin.com/in/mithun-ms-5836b3297"
                link="https://linkedin.com/in/mithun-ms-5836b3297"
                delay={600}
              />
              <ContactInfo 
                icon={ExternalLink} 
                title="Portfolio" 
                value="mithunms.netlify.app"
                link="https://mithunms.netlify.app"
                delay={800}
              />
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <Button className="button-primary w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
