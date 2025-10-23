 import React, {  useEffect, useState } from 'react';
import Resume from "../assets/resume.pdf"; // path apne project structure ke hisab se adjust karo

import { FaHome,FaFilePdf, FaLaptopCode, FaUser, FaBriefcase, FaGraduationCap, FaCode,FaEnvelope, FaBars } from "react-icons/fa";

function Header() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");


const navLinks = [
  { id: "home", icon: FaHome, text: "Home", href: "#home" },
  { id: "about", icon: FaUser, text: "About", href: "#about" },
  { id: "projects", icon: FaLaptopCode, text: "Projects", href: "#projects" },
  { id: "contact", icon: FaEnvelope, text: "Contact", href: "#contact" },
  { id: "resume", icon: FaFilePdf, text: "Resume", href: Resume, external: true }
];


const scrollToSection = (href) => {
  if (href === "home") {
    // Home के लिए पेज को सबसे ऊपर ले जाएं
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveLink("home");
    return;
  }

  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveLink(href.substring(1));
  }
};
 

useEffect(() => {
  // 1ms delay ensures page fully renders
  setTimeout(() => {
    window.scrollTo(0, 0);       // scroll top
    window.history.replaceState(null, "", window.location.pathname); // URL me hash remove
    setActiveLink("home");       // optional: top pe home active
  }, 1);
}, []);
  return (
     
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="deep md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400">
       
          <div className="media-object__thumbnail "></div>
          <nav className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">
            {/* Mobile Menu Button */}
            <div className="mobile flex justify-between items-center md:hidden px-2">
              <a href="/" className="text-white font-bold">Portfolio</a>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 my_icon"
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block desktop`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
{navLinks.map(({ id, icon: Icon, text, href, external }) => {
  if (external) {
    return (
      <a
        key={id}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
          transition-all duration-300 flex items-center gap-2
          text-gray-300 hover:text-white hover:bg-white/10"
      >
        <Icon className="text-base" />
        <span className="inline">{text}</span>
      </a>
    );
  } else {
    return (
      <button
        key={id}
        onClick={() => scrollToSection(href)}
        className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
          transition-all duration-300 flex items-center gap-2
          hover:bg-white/10 
          ${activeLink === id
            ? "bg-white/15 text-white"
            : "text-gray-300 hover:text-white"}`} >
        <Icon className={`text-base ${activeLink === id ? "scale-110" : ""}`} />
        <span className="inline">{text}</span>
      </button>
    );
  }
})}

              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header