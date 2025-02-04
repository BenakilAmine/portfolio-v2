"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StarGame = () => {
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prev) => [
        ...prev,
        { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setScore((prev) => prev + 1);
    setStars((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-4 left-4 text-white text-2xl">Score: {score}</div>
      {stars.map((star, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute w-4 h-4 bg-yellow-400 rounded-full cursor-pointer"
          style={{ left: star.x, top: star.y }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default StarGame; 