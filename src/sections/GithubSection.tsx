import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { GithubStats } from '../components/GithubStats';

export const GithubSection: React.FC = () => {
  return (
    <section id="github" className="py-24 relative overflow-hidden theme-transition bg-elevated-light/40 dark:bg-[#0C0E12]">
      {/* Background layer */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.012] dark:opacity-[0.015] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          number="05 // GitHub"
          title="Open Source &"
          highlightText="Contributions"
          subtitle="A live overview of my open-source activity, repositories, and coding consistency over the past year."
        />

        <div className="mt-8">
          <GithubStats />
        </div>
      </div>
    </section>
  );
};
