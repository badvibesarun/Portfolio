import React, { useState } from 'react';
import myImage from '../images/profile-pic (37).png';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';
import { SkillCard } from './components/SkillCard';
import ContactForm from './components/ContactForm';

function MyComponent() {
  return <img src={myImage} alt="Description" className="w-32 h-32" />;
}

import { Menu, Moon, Sun, Github, Linkedin, Bean as Behance, Mail, Phone, Download, Code, Cloud, Leaf } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
            <img src={myImage} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300 shadow-md" />
              <h1 className="text-xl font-bold ml-3">Arun Kumar L</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-blue-500 transition-transform hover:scale-105">Home</a>
              <a href="#about" className="hover:text-blue-500 transition-transform hover:scale-105">About</a>
              <a href="#projects" className="hover:text-blue-500 transition-transform hover:scale-105">Projects</a>
              <a href="#skills" className="hover:text-blue-500 transition-transform hover:scale-105">Skills</a>
              <a href="#contact" className="hover:text-blue-500 transition-transform hover:scale-105">Contact</a>
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
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
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <a href="#home" className="block px-3 py-2 hover:text-blue-500">Home</a>
              <a href="#about" className="block px-3 py-2 hover:text-blue-500">About</a>
              <a href="#projects" className="block px-3 py-2 hover:text-blue-500">Projects</a>
              <a href="#skills" className="block px-3 py-2 hover:text-blue-500">Skills</a>
              <a href="#contact" className="block px-3 py-2 hover:text-blue-500">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section 
  id="home" 
  className={`relative pt-20 min-h-screen flex items-center justify-center text-center 
              ${darkMode 
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700'  // Dark Mode
                : 'bg-gradient-to-br from-gray-400 via-gray-100 to-gray-500'} // Light Mode
              animate-gradient`}
>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <h4 className={`text-2xl md:text-4xl mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      Hi, I'M
    </h4>
    <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      ARUN KUMAR L
    </h1>
    <h5 className={`text-4xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
      Front-End Developer & UI/UX Designer
    </h5>
    <p className={`text-xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
      Creating beautiful and functional digital experiences
    </p>
    
    {/* Buttons */}
    <div className="flex justify-center space-x-4">
      <a href="#contact" className={`px-6 py-3 rounded-lg ${darkMode 
          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
          : 'bg-blue-500 hover:bg-blue-600 text-white'} transition duration-300`}>
        Contact Me
      </a>
      <a  
  href="/Resume.pdf" 
  download="Arun Kumar's Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className={`px-6 py-3 rounded-lg border transition duration-300
    ${darkMode 
      ? 'border-white text-white hover:border-gray-500' 
      : 'border-gray-800 text-gray-900 hover:border-gray-500'}
  `}
  aria-label="Download Arun Kumar's Resume"
>
  Download Resume
</a>

    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
             <img
              src={myImage}  // Add the image source
              alt="Profile"
              className="rounded-lg shadow-lg"
              />
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <p className="text-lg mb-4">
            Hello! I’m Arunkumar, a passionate Front-End Developer & UI/UX Designer with a solid foundation in HTML, CSS, JavaScript, React.js, and Figma for UI design. Currently pursuing my B.Tech in Computer Science and Engineering (3rd year), I’m continuously learning and exploring these fields to shape my career.
              </p>
              <p className="text-lg">
                I’m actively seeking an internship to enhance my skills, gain hands-on experience, and receive valuable guidance in achieving my career goals.
              </p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h3 className="font-bold mt-4 mb-2">Education</h3>
                <p>University College Of Engineering, Kanchipuram</p>
                <p className="text-sm text-gray-500">2022 - 2026</p>
                <p></p>
                <h3 className="font-bold mt-6 mb-2">Certificate</h3>
                <p>Full-Stack Internship Novitech Pvt Ltd </p>
                <p className="mt-2 mb-2">Flutter Webinar Completion Certificate</p>
                <h3 className="font-bold mt-6 mb-2">Languages</h3>
                <p>TAMIL</p>
                <p className="mt-2 mb-2">ENGLISH</p>


              </div>
          </div>
        </div>
      </section>

      <Section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
  <h2 className="text-3xl font-bold mb-8">Projects</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProjectCard
      title="Netflix Clone"
      description="A responsive Netflix clone built with HTML, CSS, and JavaScript"
      image="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
      tags={['HTML', 'CSS', 'JavaScript']}
      darkMode={darkMode} // <-- Pass darkMode prop
    />
    <ProjectCard
      title="Weather Forecasting App"
      description="Real-time weather app using OpenWeatherMap API"
      image="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80"
      tags={['REACT','API','JS']}
      darkMode={darkMode} // <-- Pass darkMode prop
    />
    <ProjectCard
      title="Agritech App UI"
      description="Modern UI design for an agriculture technology platform"
      image="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=800&q=80"
      tags={['Figma', 'UI Design', 'Wireframing']}
      darkMode={darkMode} // <-- Pass darkMode prop
    />
  </div>
</Section>
{/* Skills Section */}
<Section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
  <h2 className="text-3xl font-bold mb-8">Skills</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <SkillCard title="HTML" level={80} darkMode={darkMode} />
    <SkillCard title="CSS" level={70} darkMode={darkMode} />
    <SkillCard title="JavaScript" level={50} darkMode={darkMode} />
    <SkillCard title="React" level={40} darkMode={darkMode} />
    <SkillCard title="Figma" level={50} darkMode={darkMode} />
    <SkillCard title="Git" level={70} darkMode={darkMode} />
    <SkillCard title="My SQL" level={30} darkMode={darkMode} />
    <SkillCard title="Python" level={60} darkMode={darkMode} />
  </div>
</Section>


      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-8">Feel free to reach out for collaborations or just a friendly hello!</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail size={20} className="mr-4" />
                  <a href="mailto:arunkumar582004@gmail.com" className="hover:text-blue-500">arunkumar582004@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-4" />
                  <a href="tel:+918778929845" className="hover:text-blue-500">+91 8778929845</a>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="https://github.com/badvibesarun" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/badvibesarun" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://www.behance.net/badvibesarun" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    <Behance size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div>
    <ContactForm darkMode={darkMode} />
  </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Arun Kumar L. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;