"use client";

import React from "react";
import Card from "./Card";
import QuoteContent from "./QuoteContent";
import ExperienceContent from "./ExperienceContent";
import StackContent from "./StackContent";
import AboutContent from "./AboutContent";
import ProjectContent from "./ProjectContent";

interface ContentsProps {
  data: ResumeData;
}

const Contents: React.FC<ContentsProps> = ({ data }) => {
  const cards = [
    {
      title: "My Experience",
      content: <ExperienceContent experiences={data.experiences} />,
    },
    {
      title: "Quote of the Day",
      content: <QuoteContent quotes={data.quoteOfTheDay} />,
    },
    { title: "My Stacks", content: <StackContent /> },
    { title: "About Me", content: <AboutContent data={data} /> },
    {
      title: "My Projects",
      content: <ProjectContent projects={data.projects} />,
    },
  ];

  return (
    <div className="-mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 w-full">
      {cards.map((card, index) => {
        const isLast = index === cards.length - 1;
        const shouldStretch = isLast;

        return (
          <div
            key={index}
            className={`w-full ${shouldStretch ? "md:col-span-2" : ""}`}
          >
            <Card title={card.title}>{card.content}</Card>
          </div>
        );
      })}
    </div>
  );
};

export default Contents;
