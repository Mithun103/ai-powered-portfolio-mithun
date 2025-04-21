import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import AnimatedText from "./AnimatedText";

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
                  "AI/ML Engineer",
                  "Tech Leader"
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
      <div className="absolute inset-0 pointer-events-none">
        {/* Spring Boot */}
        <div className="absolute top-[10%] left-[5%] w-12 h-12 text-green-500 floating float-7">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
        </div>

        {/* React */}
        <div className="absolute top-[15%] left-[10%] w-12 h-12 text-blue-400 floating float-1">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </div>
        
        {/* Python */}
        <div className="absolute top-[15%] right-[10%] w-12 h-12 text-yellow-400 floating float-2">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 2a8.5 8.5 0 0 1 4.11 1.08c1.34.74 2.06 1.75 2.06 2.78v6.12c0 1.03-.72 2.04-2.06 2.78A8.5 8.5 0 0 1 12 16a8.5 8.5 0 0 1-4.11-1.08C6.55 14.18 5.83 13.17 5.83 12.14V5.86c0-1.03.72-2.04 2.06-2.78A8.5 8.5 0 0 1 12 2zm0 12c3.28 0 5.94-1.27 5.94-2.83V8.83C16.6 9.97 14.18 10.83 12 10.83S7.4 9.97 6.06 8.83v2.34c0 1.56 2.66 2.83 5.94 2.83z"/>
          </svg>
        </div>

        {/* TensorFlow */}
        <div className="absolute top-[25%] left-[20%] w-12 h-12 text-orange-500 floating float-8">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1 15.68L5 14.5v-5l6 3v5.18zm8-3.18l-6 3V12.5l6-3v4.18z"/>
          </svg>
        </div>
        
        {/* LangChain */}
        <div className="absolute top-[35%] left-[15%] w-12 h-12 text-purple-500 floating float-3">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/>
          </svg>
        </div>

        {/* MongoDB */}
        <div className="absolute top-[35%] right-[15%] w-12 h-12 text-green-500 floating float-4">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/>
          </svg>
        </div>

        {/* PyTorch */}
        <div className="absolute top-[45%] left-[10%] w-12 h-12 text-red-500 floating float-9">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1 15.68L5 14.5v-5l6 3v5.18zm8-3.18l-6 3V12.5l6-3v4.18z"/>
          </svg>
        </div>

        {/* JavaScript */}
        <div className="absolute top-[45%] right-[20%] w-12 h-12 text-yellow-500 floating float-10">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
        </div>

        {/* FastAPI */}
        <div className="absolute top-[55%] right-[10%] w-12 h-12 text-blue-400 floating float-6">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="text-gray-400 h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;
