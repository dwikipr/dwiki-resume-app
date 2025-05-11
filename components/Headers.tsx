'use client';

import Image from 'next/image';
import React from 'react';

interface HeadersProps {
  data: ResumeData;
}

const Headers: React.FC<HeadersProps> = ({ data }) => {
  return (
    <div className="flex flex-row px-4 md:px-8 justify-between w-full">
      <div className="flex flex-row items-center gap-4">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        <a
          href={`mailto:${data.profile.email}`}
          className="font-semibold underline"
        >
          {data.profile.email}
        </a>
      </div>
      <div className="relative"></div>
    </div>
  );
};

export default Headers;
