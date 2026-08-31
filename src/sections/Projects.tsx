import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, type Project } from '../utils/constants';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { fadeInUp, staggerContainer } from '../utils/animations';

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
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20%' }}
          className="max-w-2xl text-center mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-brand">
            03 // Showcase
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">
            Featured Projects &amp; Case Studies
          </h2>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            A curated selection of applications representing database management, API structures, frontend designs, and custom scripts.
          </p>
        </motion.div>

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
