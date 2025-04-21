
import React, { useEffect, useRef } from "react";
import { User, Award, Code } from "lucide-react";

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 opacity-0"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Me</h2>

        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-portfolio-purple to-portfolio-blue p-1">
              <div className="w-full h-full rounded-full bg-portfolio-dark flex items-center justify-center">
                <User className="w-24 h-24 text-white" />
              </div>
            </div>

            <div className="flex-1">
              <p className="text-lg text-gray-300 mb-6">
                B.Tech AI & ML student passionate about innovation in Artificial Intelligence and Full Stack Development. Skilled in deploying real-world solutions using both backend and frontend technologies as well as deep learning, LLMs, and RAG architectures.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Code className="text-portfolio-purple" size={20} />
                  <span>Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Award className="text-portfolio-blue" size={20} />
                  <span>AI/ML Engineer</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full border border-portfolio-purple text-portfolio-purple">
                    📍
                  </span>
                  <span>Porur, Chennai</span>
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
