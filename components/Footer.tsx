'use client';

import Image from 'next/image';
import React from 'react';

interface FooterProps {
  data: ResumeData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 md:px-8 py-6 border-t border-gray-200 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex flex-row items-center gap-4">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        <a
          href={`mailto:${data.profile.email}`}
          className="font-semibold underline hover:text-black transition"
        >
          {data.profile.email}
        </a>
      </div>
      <div className="text-center md:text-right">
        © {currentYear} {data.profile.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
