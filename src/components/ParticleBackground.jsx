import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);
    
    // Particle settings
    const particlesArray = [];
    const numberOfParticles = Math.min(50, window.innerWidth / 20);
    
    // Create particles
    const createParticles = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
          color: Math.random() > 0.5 ? "#9b87f5" : "#33C3F0"
        });
      }
    };
    
    createParticles();
    
    // Update particles and draw
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around edges
        if (p.x > canvas.width) p.x = 0;
        else if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        else if (p.y < 0) p.y = canvas.height;
      }
      
      // Connect particles with lines (if they're close enough)
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Draw lines between nearby particles
    const connectParticles = () => {
      const maxDistance = 100;
      
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = particlesArray[i].color;
            ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.2;
            ctx.lineWidth = 0.3;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="particles-container"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: 0,
        backgroundColor: 'rgba(10, 10, 10, 0.02)',
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground;
