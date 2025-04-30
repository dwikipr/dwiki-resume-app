import React from "react";

interface CoversProps {
  data: ResumeData;
}

const Covers: React.FC<CoversProps> = ({ data }) => {
  return (
    <div className="flex flex-col p-8 gap-10 w-full h-fit">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-semibold">Hi I'm {data.profile.name}!</h1>
        <h1 className="text-4xl font-semibold">
          <span className="text-gray-400">I'm a</span>
          <span> {data.profile.title} </span>
          <span className="text-gray-400">at</span>
        </h1>
        <div className="flex flex-row items-center gap-10">
          <h1 className="text-4xl font-semibold">
            <span className="text-[#4D50FF]">{data.profile.company}</span>
          </h1>
          <div className="flex flex-row gap-4 items-center py-2 px-4 bg-white rounded-full border-2 border-[#CFCFCF] relative">
            <div className="h-3 w-3 bg-[#0FE31D] rounded-full absolute"></div>
            <div className="h-3 w-3 bg-[#0FE31D] rounded-full flex justify-center items-center animate-ping absolute"></div>

            <span className="ml-6">{data.profile.status}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-6">
        <button className="py-4 px-6 bg-black text-white rounded-full text-xl font-semibold cursor-pointer">
          {data.actions.resume}
        </button>
        <div className="font-medium">
          <p>{data.actions.welcome}</p>
          <p>{data.actions.connect}</p>
        </div>
      </div>
    </div>
  );
};

export default Covers;
