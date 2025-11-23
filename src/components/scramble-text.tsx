"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  revealDelay?: number;
}

const CHARS = "!<>-_\\/[]{}—=+*^?#";

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className, revealDelay = 0 }) => {
  const [currentText, setCurrentText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMounted = useRef(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentText(prev => 
        prev
          .split("")
          .map((_letter, index) => {
            if(index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join("")
      );
      
      if(iteration >= text.length){ 
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    if (isMounted.current) {
      const timeoutId = setTimeout(() => {
        scramble();
      }, revealDelay);
      return () => clearTimeout(timeoutId);
    } else {
      isMounted.current = true;
      // Initially set to random characters
      setCurrentText(text.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join(""));
      const timeoutId = setTimeout(scramble, revealDelay);
      return () => clearTimeout(timeoutId);
    }
  }, [scramble, text, revealDelay]);

  return <span className={className}>{currentText}</span>;
};

export default ScrambleText;