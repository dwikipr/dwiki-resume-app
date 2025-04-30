import React from "react";

interface AboutType {
  data: ResumeData;
}

const AboutContent: React.FC<AboutType> = ({ data }) => {
  return (
    <div className="text-left space-y-2 flex flex-col gap-4">
      <p>{data.summary}</p>
      <button className="py-2 px-4 bg-black text-white rounded-full text-sm font-semibold cursor-pointer">
        {data.actions.getInTouch}
      </button>
    </div>
  );
};

export default AboutContent;
