"use client";

import React from "react";
import { OptimizedStars } from "../shared/OptimizedStars";

const StarBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-transparent z-[-1] pointer-events-none">
      <OptimizedStars />
    </div>
  );
};

export default StarBackground;