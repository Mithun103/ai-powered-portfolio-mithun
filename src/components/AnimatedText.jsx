
import React, { useState, useEffect } from "react";

const AnimatedText = ({ texts, className }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Adding characters
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        
        // If completed typing current text, wait and then delete
        if (displayText === currentFullText) {
          setTypingSpeed(1500); // Pause at the end of typing
          setIsDeleting(true);
        } else {
          setTypingSpeed(80);
        }
      } else {
        // Deleting characters
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        
        // If deletion complete, move to next text
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          setTypingSpeed(300); // Pause before typing next word
        } else {
          setTypingSpeed(30); // Delete faster than typing
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, currentTextIndex, isDeleting, texts, typingSpeed]);

  return (
    <span className={`${className} typing-container`}>
      {displayText}
      <span className="cursor inline-block w-1 h-5 ml-1 bg-portfolio-purple animate-pulse"></span>
    </span>
  );
};

export default AnimatedText;
