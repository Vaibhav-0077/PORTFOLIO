import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Page Sections
import { Hero } from './sections/Hero';
import { Marquee } from './components/Marquee';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { GithubSection } from './sections/GithubSection';
import { Experience } from './sections/Experience';
import { Credentials } from './sections/Credentials';
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

        {/* Philosophy Intro - 01 */}
        <About />

        {/* Capabilities Grid - 02 */}
        <Services />

        {/* Skill Category Grids - 03 */}
        <Skills />

        {/* Portfolio Showcase - 04 */}
        <Projects />

        {/* GitHub Metrics - 05 */}
        <GithubSection />

        {/* Journey Timeline - 06 */}
        <Experience />

        {/* Certificates & Letters - 07 */}
        <Credentials />

        {/* Contact Form Details - 08 */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
