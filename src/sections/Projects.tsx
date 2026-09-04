import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, type Project } from '../utils/constants';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { SectionHeader } from '../components/SectionHeader';
import { staggerContainer } from '../utils/animations';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden theme-transition">
      {/* Background layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <SectionHeader
          number="04 // Showcase"
          title="Featured Projects &"
          highlightText="Case Studies"
          subtitle="A curated selection of applications representing database management, API structures, frontend designs, and custom scripts."
        />

        {/* Project Layout Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={handleOpenModal}
            />
          ))}
        </motion.div>
      </div>

      {/* Case Study Detail Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
export default Projects;
