import React from "react";
import Link from "next/link";

interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceContent: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div>
      {experiences.map((exp: Experience, index: number) => (
        <div key={index} className="relative pl-6 pb-4">
          <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-black" />

          {index !== experiences.length - 1 && (
            <div className="absolute left-[5px] top-4 h-full w-0.5 bg-black" />
          )}

          <h3 className="font-semibold text-sm">
            {exp.title} at {exp.company}
          </h3>
          <p className="text-gray-500 text-sm">
            {exp.period} · {exp.type}
          </p>
          <Link href="" className="text-blue-600 text-sm font-medium">
            {exp.linkText} {">"}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ExperienceContent;
