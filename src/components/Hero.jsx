import React from "react";
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

const Hero = () => {
  const handleScrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    window.open('/resume.pdf', '_blank');
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
