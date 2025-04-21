import React, { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, MessageSquare, BarChart, TerminalSquare, CheckCircle, X } from "lucide-react";
import { useTheme } from "next-themes";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { isAIMode } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-fade-in");
          }, index * 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <>
      <div 
        ref={cardRef} 
        className={`project-card opacity-0 glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 group cursor-pointer ${
          isAIMode ? 'ai-glow' : ''
        }`}
        onClick={() => setIsExpanded(true)}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className={`bg-gradient-to-br from-primary to-accent p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 ${
            isAIMode ? 'animate-pulse' : ''
          }`}>
            {project.icon}
          </span>
          <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
            {project.title}
          </h3>
        </div>
        
        <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300 line-clamp-2">
          {project.description}
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm text-muted-foreground mb-3 flex items-center gap-2 group-hover:text-foreground transition-colors duration-300">
            <span className={`w-2 h-2 rounded-full bg-accent ${isAIMode ? 'animate-pulse' : ''}`}></span>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className={`text-xs bg-gradient-to-r from-primary/20 to-accent/20 text-foreground px-3 py-1.5 rounded-full border border-border hover:border-accent/30 transition-all duration-300 group-hover:scale-105 ${
                  isAIMode ? 'hover:bg-accent/10' : ''
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 p-2 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer" 
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20 p-2 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`glass-card max-w-4xl w-full p-8 rounded-xl relative animate-slide-in-up ${
            isAIMode ? 'ai-glow' : ''
          }`}>
            <button 
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg">
                {project.icon}
              </span>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {project.title}
              </h3>
            </div>
            
            <p className="text-foreground text-lg mb-8">
              {project.description}
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg text-muted-foreground mb-4 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-accent ${isAIMode ? 'animate-pulse' : ''}`}></span>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className={`text-sm bg-gradient-to-r from-primary/20 to-accent/20 text-foreground px-4 py-2 rounded-full border border-border hover:border-accent/30 transition-all duration-300 ${
                      isAIMode ? 'hover:bg-accent/10' : ''
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-6">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  <Github size={24} />
                  <span>View on GitHub</span>
                </a>
              )}
              
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink size={24} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Medical Chatbot",
      description: "AI-powered assistant delivering accurate medical responses using LLM and RAG architecture, with contextual document retrieval and real-time interaction.",
      technologies: ["LangChain", "Python", "RAG", "Flask", "React"],
      github: "#",
      demo: "#",
      icon: <MessageSquare size={24} className="text-portfolio-purple" />,
    },
    {
      title: "AI Quiz Generator",
      description: "Smart quiz creation tool that auto-generates questions using NLP and LLMs, streamlining content generation for educators and learners.",
      technologies: ["NLP", "Python", "LLM", "JavaScript", "TensorFlow"],
      github: "#",
      demo: "#",
      icon: <CheckCircle size={24} className="text-portfolio-blue" />,
    },
    {
      title: "Sales Power BI Dashboard",
      description: "Dynamic sales dashboard with advanced visuals, enabling interactive analysis and performance tracking using Power BI.",
      technologies: ["Power BI", "DAX", "SQL", "Data Visualization"],
      github: "#",
      demo: "#",
      icon: <BarChart size={24} className="text-portfolio-purple" />,
    },
    {
      title: "Temperature Forecasting",
      description: "Machine learning-based forecasting model combining ensemble techniques for reliable and precise temperature prediction.",
      technologies: ["LGBM", "Random Forest", "AdaBoost", "Python", "Pandas"],
      github: "#",
      demo: "#",
      icon: <BarChart size={24} className="text-portfolio-blue" />,
    },
    {
      title: "Contextual Spell Correction",
      description: "NLP-powered tool for context-sensitive spell correction, utilizing the LLaMA model to enhance textual accuracy in intelligent systems.",
      technologies: ["LLaMA", "NLP", "Python", "Transformers"],
      github: "#",
      demo: "#",
      icon: <TerminalSquare size={24} className="text-portfolio-purple" />,
    },
    {
      title: "Verba Vision Pro",
      description: "Advanced OCR-powered transcription platform that converts handwritten and printed content into structured digital text using AI vision and language models.",
      technologies: ["OCR", "Azure Vision", "Python", "LLM", "LangChain"],
      github: "#",
      demo: "#",
      icon: <TerminalSquare size={24} className="text-portfolio-blue" />,
    },
  ];
  

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
      id="projects"
      className="py-20 bg-portfolio-dark/50"
    >
      <div className="container mx-auto px-4">
        <h2 ref={sectionRef} className="section-title text-center opacity-0">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
