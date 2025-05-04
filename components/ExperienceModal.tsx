/* eslint-disable @next/next/no-img-element */
import { motion } from 'motion/react';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ExperienceModalProps {
  selectedExperience: Experience;
  handleModalClose: () => void;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({
  selectedExperience,
  handleModalClose,
}) => {
  return (
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/45"
      onClick={handleModalClose}
    >
      <motion.div
        key="content"
        initial={{ scale: 0.9, opacity: 0, filter: 'blur(5px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        exit={{ scale: 0.9, opacity: 0, filter: 'blur(5px)' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative w-full max-w-lg p-6 bg-white/80 border border-white/20 backdrop-blur-lg text-black rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleModalClose}
          className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-white/50 transition cursor-pointer"
        >
          <FaTimes className="text-black" />
        </button>

        <h2 className="text-xl font-semibold mb-2">
          {selectedExperience.title} at {selectedExperience.company}
        </h2>
        <p className="text-sm mb-2 text-black/60">
          {selectedExperience.period} &bull; {selectedExperience.models} &bull;{' '}
          {selectedExperience.type}
        </p>

        <div className="my-4">
          <h3 className="font-semibold mb-1">Description:</h3>
          <p className="text-sm text-black/60">
            {selectedExperience.description}
          </p>
        </div>

        <div className="my-4">
          <h3 className="font-semibold mb-1">Key Responsibilities:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-black/60">
            {selectedExperience.responsibilities?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="my-4">
          <h3 className="font-semibold mb-1">Tech Used:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedExperience.technologies?.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center px-3 py-1 rounded-full bg-white/20 border border-white/30 text-sm backdrop-blur-md"
              >
                <img src={tech.icon} alt={tech.name} className="w-4 h-4 mr-2" />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceModal;
