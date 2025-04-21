import React, { useEffect, useRef } from "react";
import { User, Award, Code } from "lucide-react";
import profilePic from "../profile/profile (1).jpg";

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          contentRef.current.classList.add("animate-slide-in-up");
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
      id="about"
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Me</h2>

        <div ref={contentRef} className="max-w-4xl mx-auto glass-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative group">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-br from-portfolio-purple to-portfolio-blue p-1 transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                <img 
                  src={profilePic} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-green-500 animate-pulse border-2 border-portfolio-dark" />
            </div>

            <div className="flex-1">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                A passionate B.Tech AI & ML student with a strong foundation in both Artificial Intelligence and Full Stack Development. I specialize in creating innovative solutions that bridge the gap between cutting-edge AI technologies and practical applications. With expertise in deep learning, LLMs, and RAG architectures, I'm dedicated to building intelligent systems that solve real-world problems.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-300 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-portfolio-purple to-portfolio-blue flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                    <Code className="text-white" size={20} />
                  </div>
                  <span className="group-hover:text-portfolio-purple transition-colors duration-300">Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-portfolio-blue to-portfolio-purple flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                    <Award className="text-white" size={20} />
                  </div>
                  <span className="group-hover:text-portfolio-blue transition-colors duration-300">AI/ML Engineer</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-portfolio-purple/50 to-portfolio-blue/50 flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <span className="group-hover:text-portfolio-purple transition-colors duration-300">Porur, Chennai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
