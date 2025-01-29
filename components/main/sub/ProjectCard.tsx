"use client";

import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  details?: {
    technologies?: string[];
    features?: string[];
    demoLink?: string;
    githubLink?: string;
    longDescription?: string;
  };
  onClick: () => void;
}

export const ProjectCard = ({ src, title, description, onClick }: Props) => {
  return (
    <div 
      onClick={onClick}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer transform transition-all hover:scale-105"
    >
      <div className="aspect-video relative ">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="mt-4 inline-block px-6 py-2 bg-purple-600 text-white rounded-lg">
          En savoir plus
        </div>
      </div>
    </div>
  );
};