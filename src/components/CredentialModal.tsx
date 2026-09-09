import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Award, 
  FileSignature, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink
} from 'lucide-react';
import type { CredentialItem } from '../utils/constants';

interface CredentialModalProps {
  credential: CredentialItem | null;
  onClose: () => void;
}

export const CredentialModal: React.FC<CredentialModalProps> = ({ credential, onClose }) => {
  const [copiedId, setCopiedId] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (credential) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [credential, onClose]);

  if (!credential) return null;

  const isDegree = credential.category === 'academic';
  const isInternship = credential.category === 'internship';

  const handleCopyId = () => {
    navigator.clipboard.writeText(credential.credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Certificate Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl rounded-3xl border border-white/20 dark:border-white/10 bg-white dark:bg-[#0E1017] shadow-2xl overflow-hidden z-10 my-auto text-text-primary-light dark:text-text-primary-dark"
        >
          {/* Certificate Header Top Bar */}
          <div className="px-6 py-4 bg-elevated-light/80 dark:bg-[#141722] border-b border-border-light dark:border-[#1E222D] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-text-primary-light dark:text-text-primary-dark">
                Official Credential Verification
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Inner Canvas (High-End Certificate Paper Effect) */}
          <div className="p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-surface-light via-surface-light to-elevated-light dark:from-[#0E1017] dark:via-[#0E1017] dark:to-[#0A0B10]">
            {/* Guilloché / Security Watermark Pattern Overlay */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none" />
            
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-accent-brand/40 pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-accent-brand/40 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent-brand/40 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-accent-brand/40 pointer-events-none" />

            {/* Certificate Body Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              {/* Official Seal Badge Icon */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-accent-brand/20 via-purple-500/20 to-indigo-500/20 border-2 border-accent-brand/40 flex items-center justify-center shadow-lg shadow-accent-brand/10">
                  {isDegree ? (
                    <GraduationCap className="w-8 h-8 text-accent-brand" />
                  ) : isInternship ? (
                    <FileSignature className="w-8 h-8 text-accent-brand" />
                  ) : (
                    <Award className="w-8 h-8 text-accent-brand" />
                  )}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white dark:border-[#0E1017] shadow-sm">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>

              {/* Status & Issuer Eyebrow */}
              <div className="space-y-1">
                <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-accent-brand/10 text-accent-brand border border-accent-brand/20">
                  {credential.status}
                </span>
                <p className="text-xs font-mono text-text-secondary-light dark:text-text-secondary-dark/80 pt-1">
                  Issued by <span className="font-bold text-text-primary-light dark:text-white">{credential.issuer}</span>
                </p>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 max-w-lg">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-text-primary-light dark:text-text-primary-dark tracking-tight leading-snug">
                  {credential.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                  {credential.description}
                </p>
              </div>

              {/* Recipient & Honors Bar */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-elevated-light/80 dark:bg-[#141722] border border-border-light dark:border-[#1E222D] text-left">
                <div>
                  <span className="text-[10px] font-mono text-text-secondary-light/70 dark:text-text-secondary-dark/60 uppercase block">Recipient</span>
                  <span className="text-xs font-bold font-display text-text-primary-light dark:text-text-primary-dark">Vaibhav</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-secondary-light/70 dark:text-text-secondary-dark/60 uppercase block">Timeline</span>
                  <span className="text-xs font-semibold text-text-primary-light dark:text-text-primary-dark">{credential.date}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-secondary-light/70 dark:text-text-secondary-dark/60 uppercase block">Standing / Grade</span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{credential.grade || 'Verified Pass'}</span>
                </div>
              </div>

              {/* Verified Competencies / Skills */}
              <div className="w-full text-left space-y-2.5 pt-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark/70 block">
                  Verified Technical Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {credential.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-light dark:bg-[#161924] border border-border-light dark:border-[#222736] text-text-primary-light dark:text-text-primary-dark shadow-sm flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-accent-brand shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Stamp & ID Bar */}
              <div className="w-full pt-4 border-t border-border-light/60 dark:border-[#1C202B] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-text-secondary-light dark:text-text-secondary-dark/70">ID:</span>
                  <code className="text-xs font-mono font-bold text-accent-brand px-2 py-0.5 rounded bg-accent-brand/5 border border-accent-brand/20">
                    {credential.credentialId}
                  </code>
                  <button
                    onClick={handleCopyId}
                    className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary-light dark:text-text-secondary-dark cursor-pointer transition-colors"
                    title="Copy Credential ID"
                  >
                    {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    Verified On-Chain / Ledger
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="px-6 py-4 bg-elevated-light/80 dark:bg-[#141722] border-t border-border-light dark:border-[#1E222D] flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-border-light dark:border-[#222634] bg-surface-light dark:bg-[#161922] text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light text-xs font-mono font-medium transition-colors cursor-pointer"
            >
              Close Preview
            </button>
            {credential.link && credential.link !== '#' && (
              <a
                href={credential.link}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-accent-brand hover:bg-accent-brand-light text-white text-xs font-mono font-semibold flex items-center gap-2 transition-all shadow-md shadow-accent-brand/10 cursor-pointer"
              >
                <span>View Original File</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
