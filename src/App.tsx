import React, { useState, useRef } from 'react';
import myImage from '../images/profile-pic (37).png';
import communitycoinimg from '../images/Communitycoin.png';
import farmziimg from '../images/farmzi.jpeg';
import artisanalchainimg from '../images/Artisanalchian.png';
import eventdappimg from '../images/Eventdapp.png';
import uiuximg from '../images/UIUX.avif';
import javaspringimg from '../images/javaspringimg.png';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';
import { SkillCard } from './components/SkillCard';
import ContactForm from './components/ContactForm';
import { GraduationCap, Award, Languages, LayoutDashboard, Send, Link2 } from 'lucide-react';
import { Menu, Moon, Sun, Github, Linkedin, Bean as Behance, Mail, Phone, Download, Code, Cloud, Leaf, FileCode, Palette, Atom, PenTool, GitBranch, Database, Landmark } from 'lucide-react';

function MyComponent() {
  return <img src={myImage} alt="Description" className="w-32 h-32" />;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSkillCategory, setOpenSkillCategory] = useState<string | null>('Frontend');
  const [openProjectCategory, setOpenProjectCategory] = useState<string | null>('Frontend');
  // Parallax state
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  // Mouse-follow glow state
  const [glowPos, setGlowPos] = useState({ x: 0.5, y: 0.5 });
  // Sound ref
  const popSoundRef = useRef<HTMLAudioElement>(null);
  // Add nav tap sound ref
  const navTapSoundRef = useRef<HTMLAudioElement>(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleAccordion = (category: string) => {
    setOpenSkillCategory(openSkillCategory === category ? null : category);
  };
  const toggleProjectAccordion = (category: string) => {
    setOpenProjectCategory(openProjectCategory === category ? null : category);
  };

  // Parallax mouse move handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMouse({ x, y });
  };

  // Mouse-follow glow handler for profile image
  const handleProfileMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setGlowPos({ x, y });
  };
  const handleProfileMouseLeave = () => setGlowPos({ x: 0.5, y: 0.5 });

  // Play sound on button click
  const playPopSound = () => {
    if (popSoundRef.current) {
      popSoundRef.current.currentTime = 0;
      popSoundRef.current.play();
    }
  };

  // Play nav tap sound
  const playNavTapSound = () => {
    if (navTapSoundRef.current) {
      navTapSoundRef.current.currentTime = 0;
      navTapSoundRef.current.play();
    }
  };

  // Parallax transforms
  const blob1Style = {
    transform: `translateY(${-30 + mouse.y * 60}px) translateX(${-20 + mouse.x * 40}px) scale(1.1)`
  };
  const blob2Style = {
    transform: `translateX(${20 - mouse.x * 40}px) translateY(${-10 + mouse.y * 20}px) scale(1.05)`
  };
  const blob3Style = {
    transform: `translateY(${10 - mouse.y * 20}px) translateX(${10 - mouse.x * 20}px) scale(1.08)`
  };
  // Sparkle parallax (slight movement)
  const sparkleParallax = (i: number) => ({
    transform: `translate(${(mouse.x - 0.5) * 30 * ((i % 3) - 1)}px, ${(mouse.y - 0.5) * 30 * ((i % 2) ? 1 : -1)}px)`
  });
  // Glow style for profile image
  const glowStyle = {
    left: `${glowPos.x * 100}%`,
    top: `${glowPos.y * 100}%`,
    transform: 'translate(-50%, -50%)',
    background: 'radial-gradient(circle at center, #f472b6 0%, #60a5fa 60%, transparent 100%)',
    opacity: 0.5
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 glass-navbar shadow-xl transition-all backdrop-blur-lg
        ${darkMode ? 'bg-slate-800/80 border-b border-indigo-900' : 'bg-white/70 border-b border-indigo-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src={myImage} alt="Profile" className="w-10 h-10 rounded-full border border-indigo-200 shadow-md" />
              <h1 className="text-xl font-bold ml-3 text-indigo-600 dark:text-pink-400">Arun Kumar L</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link" onClick={playNavTapSound}>Home</a>
              <a href="#about" className="nav-link" onClick={playNavTapSound}>About</a>
              <a href="#projects" className="nav-link" onClick={playNavTapSound}>Projects</a>
              <a href="#skills" className="nav-link" onClick={playNavTapSound}>Skills</a>
              <a href="#contact" className="nav-link" onClick={playNavTapSound}>Contact</a>
              <button onClick={toggleDarkMode} className="btn-outline ml-2">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="p-2">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
        {/* Audio for nav tap sound */}
        <audio ref={navTapSoundRef} src={`${import.meta.env.BASE_URL}nav-tap.mp3`} preload="auto" />
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 ${darkMode ? 'bg-slate-800/90' : 'bg-white/90'}`}> 
            <a href="#home" className="block px-3 py-2 nav-link" onClick={playNavTapSound}>Home</a>
            <a href="#about" className="block px-3 py-2 nav-link" onClick={playNavTapSound}>About</a>
            <a href="#projects" className="block px-3 py-2 nav-link" onClick={playNavTapSound}>Projects</a>
            <a href="#skills" className="block px-3 py-2 nav-link" onClick={playNavTapSound}>Skills</a>
            <a href="#contact" className="block px-3 py-2 nav-link" onClick={playNavTapSound}>Contact</a>
          </div>
        </div>
      )}

      <section 
  id="home" 
  className={`relative pt-20 min-h-screen flex items-center justify-center text-center overflow-hidden animate-gradient-bg 
              ${darkMode 
                ? 'bg-gradient-to-br from-[#232526] via-[#414345] to-[#232526]'  // Dark Mode
                : 'bg-gradient-to-br from-pink-200 via-blue-100 to-yellow-100'} // Light Mode
              `}
  onMouseMove={handleMouseMove}
>
  {/* Animated Blobs with Parallax */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
    <span className="absolute left-10 top-10 w-60 h-60 bg-pink-300 opacity-40 rounded-full filter blur-3xl animate-blob1" style={blob1Style} />
    <span className="absolute right-10 top-32 w-72 h-72 bg-blue-300 opacity-30 rounded-full filter blur-3xl animate-blob2" style={blob2Style} />
    <span className="absolute left-1/2 bottom-0 w-80 h-80 bg-yellow-200 opacity-30 rounded-full filter blur-3xl animate-blob3" style={blob3Style} />
  </div>
  {/* Sparkle/Particle Animation Overlay with Parallax */}
  <div className="pointer-events-none absolute inset-0 z-20 animate-sparkle-bg">
    {[...Array(18)].map((_,i) => (
      <span key={i} className={`sparkle sparkle-${i+1}`} style={sparkleParallax(i)} />
    ))}
  </div>
  <div className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center py-14 shadow-2xl transition-all glass-card
    ${darkMode ? 'dark' : ''} ${darkMode ? 'bg-gray-900/80 text-white' : 'bg-white/70 text-gray-900 border border-blue-100'}`}>
    {/* Animated Ring Behind Profile Image */}
    <div className="relative mb-6 animate-fade-in-up" onMouseMove={handleProfileMouseMove} onMouseLeave={handleProfileMouseLeave}>
      <span className="profile-ring absolute inset-0 m-auto" />
      {/* Mouse-follow Glow */}
      <span className="profile-glow" style={{...glowStyle, position: 'absolute', width: '120%', height: '120%', borderRadius: '50%', pointerEvents: 'none', zIndex: 2}} />
      <img src={myImage} alt="Profile" className="w-36 h-36 rounded-full border-4 border-blue-300 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-glow relative z-10" />
    </div>
    {/* Heading */}
    <h4 className={`text-2xl md:text-4xl mb-3 font-semibold tracking-wide animate-fade-in-up delay-100 ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
      Hi, I'M
    </h4>
    <h1 className="text-4xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-gradient-text animate-fade-in-up delay-200 drop-shadow-lg">
      ARUN KUMAR L
    </h1>
    {/* Animated Subtitle/Intro */}
    <div className="mb-4 animate-fade-in-up delay-250">
      <span className="subtitle-anim text-lg md:text-xl font-medium text-blue-500 dark:text-pink-300">Turning ideas into delightful digital experiences</span>
    </div>
    <h5 className="text-2xl md:text-3xl mb-6 font-bold tracking-tight animate-typewriter bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
      Front-End Developer & Aspiring Full Stack Engineer  
    </h5>
    <p className={`text-xl mb-8 font-medium animate-fade-in-up delay-300 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Crafting clean, interactive, and intelligent web experiences.</p>
    {/* Buttons */}
    <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
      <a href="#contact" className="btn-primary btn-hero btn-ripple dark:btn-primary" onClick={playPopSound}>Contact Me</a>
      <a 
        href={`${import.meta.env.BASE_URL}Resume.pdf`} 
        download="Arun_Kumar_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline btn-hero btn-ripple dark:btn-outline"
        aria-label="Download Arun Kumar's Resume"
        onClick={playPopSound}
      >
        Download Resume
      </a>
    </div>
    {/* Audio for button sound */}
    <audio ref={popSoundRef} src={`${import.meta.env.BASE_URL}pop.mp3`} preload="auto" />
  </div>
  {/* Scroll Down Indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center animate-fade-in-up delay-500">
    <span className="scroll-indicator mb-1" />
    <span className="text-xs text-blue-500 dark:text-pink-300 font-semibold tracking-wide">Scroll Down</span>
  </div>
</section>


      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          {/* First row: Profile | About */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Profile Image */}
             <img
              src={myImage}
              alt="Profile"
              className="rounded-lg shadow-lg w-100 h-100 object-cover mx-auto md:mx-0 transition-all"
              />
            {/* About Content */}
            <div className={`p-6 rounded-2xl border shadow-lg transition-all w-full
              ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}>  
              <div className="flex items-center gap-2 mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border transition-colors
                  ${darkMode ? 'bg-gray-700 text-blue-200 border-gray-600' : 'bg-blue-100 text-blue-700 border-blue-200'}`}>About</span>
            </div>
            <p className="text-lg mb-4">
                Hello! I'm Arunkumar, a passionate Frontend Developer & Learning Full Stack and Computer Science Engineering student (3rd year) with a solid foundation in HTML, CSS, JavaScript, React.js, and Tailwind CSS.
              </p>
              <p className="text-lg mb-4">
                Over the past few months, I've expanded my skill set beyond frontend to explore full stack development, AI integration using OpenAI APIs, and smart contract development on Ethereum using Solidity. I've built real-time, user-focused projects including an AI-powered travel CRM (TripXplo) and two decentralized applications on the Sepolia testnet.
              </p>
              <p className="text-lg mb-4">
              I also enjoy UI/UX design and have created interfaces for apps like Farmzi (a farmer-focused app), WhatsApp tab mockups, and e-commerce style guides using Figma.
              </p>
              <p className="text-lg mb-4">
              In addition, I have hands-on experience with Python for data analysis using libraries like NumPy and Pandas, and a solid understanding of SQL for database management and backend logic.
              </p>
              <p className="text-lg mb-0">
              I'm currently open to internship opportunities where I can apply my growing skill set, gain industry experience, and contribute to building meaningful, innovative tech solutions.
              </p>
            </div>
          </div>

          {/* Second row: Tech, Tools, Skills (full width, as three cards in a row on desktop) */}
          <div className="grid md:grid-cols-3 gap-6 w-full">
            {/* Tech Stack */}
            <div className={`p-6 rounded-2xl border shadow-lg transition-all w-full
              ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}> 
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border transition-colors
                  ${darkMode ? 'bg-gray-700 text-blue-200 border-gray-600' : 'bg-blue-100 text-blue-700 border-blue-200'}`}>Tech Stack</span>
                <Code className="ml-1 text-blue-500" size={20} />
              </div>
              <ul className="list-disc list-inside ml-2 text-base space-y-1">
                <li><span className="font-semibold">Frontend:</span> HTML, CSS, JavaScript, React.js, Tailwind CSS, Flutter</li>
                <li><span className="font-semibold">Backend (Learning):</span> Node.js, Supabase,Spring Boot(Java)</li>
                <li><span className="font-semibold">Database:</span> SQL</li>
                <li><span className="font-semibold">Design Tools:</span> Figma</li>
                <li><span className="font-semibold">Others:</span> Git & GitHub,Java, Python (Pandas, NumPy), OpenAI API, Solidity</li>
              </ul>
            </div>
            {/* Tools & Platforms */}
            <div className={`p-6 rounded-2xl border shadow-lg transition-all w-full
              ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}> 
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border transition-colors
                  ${darkMode ? 'bg-gray-700 text-green-200 border-green-700' : 'bg-green-100 text-green-700 border-green-200'}`}>Tools & Platforms</span>
                <Cloud className="ml-1 text-green-500" size={20} />
              </div>
              <ul className="list-disc list-inside ml-2 text-base space-y-1">
                <li>VS Code, Cursor, IntelliJ, Windsurf</li>
                <li>Git & GitHub</li>
                <li>Vercel</li>
                <li>Postman</li>
                <li>Supabase</li>
                <li>Figma</li>
                <li>Remix-Solidity</li>
                <li>Colab</li>
              </ul>
            </div>
            {/* Soft Skills */}
            <div className={`p-6 rounded-2xl border shadow-lg transition-all w-full
              ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}> 
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border transition-colors
                  ${darkMode ? 'bg-gray-700 text-yellow-200 border-yellow-700' : 'bg-yellow-100 text-yellow-700 border-yellow-200'}`}>Soft Skills</span>
                <Leaf className="ml-1 text-yellow-500" size={20} />
              </div>
              <ul className="list-disc list-inside ml-2 text-base space-y-1">
                <li>Team collaboration</li>
                <li>Self-learning</li>
                <li>UI intuition</li>
                <li>Creative problem-solving</li>
              </ul>
            </div>
          </div>

          {/* Third row: Education, Certificates, Languages (full width) */}
          <div className={`p-6 rounded-2xl border shadow-lg w-full transition-all ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200'}`}>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="text-blue-500" size={28} />
                <h3 className="font-bold text-xl">Education</h3>
              </div>
              <div className="mb-4 pl-2 border-l-4 border-blue-300 dark:border-blue-700 flex flex-col gap-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold text-lg mb-0">University College of Engineering, Kanchipuram</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border transition-colors
                    ${darkMode ? 'bg-gray-700 text-blue-200 border-gray-600' : 'bg-blue-100 text-blue-700 border-blue-200'}`}>2022 – 2026</span>
                </div>
                <p className="text-base">B.Tech – Computer Science and Engineering</p>
                {/* <p className="text-sm text-gray-500">CGPA: [Add if available, optional]</p> */}
                <p className="text-sm text-gray-500">Relevant Courses: Data Structures, Algorithms, DBMS, AIML, UI/UX Design, BLOCKCHAIN,</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6 mb-2">
              <Award className="text-green-500" size={24} />
              <h3 className="font-bold text-lg">Certificates</h3>
            </div>
            <div className="space-y-4">
              {/* Certificate 1 */}
              <div className={`rounded-lg p-4 border-l-4 shadow-sm transition-all ${darkMode ? 'bg-gray-800 border-green-600' : 'bg-white border-green-400 border border-green-100'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 px-2 py-0.5 rounded-full text-xs font-semibold border border-green-200 dark:border-green-700">30 Days</span>
                  <span className="font-semibold">🏆 Full Stack Web Development Internship – Novitech Pvt Ltd</span>
                  <a
                    href={`${import.meta.env.BASE_URL}FullStack_Internship_Certificate.pdf`} 
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-2 py-1 rounded bg-blue-500 text-white text-xs font-semibold hover:bg-blue-600 transition"
                  >
                    View Certificate
                  </a>
                </div>
                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Worked on basic web apps and mini-projects using HTML, CSS, JavaScript, and React.js. Gained hands-on experience in responsive UI design, component-based development, and Git-based version control.</p>
                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Projects included: ToDo App, Weather App,Text to Speech App, and a Netflix & E-Commerce Interface Clone.</p>
              </div>
              {/* Certificate 2 */}
              <div className={`rounded-lg p-4 border-l-4 shadow-sm transition-all ${darkMode ? 'bg-gray-800 border-blue-600' : 'bg-white border-blue-400 border border-blue-100'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded-full text-xs font-semibold border border-blue-200 dark:border-blue-700">3 Days</span>
                  <span className="font-semibold">🏆 Flutter Development Webinar Certificate</span>
                  <a
                    href={`${import.meta.env.BASE_URL}Flutter_Certificate.pdf`} 
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-2 py-1 rounded bg-blue-500 text-white text-xs font-semibold hover:bg-blue-600 transition"
                  >
                    View Certificate
                  </a>
                </div>
                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Attended an introductory webinar focused on cross-platform mobile app development using Flutter. Learned about Dart syntax, widget-based UI structure, and building simple interfaces for both Android and iOS platforms.</p>
                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Projects included: ToDo App, Calculator, and a Swiggy Interface Clone.</p>
              </div>
              {/* Certificate 3 */}
              <div className={`rounded-lg p-4 border-l-4 shadow-sm transition-all ${darkMode ? 'bg-gray-800 border-purple-600' : 'bg-white border-purple-400 border border-purple-100'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 px-2 py-0.5 rounded-full text-xs font-semibold border border-purple-200 dark:border-purple-700">NPTEL</span>
                  <span className="font-semibold">🏆Introduction to Machine Learning-Certified by IIT Madras</span>
                  <a
                    href={`${import.meta.env.BASE_URL}Introduction_to_Machine_Learning_Certificate(NPTEL).pdf`} 
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-2 py-1 rounded bg-blue-500 text-white text-xs font-semibold hover:bg-blue-600 transition"
                  >
                    View Certificate
                  </a>
                </div>
                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Successfully completed the Introduction to Machine Learning course offered by NPTEL, IIT Madras.</p>
                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Gained strong foundational knowledge in ML concepts like supervised/unsupervised learning, SVM, k-NN, Naive Bayes, and evaluation metrics through weekly assignments and lectures by IIT faculty.</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-8 mb-2">
              <Languages className="text-purple-500" size={22} />
              <h3 className="font-bold text-lg">Languages</h3>
            </div>
            <div className="flex gap-4 pl-2">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border transition-colors
                ${darkMode ? 'bg-gray-700 text-purple-200 border-purple-700' : 'bg-purple-100 text-purple-700 border-purple-200'}`}>Tamil</span>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border transition-colors
                ${darkMode ? 'bg-gray-700 text-purple-200 border-purple-700' : 'bg-purple-100 text-purple-700 border-purple-200'}`}>English</span>
              </div>
          </div>
        </div>
      </section>

      <Section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
  <h2 className="text-3xl font-bold mb-8">Projects</h2>
  <div className={`p-6 rounded-2xl border shadow-lg transition-all w-full mb-8
    ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}
  >
    {/* Accordion: Frontend */}
    <button
      className={`w-full flex items-center justify-between py-4 px-2 text-left font-bold text-xl rounded-lg transition-colors focus:outline-none mb-2 ${openProjectCategory === 'Frontend' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100') : ''}`}
      onClick={() => toggleProjectAccordion('Frontend')}
      aria-expanded={openProjectCategory === 'Frontend'}
      aria-controls="frontend-projects-panel"
    >
      <span className="flex items-center gap-2">🖥️ Frontend</span>
      <span className={`transform transition-transform ${openProjectCategory === 'Frontend' ? 'rotate-90' : ''}`}>▶</span>
    </button>
    {openProjectCategory === 'Frontend' && (
      <div id="frontend-projects-panel" className="mb-4 animate-fade-in">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          
          {/* Netflix Clone */}
          <div className={`p-6 rounded-2xl border shadow-lg transition-all group hover:scale-105 hover:shadow-2xl cursor-pointer
            ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}>
            <img src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80" alt="Netflix Clone" className="w-full h-48 object-cover rounded-xl mb-4 shadow" />
            <h3 className="text-xl font-bold mb-2">Netflix Clone</h3>
            <p className="mb-4 text-base">A responsive Netflix clone built with HTML, CSS, and JavaScript</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">HTML</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">CSS</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">JavaScript</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://frontend-basic-projects-xi.vercel.app/Day%205%20(Develop%20a%20Realtime%20NETFLIX%20Website)/html/index.html" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="Live Demo">🔗</span> Live Demo
              </a>
              <a href="https://github.com/ARUN-L-KUMAR/frontend-basic-projects/tree/main/Day%205%20(Develop%20a%20Realtime%20NETFLIX%20Website)" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="GitHub">📂</span> GitHub
              </a>
            </div>
          </div>
          {/* Weather Forecasting App */}
          <div className={`p-6 rounded-2xl border shadow-lg transition-all group hover:scale-105 hover:shadow-2xl cursor-pointer
            ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}>
            <img src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80" alt="Weather Forecasting App" className="w-full h-48 object-cover rounded-xl mb-4 shadow" />
            <h3 className="text-xl font-bold mb-2">Weather Forecasting App</h3>
            <p className="mb-4 text-base">Real-time weather app using OpenWeatherMap API</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">REACT</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">API</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">JS</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://frontend-basic-projects-xi.vercel.app/Day%209%20(Develop%20a%20Weather%20Application)/html/index.html" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="Live Demo">🔗</span> Live Demo
              </a>
              <a href="https://github.com/ARUN-L-KUMAR/frontend-basic-projects/tree/main/Day%209%20(Develop%20a%20Weather%20Application)" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="GitHub">📂</span> GitHub
              </a>
            </div>
          </div>
          {/* Text to Speech Project */}
          <div className={`p-6 rounded-2xl border shadow-lg transition-all group hover:scale-105 hover:shadow-2xl cursor-pointer
            ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}>
            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80" alt="Text to Speech" className="w-full h-48 object-cover rounded-xl mb-4 shadow" />
            <h3 className="text-xl font-bold mb-2">Text to Speech</h3>
            <p className="mb-4 text-base">A simple web app that converts typed text into speech using the Web Speech API.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">HTML</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">CSS</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">JavaScript</span>
            </div>
            <div className="flex gap-4 mt-2">
            <a href="https://frontend-basic-projects-xi.vercel.app/Day%2010%20(Develop%20a%20Text%20To%20Speech%20Application)/HTML%20&%20JS/index.html" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="Live Demo">🔗</span> Live Demo
              </a>
              <a href="https://github.com/ARUN-L-KUMAR/frontend-basic-projects/tree/main/Day%2010%20(Develop%20a%20Text%20To%20Speech%20Application)" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="GitHub">📂</span> GitHub
              </a>
            </div>
          </div>
          
          {/* Frontend Mini Projects */}
          <div className={`p-6 rounded-2xl border shadow-lg transition-all group hover:scale-105 hover:shadow-2xl cursor-pointer
            ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}>
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="Frontend Mini Projects" className="w-full h-48 object-cover rounded-xl mb-4 shadow" />
            <h3 className="text-xl font-bold mb-2">Other Mini Projects</h3>
            <p className="mb-4 text-base">A collection of 10+ mini frontend projects (HTML, CSS, JS) including E-Commerce, Blog, Weather App, To-Do, and more.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">HTML</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">CSS</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">JavaScript</span>
              </div>
            <div className="flex gap-4 mt-2">
              <a href="https://frontend-basic-projects-xi.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="Live Demo">🔗</span> Live Demo
              </a>
              <a href="https://github.com/ARUN-L-KUMAR/frontend-basic-projects" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="GitHub">📂</span> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
    {/* Accordion: UI & UX */}
    <button
      className={`w-full flex items-center justify-between py-4 px-2 text-left font-bold text-xl rounded-lg transition-colors focus:outline-none mb-2 ${openProjectCategory === 'UIUX' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100') : ''}`}
      onClick={() => toggleProjectAccordion('UIUX')}
      aria-expanded={openProjectCategory === 'UIUX'}
      aria-controls="uiux-projects-panel"
    >
      <span className="flex items-center gap-2">🎨 UI & UX</span>
      <span className={`transform transition-transform ${openProjectCategory === 'UIUX' ? 'rotate-90' : ''}`}>▶</span>
    </button>
    {openProjectCategory === 'UIUX' && (
      <div id="uiux-projects-panel" className="mb-4 animate-fade-in">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* UI & UX Design Project */}
          <div className={`p-6 rounded-2xl border shadow-lg transition-all group hover:scale-105 hover:shadow-2xl cursor-pointer
            ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}>
            <img src={uiuximg} alt="UI & UX Design" className="w-full h-48 object-cover rounded-xl mb-4 shadow" />
            <h3 className="text-xl font-bold mb-2">UI & UX Design</h3>
            <p className="mb-4 text-base">Designed interfaces including Instagram feed, WhatsApp tabs, e-commerce style guides, color palettes, moodboards, and wireframes for food delivery apps.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 border border-purple-200">Figma</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-pink-100 text-pink-700 border border-pink-200">UI Design</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">Wireframing</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">Color</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">Moodboard</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://www.figma.com/team_invite/redeem/c0SyKmzUp8Wn8BDzefcSYD" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="Figma">🎨</span> Figma
              </a>
            </div>
          </div>
          {/* Agritech App UI */}
          <div className={`p-6 rounded-2xl border shadow-lg transition-all group hover:scale-105 hover:shadow-2xl cursor-pointer
            ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}>
            <img src={farmziimg} alt="Artisanchain" className="w-full h-48 object-cover rounded-xl mb-4 shadow w-full h-48 object-cover rounded-xl mb-4 shadow" />
            <h3 className="text-xl font-bold mb-2">Agritech App UI</h3>
            <p className="mb-4 text-base">Modern UI design for an agriculture technology platform</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 border border-purple-200">Figma</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-pink-100 text-pink-700 border border-pink-200">UI Design</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">Wireframing</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://www.figma.com/design/ia5hbZcONSSHvNDloimV6y/Farmzi-UI?node-id=0-1&t=VryHfCWMPQKQqgQO-1" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="Figma">🎨</span> Figma
              </a>
              {/* <a href="https://github.com/arun-l-kumar/agritech-ui" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="GitHub">📂</span> GitHub
              </a> */}
              {/* <a href="https://www.notion.so/your-notion-case-study" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="Notion">📝</span> Case Study
              </a> */}
            </div>
          </div>
        </div>
      </div>
    )}
    {/* Accordion: Blockchain */}
    <button
      className={`w-full flex items-center justify-between py-4 px-2 text-left font-bold text-xl rounded-lg transition-colors focus:outline-none mb-2 ${openProjectCategory === 'Blockchain' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100') : ''}`}
      onClick={() => toggleProjectAccordion('Blockchain')}
      aria-expanded={openProjectCategory === 'Blockchain'}
      aria-controls="blockchain-projects-panel"
    >
      <span className="flex items-center gap-2">🔗 Blockchain</span>
      <span className={`transform transition-transform ${openProjectCategory === 'Blockchain' ? 'rotate-90' : ''}`}>▶</span>
    </button>
    {openProjectCategory === 'Blockchain' && (
      <div id="blockchain-projects-panel" className="mb-4 animate-fade-in">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Blockchain Project */}
          <div className={`p-6 rounded-2xl border shadow-lg transition-all group hover:scale-105 hover:shadow-2xl cursor-pointer
            ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}>
            <img src={communitycoinimg} alt="CommunityCoin DApp" className="w-full h-48 object-cover rounded-xl mb-4 shadow" />
            <h3 className="text-xl font-bold mb-2">CommunityCoin DApp</h3>
            <p className="mb-4 text-base">A decentralized application for community token management on Ethereum Sepolia testnet.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">Solidity</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">Ethers.js</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">Hardhat</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://communitycoin.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="Live Demo">🔗</span> Live Demo
              </a>
              <a href="https://github.com/ARUN-L-KUMAR/CBT-TASK-3.git" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="GitHub">📂</span> GitHub
              </a>
            </div>
          </div>
          {/* Artisanchain Project */}
          <div className={`p-6 rounded-2xl border shadow-lg transition-all group hover:scale-105 hover:shadow-2xl cursor-pointer
            ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}>
            <img src={artisanalchainimg} className="w-full h-48 object-cover rounded-xl mb-4 shadow" />
            <h3 className="text-xl font-bold mb-2">Artisanchain</h3>
            <p className="mb-4 text-base">A DApp for certifying and tracking provenance of artisanal goods on Ethereum. Features NFT minting, IPFS storage, and a marketplace for local artisans.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">Solidity</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">Ethers.js</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">Hardhat</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 border border-purple-200">IPFS</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://artisanalchain.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="Live Demo">🔗</span> Live Demo
              </a>
              <a href="https://github.com/ARUN-L-KUMAR/CBT-TASK-1.git" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="GitHub">📂</span> GitHub
              </a>
            </div>
          </div>
          {/* EventDapp Project */}
          <div className={`p-6 rounded-2xl border shadow-lg transition-all group hover:scale-105 hover:shadow-2xl cursor-pointer
            ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}>
            <img src={eventdappimg} className="w-full h-48 object-cover rounded-xl mb-4 shadow" />
            <h3 className="text-xl font-bold mb-2">EventDapp</h3>
            <p className="mb-4 text-base">A blockchain-based event ticketing DApp with NFT tickets, decentralized verification, and a modern React frontend.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">Solidity</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">Ethers.js</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">Hardhat</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-pink-100 text-pink-700 border border-pink-200">NFT</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://evt-tix.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="Live Demo">🔗</span> Live Demo
              </a>
              <a href="https://github.com/ARUN-L-KUMAR/EvtTicket.git" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="GitHub">📂</span> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
    {/* Accordion: Datascience */}
    <button
      className={`w-full flex items-center justify-between py-4 px-2 text-left font-bold text-xl rounded-lg transition-colors focus:outline-none mb-2 ${openProjectCategory === 'Datascience' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100') : ''}`}
      onClick={() => toggleProjectAccordion('Datascience')}
      aria-expanded={openProjectCategory === 'Datascience'}
      aria-controls="datascience-projects-panel"
    >
      <span className="flex items-center gap-2">📊 Other Project</span>
      <span className={`transform transition-transform ${openProjectCategory === 'Datascience' ? 'rotate-90' : ''}`}>▶</span>
    </button>
    {openProjectCategory === 'Datascience' && (
      <div id="datascience-projects-panel" className="mb-4 animate-fade-in">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Datascience Project */}
          <div className={`p-6 rounded-2xl border shadow-lg transition-all group hover:scale-105 hover:shadow-2xl cursor-pointer
            ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Data Analysis Project" className="w-full h-48 object-cover rounded-xl mb-4 shadow" />
            <h3 className="text-xl font-bold mb-2">Data Science & Analysis Basics</h3>
            <p className="mb-4 text-base">Exploratory data analysis using Python, Pandas, and Matplotlib.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">Python</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">Pandas</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">Matplotlib</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/ARUN-L-KUMAR/DATA-SCIENCE-.git" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="GitHub">📂</span> GitHub
              </a>
              {/* <a href="https://www.notion.so/your-datascience-case-study" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="Notion">📝</span> Case Study
              </a> */}
            </div>
          </div>
          <div className={`p-6 rounded-2xl border shadow-lg transition-all group hover:scale-105 hover:shadow-2xl cursor-pointer
            ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}>
            <img src={javaspringimg} alt="Data Analysis Project" className="w-full h-48 object-cover rounded-xl mb-4 shadow" />
            <h3 className="text-xl font-bold mb-2">Java With Spring Boot</h3>
            <p className="mb-4 text-base">For building scalable and efficient backend services and REST APIs.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">Java</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">Spring Boot</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">Rest API</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/ARUN-L-KUMAR/NM.git" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="GitHub">📂</span> GitHub
              </a>
              {/* <a href="https://www.notion.so/your-datascience-case-study" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 font-medium">
                <span role="img" aria-label="Notion">📝</span> Case Study
              </a> */}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
</Section>
{/* Skills Section */}
<Section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
  <h2 className="text-3xl font-bold mb-8">Skills</h2>
  <div className={`p-6 rounded-2xl border shadow-lg transition-all w-full mb-8
    ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}
  >
    {/* Accordion: Frontend */}
    <button
      className={`w-full flex items-center justify-between py-4 px-2 text-left font-bold text-xl rounded-lg transition-colors focus:outline-none mb-2 ${openSkillCategory === 'Frontend' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100') : ''}`}
      onClick={() => toggleAccordion('Frontend')}
      aria-expanded={openSkillCategory === 'Frontend'}
      aria-controls="frontend-panel"
    >
      <span className="flex items-center gap-2"><Code className="text-blue-500" size={20}/> Frontend</span>
      <span className={`transform transition-transform ${openSkillCategory === 'Frontend' ? 'rotate-90' : ''}`}>▶</span>
    </button>
    {openSkillCategory === 'Frontend' && (
      <div id="frontend-panel" className="mb-4 animate-fade-in">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          <SkillCard title="HTML & CSS" level={70} icon={<FileCode />} darkMode={darkMode} />
          <SkillCard title="JavaScript" level={50} icon={<FileCode />} darkMode={darkMode} />
          <SkillCard title="React.js" level={45} icon={<Atom />} darkMode={darkMode} />
          <SkillCard title="Tailwind CSS" level={50} icon={<Palette />} darkMode={darkMode} />
          <SkillCard title="Responsive Design" level={60} icon={<Cloud />} darkMode={darkMode} />
        </div>
      </div>
    )}
    {/* Accordion: Backend / Full Stack */}
    <button
      className={`w-full flex items-center justify-between py-4 px-2 text-left font-bold text-xl rounded-lg transition-colors focus:outline-none mb-2 ${openSkillCategory === 'Backend' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100') : ''}`}
      onClick={() => toggleAccordion('Backend')}
      aria-expanded={openSkillCategory === 'Backend'}
      aria-controls="backend-panel"
    >
      <span className="flex items-center gap-2"><Cloud className="text-green-500" size={20}/> Backend / Full Stack (Learning)</span>
      <span className={`transform transition-transform ${openSkillCategory === 'Backend' ? 'rotate-90' : ''}`}>▶</span>
    </button>
    {openSkillCategory === 'Backend' && (
      <div id="backend-panel" className="mb-4 animate-fade-in">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          <SkillCard title="Node.js & SpingBoot(Java)" level={30} icon={<Leaf />} darkMode={darkMode} />
          <SkillCard title="Supabase & PostMan" level={35} icon={<Send />} darkMode={darkMode} />
          <SkillCard title="SQL / MySQL" level={50} icon={<Database />} darkMode={darkMode} />
          <SkillCard title="API & RESTAPI" level={30} icon={<Link2 />} darkMode={darkMode} />
          <SkillCard title="Prompt Engineering" level={45} icon={<Cloud />} darkMode={darkMode} />
          
        </div>
      </div>
    )}
    {/* Accordion: Tools */}
    <button
      className={`w-full flex items-center justify-between py-4 px-2 text-left font-bold text-xl rounded-lg transition-colors focus:outline-none mb-2 ${openSkillCategory === 'Tools' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100') : ''}`}
      onClick={() => toggleAccordion('Tools')}
      aria-expanded={openSkillCategory === 'Tools'}
      aria-controls="tools-panel"
    >
      <span className="flex items-center gap-2"><GitBranch className="text-yellow-500" size={20}/> Tools</span>
      <span className={`transform transition-transform ${openSkillCategory === 'Tools' ? 'rotate-90' : ''}`}>▶</span>
    </button>
    {openSkillCategory === 'Tools' && (
      <div id="tools-panel" className="mb-4 animate-fade-in">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          <SkillCard title="Git & GitHub" level={75} icon={<Github/>} darkMode={darkMode} />
          <SkillCard title="Figma" level={60} icon={<PenTool />} darkMode={darkMode} />
          <SkillCard title="VS Code,Cursor" level={80} icon={<Code />} darkMode={darkMode} />
          <SkillCard title="Vercel" level={70} icon={<Cloud />} darkMode={darkMode} />
        </div>
      </div>
    )}
    {/* Accordion: AI & APIs
    <button
      className={`w-full flex items-center justify-between py-4 px-2 text-left font-bold text-xl rounded-lg transition-colors focus:outline-none mb-2 ${openSkillCategory === 'AI' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100') : ''}`}
      onClick={() => toggleAccordion('AI')}
      aria-expanded={openSkillCategory === 'AI'}
      aria-controls="ai-panel"
    >
      <span className="flex items-center gap-2"><Cloud className="text-purple-500" size={20}/> AI & APIs</span>
      <span className={`transform transition-transform ${openSkillCategory === 'AI' ? 'rotate-90' : ''}`}>▶</span>
    </button>
    {openSkillCategory === 'AI' && (
      <div id="ai-panel" className="mb-4 animate-fade-in">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          <SkillCard title="OpenAI API" level={55} icon={<Cloud />} darkMode={darkMode} />
          <SkillCard title="Prompt Engineering" level={50} icon={<Cloud />} darkMode={darkMode} />
          <SkillCard title="REST APIs" level={60} icon={<Cloud />} darkMode={darkMode} />
          <SkillCard title="API Integration" level={60} icon={<Cloud />} darkMode={darkMode} />
        </div>
      </div>
    )} */}
    {/* Accordion: Blockchain */}
    <button
      className={`w-full flex items-center justify-between py-4 px-2 text-left font-bold text-xl rounded-lg transition-colors focus:outline-none mb-2 ${openSkillCategory === 'Blockchain' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100') : ''}`}
      onClick={() => toggleAccordion('Blockchain')}
      aria-expanded={openSkillCategory === 'Blockchain'}
      aria-controls="blockchain-panel"
    >
      <span className="flex items-center gap-2"><Code className="text-yellow-500" size={20}/> Others (UI & UX, Blockchain, Data Science)</span>
      <span className={`transform transition-transform ${openSkillCategory === 'Blockchain' ? 'rotate-90' : ''}`}>▶</span>
    </button>
    {openSkillCategory === 'Blockchain' && (
      <div id="blockchain-panel" className="mb-4 animate-fade-in">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          <SkillCard title="UI & UX" level={45} icon={<LayoutDashboard />} darkMode={darkMode} />
          <SkillCard title="Solidity" level={45} icon={<Code />} darkMode={darkMode} />
          <SkillCard title="Ethereum-Sepolia Testnet" level={40} icon={<Cloud />} darkMode={darkMode} />
          <SkillCard title="Python" level={65} icon={<Landmark />} darkMode={darkMode} />
          <SkillCard title="Pandas & Numpy" level={45} icon={<Database />} darkMode={darkMode} />
        </div>
      </div>
    )}
    {/* Accordion: Data Handling
    <button
      className={`w-full flex items-center justify-between py-4 px-2 text-left font-bold text-xl rounded-lg transition-colors focus:outline-none mb-2 ${openSkillCategory === 'Data' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100') : ''}`}
      onClick={() => toggleAccordion('Data')}
      aria-expanded={openSkillCategory === 'Data'}
      aria-controls="data-panel"
    >
      <span className="flex items-center gap-2"><Database className="text-blue-500" size={20}/> Data Handling</span>
      <span className={`transform transition-transform ${openSkillCategory === 'Data' ? 'rotate-90' : ''}`}>▶</span>
    </button>
    {openSkillCategory === 'Data' && (
      <div id="data-panel" className="mb-4 animate-fade-in">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillCard title="Python" level={65} icon={<Landmark />} darkMode={darkMode} />
          <SkillCard title="Pandas" level={45} icon={<Database />} darkMode={darkMode} />
          <SkillCard title="NumPy" level={45} icon={<Database />} darkMode={darkMode} />
        </div>
      </div>
    )} */}
  </div>
</Section>


      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Mail className="text-blue-500 animate-pulse" size={32} /> Contact Me
          </h2>
          <div className={`grid md:grid-cols-2 gap-12 p-6 rounded-2xl border shadow-lg transition-all w-full
            ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border-gray-600 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 border-blue-200 text-gray-900'}`}
            >
            <div className="flex flex-col mt-8">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <span role="img" aria-label="wave">👋</span> Let's Connect!
              </h3>
              <p className="text-lg mt-6 mb-8 flex items-center gap-2"><Phone className="text-green-500 animate-bounce" size={22} />Feel free to reach out for collaborations or just a friendly hello!</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail size={20} className="mr-4 text-blue-500" />
                  <a href="mailto:arunkumar582004@gmail.com" className="hover:text-blue-500 transition-colors">arunkumar582004@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-4 text-green-500" />
                  <a href="tel:+918778929845" className="hover:text-blue-500 transition-colors">+91 8778929845</a>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="https://github.com/arun-l-kumar" target="_blank" rel="noopener noreferrer" className="mt-6 ml-4 hover:text-blue-500 transition-transform hover:scale-125 animate-social">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/arun-l-kumar" target="_blank" rel="noopener noreferrer" className="mt-6 ml-4 hover:text-blue-500 transition-transform hover:scale-125 animate-social">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://www.behance.net/badvibesarun" target="_blank" rel="noopener noreferrer" className="mt-6 ml-4 hover:text-blue-500 transition-transform hover:scale-125 animate-social">
                    <Behance size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <ContactForm darkMode={darkMode} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 w-full border-t transition-all
        ${darkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-gray-100 border-blue-100 text-gray-700'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
          <div className="flex space-x-4 mb-2">
            <a href="https://github.com/arun-l-kumar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-transform hover:scale-125">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/arun-l-kumar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-transform hover:scale-125">
              <Linkedin size={22} />
            </a>
            <a href="https://www.behance.net/badvibesarun" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-transform hover:scale-125">
              <Behance size={22} />
            </a>
          </div>
          <p className="text-sm">&copy; 2024 Arun Kumar L. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-2 px-3 py-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold shadow transition-all flex items-center gap-1"
            aria-label="Back to top"
          >
            <span>&uarr;</span> Back to top
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
