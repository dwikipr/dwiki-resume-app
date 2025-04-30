import React from "react";
import { FaJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

type Stack = {
  name: string;
  level: "Beginner" | "Advance";
  icon: React.ReactNode;
};

const languages: Stack[] = [
  {
    name: "JavaScript",
    level: "Advance",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    name: "PHP",
    level: "Beginner",
    icon: <FaPhp className="text-gray-600" />,
  },
  {
    name: "Python",
    level: "Beginner",
    icon: <FaPython className="text-blue-500" />,
  },
];

const frameworks: Stack[] = [
  {
    name: "ReactJS",
    level: "Advance",
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    name: "NextJS",
    level: "Advance",
    icon: <SiNextdotjs className="text-black" />,
  },
];

const renderStack = (items: Stack[]) =>
  items.map((stack, idx) => (
    <div
      key={idx}
      className="flex items-center gap-2 bg-white/20 text-sm px-3 py-1 rounded-full shadow-sm backdrop-blur-sm border border-white/30"
    >
      {stack.icon}
      <span>{stack.name}</span>
      <span className="text-gray-600">. {stack.level}</span>
    </div>
  ));

const StackContent: React.FC = () => {
  return (
    <div className="space-y-4 text-sm text-black">
      <div>
        <h4 className="font-semibold mb-2">Languages</h4>
        <div className="flex flex-wrap gap-2">{renderStack(languages)}</div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Frameworks</h4>
        <div className="flex flex-wrap gap-2">{renderStack(frameworks)}</div>
      </div>
    </div>
  );
};

export default StackContent;
