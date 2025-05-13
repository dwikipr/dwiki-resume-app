'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface CoversProps {
  data: ResumeData;
}

const Covers: React.FC<CoversProps> = ({ data }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const handleDownloadCV = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/data/cv.pdf';
    link.setAttribute('download', 'cv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col p-4 md:p-8 gap-6 md:gap-10 w-full h-fit">
      <div className="flex flex-col gap-2 md:gap-6">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-semibold"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={textVariants}
        >
          Hi I&apos;m {data.profile.name}!
        </motion.h1>

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-semibold"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={textVariants}
        >
          <motion.span className="text-gray-400">I&apos;m a</motion.span>
          <span> {data.profile.title} </span>
          <span className="text-gray-400">at</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={textVariants}
          >
            <span className="text-[#4D50FF]">{data.profile.company}</span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1 }}
            variants={textVariants}
            className="flex flex-row gap-2 md:gap-4 items-center py-2 px-3 md:px-4 bg-white rounded-full border-2 border-[#CFCFCF] relative"
          >
            <div className="inline-grid *:[grid-area:1/1]">
              <div className="status status-success animate-ping"></div>
              <div className="status status-success"></div>
            </div>
            <span>{data.profile.status}</span>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <motion.button
          className={`py-3 md:py-4 px-5 md:px-6 bg-black text-white rounded-full text-lg md:text-xl font-semibold cursor-pointer ${
            isDownloading ? 'cursor-not-allowed bg-gray-300' : ''
          }`}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={textVariants}
          onClick={handleDownloadCV}
          disabled={isDownloading}
        >
          {data.actions.resume}{' '}
          {isDownloading && (
            <span className="loading loading-spinner loading-md"></span>
          )}
        </motion.button>

        <motion.div
          className="font-medium text-sm md:text-base"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.8 }}
          variants={textVariants}
        >
          <p>{data.actions.welcome}</p>
          <p>{data.actions.connect}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Covers;
