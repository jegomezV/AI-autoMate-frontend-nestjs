"use client";
import React, { useState, useEffect } from 'react';

const TextEncrypted = ({ text, interval = 30 }) => {
  const [outputText, setOutputText] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let timer;

    if (outputText !== text) {
      timer = setInterval(() => {
        if (outputText.length < text.length) {
          setOutputText(prev => prev + text[prev.length]);
        } else {
          clearInterval(timer);
        }
      }, interval);
    }

    return () => clearInterval(timer);
  }, [text, interval, outputText]);

  const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";
  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted) {
    return null;
  }

  return (
    <span className="text-white">
      {outputText}
      {remainder}
    </span>
  );
};

export default TextEncrypted;
