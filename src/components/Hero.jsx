import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import AnimatedText from "./AnimatedText";
import SpringIcon from "../skilllogos/Spring.svg";
import ReactIcon from "../skilllogos/React.svg";
import PythonIcon from "../skilllogos/Python.svg";
import TensorFlowIcon from "../skilllogos/TensorFlow.svg";
import LangChainIcon from "../skilllogos/Langchain.svg";
import MongoDBIcon from "../skilllogos/MongoDB.svg";
import PyTorchIcon from "../skilllogos/PyTorch.svg";
import JavaScriptIcon from "../skilllogos/JavaScript.svg";
import JavaIcon from "../skilllogos/Java.svg";
import MySQLIcon from "../skilllogos/MySQL.svg";

const CurvyQuote = ({ className, isClosing = false }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    style={{ transform: isClosing ? 'rotate(180deg)' : 'none' }}
  >
    <path
      d="M25,40 Q10,40 10,55 Q10,70 25,70 Q35,70 35,60 Q35,53 30,50 Q35,47 35,40 Q35,30 25,30 Q20,30 20,35"
      fill="none"
      stroke="url(#gradient)"
      strokeWidth="4"
      strokeLinecap="round"
      className="animate-draw"
    />
    <path
      d="M55,40 Q40,40 40,55 Q40,70 55,70 Q65,70 65,60 Q65,53 60,50 Q65,47 65,40 Q65,30 55,30 Q50,30 50,35"
      fill="none"
      stroke="url(#gradient)"
      strokeWidth="4"
      strokeLinecap="round"
      className="animate-draw"
    />
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.5" /> {/* portfolio-purple */}
        <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" /> {/* portfolio-blue */}
      </linearGradient>
    </defs>
  </svg>
);

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    {
      text: "Crafting tomorrow's solutions with today's code",
      author: "Innovation in every commit"
    },
    {
      text: "Where AI meets imagination, possibilities become reality",
      author: "Future forward"
    },
    {
      text: "Transforming complex challenges into elegant solutions",
      author: "Code with purpose"
    },
    {
      text: "Building bridges between human creativity and artificial intelligence",
      author: "Tech fusion"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1rFmz_ota7Bf4fntQSNDbbIfq-xRBpYWN/view?usp=sharing', '_blank');
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-purple to-portfolio-blue">Mithun MS</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-medium text-gray-300">
              <AnimatedText 
                texts={[
                  "Full Stack Developer",
                  "AI/ML Enthusiast",
                  "Digital Craftsman"
                ]} 
                className="inline-block"
              />
            </div>

            {/* Enhanced Quote Section with Curvy Quotes */}
            <div className="relative mt-8 max-w-3xl mx-auto group">
              <div className="glass-card bg-portfolio-dark/20 backdrop-blur-sm px-12 py-6 rounded-xl border border-white/5 transition-all duration-300 group-hover:border-portfolio-purple/20">
                {/* Opening Quote */}
                <div className="absolute -top-6 -left-2 w-16 h-16">
                  <CurvyQuote className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Quote Text */}
                <div className="space-y-3 relative">
                  <p className="text-gray-300 font-light leading-relaxed tracking-wide text-sm md:text-base">
                    <span className="text-portfolio-purple/90">Neurons</span> in my brain, 
                    <span className="text-portfolio-blue/90"> neurons</span> in my model... 
                    Coincidence? I don't believe so.
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed tracking-wide text-sm md:text-base">
                    While you're feeding data to your networks, I'm 
                    <span className="text-portfolio-purple/90"> training my mind</span> to think in layers.
                  </p>
                  <p className="text-gray-300 font-light leading-relaxed tracking-wide text-sm md:text-base">
                    My neurons don't just flicker — they 
                    <span className="text-portfolio-blue/90"> fine-tune</span>. 
                    So when magic happens, it's not just the model learning, 
                    <span className="italic text-portfolio-purple/90"> it's me evolving too.</span>
                  </p>
                </div>

                {/* Closing Quote */}
                <div className="absolute -bottom-6 -right-2 w-16 h-16">
                  <CurvyQuote className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" isClosing={true} />
                </div>

                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-purple/0 via-portfolio-purple/10 to-portfolio-blue/0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-portfolio-purple/0 via-portfolio-purple/10 to-portfolio-blue/0 rounded-xl animate-pulse"></div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-portfolio-purple/5 to-portfolio-blue/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building scalable AI-powered and full-stack solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={handleScrollToAbout}
              className="button-primary group px-8 py-4 text-lg"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-portfolio-purple/20 to-portfolio-blue/20 hover:from-portfolio-purple/30 hover:to-portfolio-blue/30 text-white px-8 py-4 text-lg group border border-white/10 hover:border-portfolio-purple/30 transition-all duration-300"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Tech Logos */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Spring Boot */}
        <div className="absolute top-[15%] left-[2%] w-8 h-8 md:w-12 md:h-12 floating float-7 hidden sm:block">
          <img src={SpringIcon} alt="Spring Boot" className="w-full h-full" />
        </div>

        {/* React */}
        <div className="absolute top-[30%] left-[5%] w-8 h-8 md:w-12 md:h-12 floating float-1 hidden sm:block">
          <img src={ReactIcon} alt="React" className="w-full h-full" />
        </div>
        
        {/* Python */}
        <div className="absolute top-[15%] right-[2%] w-8 h-8 md:w-12 md:h-12 floating float-2 hidden sm:block">
          <img src={PythonIcon} alt="Python" className="w-full h-full" />
        </div>

        {/* MySQL */}
        <div className="absolute top-[30%] right-[5%] w-8 h-8 md:w-12 md:h-12 floating float-11 hidden sm:block">
          <img src={MySQLIcon} alt="MySQL" className="w-full h-full" />
        </div>

        {/* TensorFlow */}
        <div className="absolute top-[45%] left-[8%] w-8 h-8 md:w-12 md:h-12 floating float-8 hidden sm:block">
          <img src={TensorFlowIcon} alt="TensorFlow" className="w-full h-full" />
        </div>
        
        {/* LangChain */}
        <div className="absolute top-[60%] left-[3%] w-8 h-8 md:w-12 md:h-12 floating float-3 hidden sm:block">
          <img src={LangChainIcon} alt="LangChain" className="w-full h-full" />
        </div>

        {/* MongoDB */}
        <div className="absolute top-[45%] right-[8%] w-8 h-8 md:w-12 md:h-12 floating float-4 hidden sm:block">
          <img src={MongoDBIcon} alt="MongoDB" className="w-full h-full" />
        </div>

        {/* PyTorch */}
        <div className="absolute top-[75%] left-[5%] w-8 h-8 md:w-12 md:h-12 floating float-9 hidden sm:block">
          <img src={PyTorchIcon} alt="PyTorch" className="w-full h-full" />
        </div>

        {/* JavaScript */}
        <div className="absolute top-[60%] right-[3%] w-8 h-8 md:w-12 md:h-12 floating float-10 hidden sm:block">
          <img src={JavaScriptIcon} alt="JavaScript" className="w-full h-full" />
        </div>

        {/* Java */}
        <div className="absolute top-[75%] right-[5%] w-8 h-8 md:w-12 md:h-12 floating float-6 hidden sm:block">
          <img src={JavaIcon} alt="Java" className="w-full h-full" />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-30">
        <ArrowDown className="text-gray-400 h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;
