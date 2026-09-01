import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Page Sections
import { Hero } from './sections/Hero';
import { Marquee } from './components/Marquee';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      {/* Absolute Noise Overlay globally on top */}
      <div className="fixed inset-0 bg-noise opacity-[0.015] dark:opacity-[0.02] pointer-events-none z-30" />
      
      {/* Custom Follower Cursor */}
      <CustomCursor />

      {/* Sticky Header Nav */}
      <Navbar />

      {/* Main Sections Wrapper */}
      <main className="relative w-full z-10 overflow-hidden">
        {/* Hero Landing */}
        <Hero />

        {/* Infinite Scrolling Ticker */}
        <Marquee />

        {/* Philosophy Intro */}
        <About />

        {/* Skill Category Grids */}
        <Skills />

        {/* Portfolio Showcase */}
        <Projects />

        {/* Capabilities Grid */}
        <Services />

        {/* Journey Timeline */}
        <Experience />

        {/* Contact Form Details */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
