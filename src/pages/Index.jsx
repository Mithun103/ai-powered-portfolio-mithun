
import React, { useEffect } from "react";
import ParticleBackground from "../components/ParticleBackground";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatbotButton from "../components/ChatbotButton";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-dark text-white relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Index;
