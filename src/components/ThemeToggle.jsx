import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Brain } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme, isAIMode, toggleAIMode } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/20 transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-foreground" />
        ) : (
          <Moon className="w-5 h-5 text-foreground" />
        )}
      </button>
      
      <button
        onClick={toggleAIMode}
        className={`p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border transition-colors duration-300 ${
          isAIMode ? 'bg-accent/20 text-accent' : 'hover:bg-accent/20'
        }`}
        aria-label="Toggle AI mode"
      >
        <Brain className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ThemeToggle; 