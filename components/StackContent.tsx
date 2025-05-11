/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface StackProps {
  data: Stack[];
}

const renderStack = (items: StackContent[]) =>
  items.map((stack, idx) => (
    <div
      key={idx}
      className="flex items-center px-3 py-1 rounded-full bg-white/80 border border-white/30 text-sm backdrop-blur-md"
    >
      <img src={stack.icon} alt={stack.name} className="w-4 h-4 mr-2" />
      {stack.name}
      <span className="mx-1">•</span>
      <span className="text-gray-600">{stack.level}</span>
    </div>
  ));

const StackContent: React.FC<StackProps> = ({ data }) => {
  return (
    <div className="space-y-4 text-sm text-black">
      {data.map((stk: Stack) => (
        <div key={stk.type}>
          <h4 className="font-semibold mb-2">{stk.type}</h4>
          <div className="flex flex-wrap gap-2">{renderStack(stk.content)}</div>
        </div>
      ))}
    </div>
  );
};

export default StackContent;
