/* eslint-disable @next/next/no-img-element */
import { motion } from 'motion/react';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ProjectModalProps {
  selectedProject: Project;
  handleModalClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  selectedProject,
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
        className="relative w-full max-h-svh max-w-4xl p-6 bg-white/80 border border-white/20 backdrop-blur-lg text-black rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleModalClose}
          className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-white/50 transition cursor-pointer"
        >
          <FaTimes className="text-black" />
        </button>
        <div className="flex flex-col md:flex-row gap-6 max-h-[90svh] overflow-y-scroll">
          {/* Left side image and summary */}
          <div className="flex-1 space-y-4">
            <div className="w-full aspect-auto rounded-xl bg-gray-300 overflow-hidden">
              {selectedProject.mediaType === 'videos' ? (
                <video
                  src={selectedProject.media}
                  title={selectedProject.title}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={selectedProject.media}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <p className="text-sm text-black/70">{selectedProject.summary}</p>
          </div>

          {/* Right side content */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-xl font-bold">{selectedProject.title}</h2>
              <p className="text-sm text-black/60">{selectedProject.period}</p>
            </div>

            <div>
              <h3 className="font-semibold">Goals:</h3>
              <p className="text-sm text-black/70">{selectedProject.goals}</p>
            </div>

            <div>
              <h3 className="font-semibold">Takeaways:</h3>
              <p className="text-sm text-black/70">
                {selectedProject.takeaways}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Tech Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies?.map(
                  (tech: ProjectTechnology, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center px-3 py-1 rounded-full bg-white/60 border border-white/30 text-sm backdrop-blur-md"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        width={14}
                        height={14}
                        className="w-4 h-4 mr-2"
                      />
                      {tech.name}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
