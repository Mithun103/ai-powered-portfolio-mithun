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
      title: "Mediq: The AI Health Team",
      description: "Under development — A multi-agent AI system powered by LangGraph and intent-based routing, enabling autonomous generation of personalized health plans from diverse medical knowledge bases.",
      technologies: ["LangGraph", "LangChain", "Python", "RAG", "LLMs"],
      github: null,
      demo: null,
      icon: <MessageSquare size={24} className="text-portfolio-purple" />,
    },
    {
      title: "Quiz Maker AI",
      description: "Auto-generates and evaluates MCQs from PDFs using LLMs, leveraging generative AI for context-aware question creation and intelligent answer validation.",
      technologies: ["LLM", "LangChain", "Python", "React", "Flask"],
      github: "https://github.com/Mithun103/quiz-maker-backend",
      demo: "https://quizmakerai.netlify.app/",
      icon: <CheckCircle size={24} className="text-portfolio-blue" />,
    },
    {
      title: "Time-Series Temperature Forecasting",
      description: "Built ensemble-based model with lag/cyclical features for accurate temperature prediction (R²: 0.976, MAE: 1.46) using Random Forest, XGBoost, and LightGBM.",
      technologies: ["LightGBM", "XGBoost", "Random Forest", "Python", "Pandas"],
      github: "https://github.com/Mithun103/Advanced-Time-Series-Temperature-Prediction",
      demo: null,
      icon: <BarChart size={24} className="text-portfolio-purple" />,
    },
    {
      title: "Transformers from Scratch",
      description: "Built a 6-layer GPT model from scratch using PyTorch with 10.8M parameters and multi-head attention. Achieved validation loss of 1.56 in 5K steps.",
      technologies: ["PyTorch", "Transformers", "Autoregressive Decoding"],
      github: "https://github.com/Mithun103/Transformers-Scratch-Implementation",
      demo: null,
      icon: <TerminalSquare size={24} className="text-portfolio-blue" />,
    },
    {
      title: "T5 Summarizer with LoRA",
      description: "Fine-tuned T5 using LoRA for text summarization. Evaluated on 100 samples (ROUGE-1: 0.332, ROUGE-2: 0.141) and optimized for fast inference with Gradio.",
      technologies: ["LoRA", "T5", "HuggingFace", "Python", "Gradio"],
      github: "https://github.com/Mithun103/T5-LoRA-text-summarizer",
      demo: null,
      icon: <TerminalSquare size={24} className="text-portfolio-purple" />,
    },
    {
      title: "Verba Vision Pro",
      description: "OCR + LLM-powered system that transcribes and corrects handwritten/printed documents using layout-aware vision models for structured output.",
      technologies: ["OCR", "Azure Vision", "LangChain", "Python", "LLMs"],
      github: "https://github.com/Mithun103/verba-vision-pro",
      demo: null,
      icon: <TerminalSquare size={24} className="text-portfolio-blue" />,
    },
    {
      title: "Digi Utils",
      description: "Context-aware spell correction system for Excel spreadsheets, using LLMs to reduce manual effort and enhance accuracy during proofreading.",
      technologies: ["Python", "Excel", "LLMs"],
      github: "https://github.com/Mithun103/digi_utils",
      demo: null,
      icon: <TerminalSquare size={24} className="text-portfolio-purple" />,
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
