"use client";

import React from "react";
import { LuInfo } from "react-icons/lu";

type CardProps = {
  children: React.ReactNode;
  title?: string;
};

const Card: React.FC<CardProps> = ({
  children,
  title = "Quote of the Day",
}) => {
  return (
    <div className="relative w-full min-h-40 h-full rounded-3xl bg-white/10 p-4 backdrop-blur-md shadow-lg border-2 border-white">
      <div className="absolute top-4 left-4 bg-white text-black text-sm font-semibold px-4 py-1 rounded-full shadow-sm z-10 flex flex-row items-center">
        {title}{" "}
        {title.toLowerCase().includes("stack") && (
          <div className="tooltip">
            <div className="tooltip-content">
              <div className="text-xs font-normal">
                <b>Beginner:</b> Under 1 year
                <br />
                <b>Intermediate:</b> 1-3 years
                <br />
                <b>Advanced:</b> Over 3 years
              </div>
            </div>
            <LuInfo size={16} className="ml-1 cursor-pointer" color="#747474" />
          </div>
        )}
      </div>

      <div className="pt-12 pb-6 px-4 h-72 overflow-y-auto custom-scrollbar scroll-container">
        {children}
      </div>
    </div>
  );
};

export default Card;
