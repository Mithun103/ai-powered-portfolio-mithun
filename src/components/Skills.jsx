import React, { useEffect, useRef, useState } from "react";
import { Code, Database, FlaskConical, Layers, Bot } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useTheme } from "../context/ThemeContext";

// Import SVG icons
import ReactIcon from "../skilllogos/React.svg";
import HTMLIcon from "../skilllogos/HTML5.svg";
import CSSIcon from "../skilllogos/CSS3.svg";
import JavaScriptIcon from "../skilllogos/JavaScript.svg";
import JavaIcon from "../skilllogos/Java.svg";
import SpringBootIcon from "../skilllogos/Spring.svg";
import MySQLIcon from "../skilllogos/MySQL.svg";
import MongoDBIcon from "../skilllogos/MongoDB.svg";
import PythonIcon from "../skilllogos/Python.svg";
import TensorFlowIcon from "../skilllogos/TensorFlow.svg";
import PyTorchIcon from "../skilllogos/PyTorch.svg";
import ScikitLearnIcon from "../skilllogos/scikit-learn.svg";
import AzureVisionIcon from "../skilllogos/Azure.svg";
import FlaskIcon from "../skilllogos/Flask.svg";
import JupyterIcon from "../skilllogos/Jupyter.svg";
import PandasIcon from "../skilllogos/Pandas.svg";
import NumPyIcon from "../skilllogos/NumPy.svg";
import MatplotlibIcon from "../skilllogos/Matplotlib.svg";
import VSCodeIcon from "../skilllogos/Visual Studio Code (VS Code).svg";
import IntelliJIcon from "../skilllogos/IntelliJ IDEA.svg";
import LangChainIcon from "../skilllogos/Langchain.svg";
import PhidataIcon from "../skilllogos/Phidata.svg";
import LangGraphIcon from "../skilllogos/Langgraph.svg";
import PhotoshopIcon from "../skilllogos/Adobe Photoshop.svg";
import CanvaIcon from "../skilllogos/Canva.svg";

const getSkillIcon = (skill) => {
  const icons = {
    "React.js": <img src={ReactIcon} alt="React" className="w-10 h-10" />,
    "HTML": <img src={HTMLIcon} alt="HTML" className="w-10 h-10" />,
    "CSS": <img src={CSSIcon} alt="CSS" className="w-10 h-10" />,
    "JavaScript": <img src={JavaScriptIcon} alt="JavaScript" className="w-10 h-10" />,
    "Java": <img src={JavaIcon} alt="Java" className="w-10 h-10" />,
    "Spring Boot": <img src={SpringBootIcon} alt="Spring Boot" className="w-10 h-10" />,
    "MySQL": <img src={MySQLIcon} alt="MySQL" className="w-10 h-10" />,
    "MongoDB": <img src={MongoDBIcon} alt="MongoDB" className="w-10 h-10" />,
    "Flask": <img src={FlaskIcon} alt="Flask" className="w-10 h-10" />,
    "Python": <img src={PythonIcon} alt="Python" className="w-10 h-10" />,
    "TensorFlow": <img src={TensorFlowIcon} alt="TensorFlow" className="w-10 h-10" />,
    "PyTorch": <img src={PyTorchIcon} alt="PyTorch" className="w-10 h-10" />,
    "Scikit-learn": <img src={ScikitLearnIcon} alt="Scikit-learn" className="w-10 h-10" />,
    "LangChain": <img src={LangChainIcon} alt="LangChain" className="w-10 h-10" />,
    "Phidata": <img src={PhidataIcon} alt="Phidata" className="w-10 h-10" />,
    "LangGraph": <img src={LangGraphIcon} alt="LangGraph" className="w-10 h-10" />,
    "Azure Vision": <img src={AzureVisionIcon} alt="Azure Vision" className="w-10 h-10" />,
    "Jupyter": <img src={JupyterIcon} alt="Jupyter" className="w-10 h-10" />,
    "Pandas": <img src={PandasIcon} alt="Pandas" className="w-10 h-10" />,
    "NumPy": <img src={NumPyIcon} alt="NumPy" className="w-10 h-10" />,
    "Matplotlib": <img src={MatplotlibIcon} alt="Matplotlib" className="w-10 h-10" />,
    "VSCode": <img src={VSCodeIcon} alt="VSCode" className="w-10 h-10" />,
    "IntelliJ": <img src={IntelliJIcon} alt="IntelliJ" className="w-10 h-10" />,
    "Adobe Photoshop": <img src={PhotoshopIcon} alt="Adobe Photoshop" className="w-10 h-10" />,
    "Canva": <img src={CanvaIcon} alt="Canva" className="w-10 h-10" />
  };
  
  return icons[skill] || (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-400">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
  );
};

const SkillLogo = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, [index]);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          ref={logoRef} 
          className={`flex flex-col items-center gap-2 p-4 glass-card transform transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } hover:scale-110 min-w-[120px]`}
        >
          <span className="text-3xl">{getSkillIcon(skill)}</span>
          <span className="text-gray-300 text-sm text-center">{skill}</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 glass-card border-portfolio-purple/30">
        <div className="flex flex-col space-y-2">
          <h4 className="text-lg font-bold text-portfolio-purple">{skill}</h4>
          <p className="text-sm text-gray-300">
            {getSkillDescription(skill)}
          </p>
          {getSkillProjects(skill).length > 0 && (
            <div>
              <h5 className="text-xs text-gray-400 mt-2">RELATED PROJECTS:</h5>
              <ul className="text-xs text-gray-300 list-disc pl-4 mt-1">
                {getSkillProjects(skill).map((project, i) => (
                  <li key={i}>{project}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const getSkillDescription = (skill) => {
  const descriptions = {
    "React.js": "A JavaScript library for building user interfaces with reusable components.",
    "HTML": "HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser.",
    "CSS": "Cascading Style Sheets, used for describing the presentation of a document written in HTML.",
    "JavaScript": "A programming language that enables interactive web pages and is an essential part of web applications.",
    "Java": "A class-based, object-oriented programming language designed for portability and cross-platform development.",
    "Spring Boot": "An open-source Java-based framework used to create microservices and web applications.",
    "MySQL": "An open-source relational database management system.",
    "MongoDB": "A NoSQL document database used to store large amounts of data.",
    "Python": "A high-level, interpreted programming language known for its readability and versatility.",
    "TensorFlow": "An open-source machine learning framework developed by Google.",
    "PyTorch": "An open-source machine learning library based on the Torch library.",
    "Scikit-learn": "A free software machine learning library for Python.",
    "LangChain": "A framework for developing applications powered by language models.",
    "Phidata": "A toolkit for building AI assistants and data applications.",
    "NLP": "Natural Language Processing, a field of AI that enables computers to understand human language.",
    "RAG": "Retrieval-Augmented Generation, a technique that enhances LLM responses with retrieved context.",
    "Azure Vision": "Microsoft's computer vision service for analyzing visual data.",
    "Flask": "A micro web framework written in Python, used for building web applications.",
    "Jupyter": "An interactive computing environment for creating notebook documents.",
    "Power BI": "A business analytics service by Microsoft that provides interactive visualizations.",
    "Pandas": "A software library for data manipulation and analysis in Python.",
    "NumPy": "A library for the Python programming language, adding support for large, multi-dimensional arrays.",
    "Matplotlib": "A plotting library for the Python programming language.",
    "Agentic AI": "AI systems that can act autonomously to achieve specified goals.",
  };
  
  return descriptions[skill] || `Advanced technology used in modern development.`;
};

const getSkillProjects = (skill) => {
  const projects = {
    "React.js": ["Portfolio Website", "Medical Chatbot UI"],
    "Python": ["Medical Chatbot", "AI Quiz Generator", "Temperature Forecasting"],
    "TensorFlow": ["Temperature Forecasting", "Handwriting Evaluation Tool"],
    "PyTorch": ["Contextual Spell Correction"],
    "LangChain": ["Medical Chatbot", "WhatsApp Alert AI"],
    "MongoDB": ["Medical Chatbot"],
    "Power BI": ["Sales Dashboard"],
    "RAG": ["Medical Chatbot", "Green Finance Optimizer"],
    "NLP": ["Contextual Spell Correction", "AI Quiz Generator"],
    "Flask": ["Medical Chatbot API", "AI Quiz Generator"],
    "Azure Vision": ["Pregnancy Care Chatbot", "Handwriting Evaluation Tool"],
  };
  
  return projects[skill] || [];
};

const SkillCategory = ({ title, icon: Icon, skills, delay = 0 }) => {
  const categoryRef = useRef(null);

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

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={categoryRef} className="opacity-0">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-portfolio-purple/20 p-3 rounded-xl">
            <Icon className="text-portfolio-purple" size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillLogo key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "Full Stack",
      icon: Code,
      skills: ["React.js", "HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL", "MongoDB", "Flask"],
    },
    {
      title: "AI/ML",
      icon: FlaskConical,
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "Phidata", "LangGraph", "Azure Vision"],
    },
    {
      title: "Tools and Libraries",
      icon: Layers,
      skills: ["Jupyter", "Pandas", "NumPy", "Matplotlib", "VSCode", "IntelliJ", "Adobe Photoshop", "Canva"],
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
      id="skills"
      className="py-24 relative"
    >
      <div className="container mx-auto px-4">
        <h2 ref={sectionRef} className="section-title text-center opacity-0 mb-16">My Tech Stack</h2>

        <div className="max-w-6xl mx-auto space-y-16">
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
