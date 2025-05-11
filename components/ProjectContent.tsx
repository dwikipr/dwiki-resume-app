/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProjectProps {
  projects: Project[];
  handleModalOpen: (proj: Project) => void;
}

const ProjectContent: React.FC<ProjectProps> = ({
  projects,
  handleModalOpen,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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
  });

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
    resetAutoScroll();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    resetAutoScroll();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const deltaX = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (deltaX > swipeThreshold) {
      handleNext(); // Swiped left
    } else if (deltaX < -swipeThreshold) {
      handlePrev(); // Swiped right
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const truncateText = (text: string, maxWords: number) => {
    const wordsArray = text.split(' ');
    if (wordsArray.length > maxWords) {
      return wordsArray.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  return (
    <div
      className="relative w-full h-full group transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Content */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity duration-500 overflow-hidden">
        <div className="relative w-full md:w-1/2 h-40 md:h-56 bg-gray-300 rounded-2xl border-2 border-white overflow-hidden">
          {projects[activeIndex].mediaType === 'videos' ? (
            <video
              src={projects[activeIndex].media}
              title={projects[activeIndex].title}
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              src={projects[activeIndex].media}
              alt={projects[activeIndex].title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute bottom-4 left-4 h-[10px] w-32 md:w-40 rounded-full bg-white overflow-hidden border-2 border-white">
            <div
              className="h-full rounded-full bg-black transition-all duration-300"
              style={{
                width: `${100 / projects.length}%`,
                left: `${(100 / projects.length) * activeIndex}%`,
                position: 'absolute',
              }}
            />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <h3 className="font-semibold text-gray-800 mb-2 text-base md:text-lg">
            {projects[activeIndex].title}
          </h3>
          <p className="text-sm md:text-base text-[#2d2d2d] text-justify font-light">
            {truncateText(projects[activeIndex].summary, 25)}
          </p>
          <button
            onClick={() => handleModalOpen(projects[activeIndex])}
            className="bg-black text-white px-4 md:px-6 py-2 max-w-full md:max-w-44 rounded-full text-sm font-semibold cursor-pointer mt-4"
          >
            View Case Study
          </button>
        </div>
      </div>

      {/* Nav Arrows */}
      <button
        onClick={handlePrev}
        className={`absolute cursor-pointer top-1/2 left-2 transform -translate-y-1/2 bg-white p-1 md:p-2 rounded-full shadow transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className={`absolute cursor-pointer top-1/2 right-2 transform -translate-y-1/2 bg-white p-1 md:p-2 rounded-full shadow transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProjectContent;
