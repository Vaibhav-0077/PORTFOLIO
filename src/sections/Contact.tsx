import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, FileText, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/constants';
import { SectionHeader } from '../components/SectionHeader';
import { fadeInUp, itemReveal, staggerContainer } from '../utils/animations';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required';
    
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (!form.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      
      if (!accessKey) {
        console.error("Web3Forms API key is missing. Please add VITE_WEB3FORMS_KEY to your .env file.");
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: 'New Contact Form Submission from Portfolio',
          from_name: 'Portfolio Contact Form'
        })
      });

      const json = await response.json();

      if (response.status === 200) {
        setSubmitStatus('success');
        setForm({ name: '', email: '', message: '' }); // reset
      } else {
        console.error("Web3Forms Error:", json);
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error("Network Error:", err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden theme-transition bg-elevated-light/40 dark:bg-[#0C0E12]">
      {/* Background layer */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.012] dark:opacity-[0.015] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <SectionHeader
          number="08 // Contact"
          title="Let's build something"
          highlightText="meaningful."
          subtitle="Have a project concept, backend inquiry, or hiring opportunity? Send a message and let's start talking."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Links & Coordinates */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            className="lg:col-span-5 space-y-8"
          >
            <motion.div variants={itemReveal} className="space-y-2">
              <h3 className="font-display font-bold text-lg text-text-primary-light dark:text-text-primary-dark">
                Reach Out Directly
              </h3>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                Feel free to email me directly or contact me via my professional channels.
              </p>
            </motion.div>

            {/* Coordinate list */}
            <motion.div variants={itemReveal} className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-accent-brand/40 dark:hover:border-accent-brand/40 transition-colors duration-300"
              >
                <div className="p-2.5 rounded-lg bg-accent-brand/10 text-accent-brand">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-text-secondary-light dark:text-text-secondary-dark tracking-wide">
                    Email Address
                  </div>
                  <div className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">
                    {SOCIAL_LINKS.email}
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-accent-brand/40 dark:hover:border-accent-brand/40 transition-colors duration-300"
              >
                <div className="p-2.5 rounded-lg bg-accent-brand/10 text-accent-brand">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-text-secondary-light dark:text-text-secondary-dark tracking-wide">
                    LinkedIn Network
                  </div>
                  <div className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">
                    Connect on LinkedIn
                  </div>
                </div>
              </a>

              {/* Resume */}
              <a
                href={SOCIAL_LINKS.resume}
                download
                className="flex items-center gap-4 p-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-accent-brand/40 dark:hover:border-accent-brand/40 transition-colors duration-300"
              >
                <div className="p-2.5 rounded-lg bg-accent-brand/10 text-accent-brand">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-text-secondary-light dark:text-text-secondary-dark tracking-wide">
                    Curriculum Vitae
                  </div>
                  <div className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">
                    Download resume.pdf
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            className="lg:col-span-7 w-full"
          >
            <div className="relative p-6 sm:p-8 rounded-3xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-xl overflow-hidden">
              
              {/* Form elements */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-bold text-text-primary-light dark:text-text-primary-dark">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.name ? 'border-rose-500/70 focus:ring-rose-500/30' : 'border-border-light dark:border-border-dark focus:border-accent-brand/50 focus:ring-accent-brand/35'
                    } bg-elevated-light dark:bg-elevated-dark text-text-primary-light dark:text-text-primary-dark text-sm placeholder-text-secondary-light/40 dark:placeholder-text-secondary-dark/30 focus:outline-none focus:ring-4 transition-all duration-300`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="text-xs font-semibold text-rose-500 block pt-0.5">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-bold text-text-primary-light dark:text-text-primary-dark">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.email ? 'border-rose-500/70 focus:ring-rose-500/30' : 'border-border-light dark:border-border-dark focus:border-accent-brand/50 focus:ring-accent-brand/35'
                    } bg-elevated-light dark:bg-elevated-dark text-text-primary-light dark:text-text-primary-dark text-sm placeholder-text-secondary-light/40 dark:placeholder-text-secondary-dark/30 focus:outline-none focus:ring-4 transition-all duration-300`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <span className="text-xs font-semibold text-rose-500 block pt-0.5">{errors.email}</span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono font-bold text-text-primary-light dark:text-text-primary-dark">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.message ? 'border-rose-500/70 focus:ring-rose-500/30' : 'border-border-light dark:border-border-dark focus:border-accent-brand/50 focus:ring-accent-brand/35'
                    } bg-elevated-light dark:bg-elevated-dark text-text-primary-light dark:text-text-primary-dark text-sm placeholder-text-secondary-light/40 dark:placeholder-text-secondary-dark/30 focus:outline-none focus:ring-4 transition-all duration-300 resize-none`}
                    placeholder="Hi Vaibhav, I would like to chat about..."
                  />
                  {errors.message && (
                    <span className="text-xs font-semibold text-rose-500 block pt-0.5">{errors.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-accent-brand hover:bg-accent-brand-light text-white font-medium text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md shadow-accent-brand/10 dark:shadow-none hover:shadow-lg disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success / Error Feedback Overlays */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-surface-light dark:bg-surface-dark flex flex-col items-center justify-center p-6 text-center select-none z-20 theme-transition"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', damping: 15 }}
                      className="space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-lg text-text-primary-light dark:text-text-primary-dark">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark max-w-xs mx-auto leading-relaxed">
                          Thank you for reaching out. I have received your details and will get back to you shortly.
                        </p>
                      </div>
                      <button
                        onClick={() => setSubmitStatus('idle')}
                        className="px-5 py-2 rounded-full border border-border-light dark:border-border-dark bg-elevated-light dark:bg-elevated-dark text-text-primary-light dark:text-text-primary-dark text-xs font-semibold cursor-pointer transition-colors duration-300"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-surface-light dark:bg-surface-dark flex flex-col items-center justify-center p-6 text-center select-none z-20 theme-transition"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', damping: 15 }}
                      className="space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto">
                        <AlertCircle className="w-9 h-9" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-lg text-text-primary-light dark:text-text-primary-dark">
                          Something went wrong.
                        </h3>
                        <p className="text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark max-w-xs mx-auto leading-relaxed">
                          We were unable to process your request at this moment. Please check your connection and try again.
                        </p>
                      </div>
                      <button
                        onClick={() => setSubmitStatus('idle')}
                        className="px-5 py-2 rounded-full border border-border-light dark:border-border-dark bg-elevated-light dark:bg-elevated-dark text-text-primary-light dark:text-text-primary-dark text-xs font-semibold cursor-pointer transition-colors duration-300"
                      >
                        Try Again
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
export default Contact;
