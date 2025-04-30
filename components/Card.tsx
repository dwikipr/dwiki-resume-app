"use client";

import React from "react";

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
      <div className="absolute top-4 left-4 bg-white text-black text-sm font-semibold px-4 py-1 rounded-full shadow-sm z-10">
        {title}
      </div>

      <div className="pt-12 pb-6 px-4 max-h-72 overflow-y-auto custom-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default Card;
