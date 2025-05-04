'use client';

import React, { useState } from 'react';
import Card from './Card';
import QuoteContent from './QuoteContent';
import ExperienceContent from './ExperienceContent';
import StackContent from './StackContent';
import AboutContent from './AboutContent';
import ProjectContent from './ProjectContent';
import ExperienceModal from './ExperienceModal';
import { motion, AnimatePresence } from 'motion/react';
import ProjectModal from './ProjectModal';

interface ContentsProps {
  data: ResumeData;
}

const Contents: React.FC<ContentsProps> = ({ data }) => {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleExperienceOpen = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  const handleExperienceClose = () => {
    setSelectedExperience(null);
  };

  const handleProjectOpen = (project: Project) => {
    setSelectedProject(project);
  };

  const handleProjectClose = () => {
    setSelectedProject(null);
  };

  const cards = [
    {
      title: 'My Experience',
      content: (
        <ExperienceContent
          experiences={data.experiences}
          handleModalOpen={handleExperienceOpen}
        />
      ),
    },
    {
      title: 'Quote of the Day',
      content: <QuoteContent quotes={data.quoteOfTheDay} />,
    },
    { title: 'My Stacks', content: <StackContent /> },
    { title: 'About Me', content: <AboutContent data={data} /> },
    {
      title: 'My Projects',
      content: (
        <ProjectContent
          projects={data.projects}
          handleModalOpen={handleProjectOpen}
        />
      ),
    },
  ];

  return (
    <>
      <div className="-mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4 md:p-8 w-full">
        {cards.map((card, index) => {
          const isLast = index === cards.length - 1;
          const shouldStretch = isLast;

          return (
            <motion.div
              key={index}
              className={`w-full ${shouldStretch ? 'md:col-span-2' : ''}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.1,
              }} // Adds a stagger effect
            >
              <Card title={card.title}>{card.content}</Card>
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>
        {selectedExperience && (
          <ExperienceModal
            selectedExperience={selectedExperience}
            handleModalClose={handleExperienceClose}
          />
        )}
        {selectedProject && (
          <ProjectModal
            selectedProject={selectedProject}
            handleModalClose={handleProjectClose}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Contents;
