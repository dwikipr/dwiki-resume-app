"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectProps {
  projects: Project[];
}

const ProjectContent: React.FC<ProjectProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
  };

  const resetAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
    resetAutoScroll();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    resetAutoScroll();
  };

  return (
    <div
      className="relative w-full h-full group transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex gap-6 transition-opacity duration-500">
        <div className="w-1/2 h-48 bg-gray-300 rounded-2xl border-2 border-white"></div>
        <div className="flex flex-col justify-between w-1/2">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              {projects[activeIndex].title}
            </h3>
            <p className="text-sm text-gray-500">
              {projects[activeIndex].description}
            </p>
          </div>
          <button className="bg-black text-white px-6 py-2 max-w-44 rounded-full text-sm font-semibold cursor-pointer mt-4">
            View Case Study
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 h-[10px] w-40 rounded-full bg-white overflow-hidden border-2 border-white">
        <div
          className="h-full rounded-full bg-black transition-all duration-300"
          style={{
            width: `${100 / projects.length}%`,
            left: `${(100 / projects.length) * activeIndex}%`,
            position: "absolute",
          }}
        />
      </div>

      <button
        onClick={handlePrev}
        className={`absolute cursor-pointer top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className={`absolute cursor-pointer top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProjectContent;
