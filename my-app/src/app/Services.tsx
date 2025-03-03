"use client";

import Navigation from "./components/nav";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CheckBox from "./components/checkbox";
import ContactPopup from "./components/ContactPopup";

interface Servce {
  backgroundImage: string;
  spanText: string;
  headerText: string;
  bgClass: string;
  text: string;
  endpoint?: string;
}

const Services: React.FC<Servce> = ({
  backgroundImage,
  spanText,
  headerText,
  bgClass,
  text,
  endpoint,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEvServices, setIsEvServices] = useState(false);
  const [isStaffing, setIsStaffing] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effect values
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  
  useEffect(() => {
    setIsEvServices(window.location.pathname === "/evServices");
    setIsStaffing(window.location.pathname === "/eventAndStaffing");
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <Navigation />
      
      {/* Hero Section */}
      <header ref={headerRef} className="relative h-[90vh] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-overlay z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          ></div>
        </motion.div>

        {/* Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-20 h-full flex items-center"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-screen-xl">
            <div className="max-w-4xl">
              {/* Category Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-sm font-medium text-blue-100">{spanText}</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              >
                {headerText}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl"
              >
                {text}
              </motion.p>

              {/* Conditional Content */}
              {isStaffing && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-4 mb-8"
                >
                  <div className="flex items-center space-x-3 text-white/90">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p>Our staffing personnel are vetted & background-checked prior to assignment</p>
                  </div>
                  <div className="flex items-center space-x-3 text-white/90">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p>If you have a staffing need, contact us and let us provide a solution.</p>
                  </div>
                </motion.div>
              )}

              {isEvServices && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
                >
                  {/* EV Services specific content can be added here */}
                </motion.div>
              )}

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium
                  transform transition-all duration-300
                  hover:bg-opacity-90 hover:shadow-xl
                  active:bg-opacity-80
                  flex items-center space-x-2"
              >
                <span>CONTACT US</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-[250px] -right-[250px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] -bottom-[200px] -left-[200px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </header>

      <ContactPopup isOpen={isOpen} togglePopup={togglePopup} />
    </div>
  );
};

export default Services;
