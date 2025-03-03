"use client";

import Image from "next/image";
import Nav from "../app/components/nav";
import GlobalButton from "./components/button";
import CheckBox from "./components/checkbox";
import ContactPopup from "./components/ContactPopup";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import Link from "next/link";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      src: "/assets/Fac.png",
      name: "Professional/Technical Services",
      description:
        "Property Management Companies, Real Estate Developers, Industrial and/or commercial properties, Hot-Spot Discovery and evaluation",
      link: "/technicalServices",
    },
    {
      src: "/assets/Janitor.png",
      name: "Commericial Cleaning/Enviromental Services.",
      description: "Commericial Cleaning/Enviromental Services.",
      link: "/environmentServices",
    },

    {
      src: "/assets/Staffing.png",
      name: "Professional Events and Staffing",
      description:
        "Preeminet Professional Services is proud to provide staffing services for its clientel. We provide temporary staffing for events either commerical private/public with a minimum of notice.",
      link: "/eventAndStaffing",
    },
    {
      src: "/assets/energy.png",
      name: "EV Services",
      description:
        " We provide turn-key services for the Electification of your commerical fleet or individual/company vechicle(s). These services include (but not limited to)..",
      link: "/evServices",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden my-[100px]">
      <div
        className={`flex transition-transform duration-300 ease-in-out ${
          isMobile ? "" : "gap-[10px]"
        }`}
        style={{
          transform: `translateX(-${
            currentIndex * (isMobile ? 100 : 100 / 3)
          }%)`,
        }}
      >
        {services.map((service, index) => (
          <Link
            href={service.link}
            key={index}
            className={`${
              isMobile ? "w-full" : "w-auto"
            } h-[500px] relative flex-shrink-0 group`}
          >
            <div className="overlay"></div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-10 absolute bg-black/50 top-0 left-0 w-full h-full items-center justify-center flex">
              <span className="text-[20px] font-bold text-white relative z-30">
                {service.description}{" "}
              </span>
            </div>

            <Image
              className="h-[100%] servicesImage object-cover"
              src={service.src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={500}
            />

            <div className="flex p-[10px] items-end justify-end absolute bottom-0 text-white">
              <p className="mt-2 text-center font-semibold relative z-20">
                {service.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute clickBtns left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute clickBtns right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isCountingRef = useRef(false);
  const pathname = usePathname();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const startCounting = () => {
    if (isCountingRef.current) return; // Prevent multiple counts
    isCountingRef.current = true;

    let start = 0;
    const end = 30000;
    const duration = 2000; // Duration of the animation in milliseconds
    const increment = end / ((duration / 1000) * 40); // Calculate increment per frame

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        console.log("Current count:", Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it ends at 10000
        console.log("Final count:", end);
      }
    };

    animate();
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is in view, starting count...");
          startCounting();
          observer.disconnect(); // Stop observing after counting starts
        } else {
          console.log("Element is not in view.");
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
      console.log("Observer is set up.");
    }

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  return (
    <div className="">
      <Nav scrollToSection={scrollToSection} />

      <main className="h-[100vh]">
        <ContactPopup isOpen={isOpen} togglePopup={togglePopup} />

        <header className="relative h-screen overflow-hidden">
          {/* Video Background with Enhanced Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 z-10"></div>
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="assets/world_.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0 z-10 opacity-30">
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/4 left-1/4 animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
            <div className="absolute w-3 h-3 bg-blue-300 rounded-full top-3/4 left-1/3 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
            <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-1/2 left-2/3 animate-pulse" style={{animationDelay: '1s', animationDuration: '4.5s'}}></div>
            <div className="absolute w-2 h-2 bg-indigo-400 rounded-full top-1/3 left-3/4 animate-pulse" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
            <div className="absolute w-3 h-3 bg-indigo-300 rounded-full top-2/3 left-1/5 animate-pulse" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
          </div>
          
          {/* Content Container */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-screen-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Text Content */}
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-medium mb-6">
                      NMSDC MBE Certified Firm
                    </span>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                      Serving our clients' <span className="text-blue-400">Infrastructure</span> Development and <span className="text-blue-400">Asset Management</span> needs
                    </h1>
                    
                    <div className="space-y-6 mb-10">
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-gray-200 leading-relaxed max-w-2xl"
                      >
                        Preeminent Professional Services provides professional environmental facilities maintenance and management services with capabilities to design, engineer, and build.
                      </motion.p>
                      
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-gray-300 max-w-2xl"
                      >
                        We bring an eons old industry into the 21st century through process, technology, & impact.
                      </motion.p>
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
                      >
                        CONTACT US
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.button>
                      
                      <motion.button
                        onClick={() => scrollToSection('about')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center"
                      >
                        LEARN MORE
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Feature Cards */}
                <div className="lg:col-span-5 hidden lg:block">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {/* Service Card 1 */}
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                    >
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Facility Management</h3>
                      <p className="text-gray-300 text-sm">Professional environmental facilities maintenance services</p>
                    </motion.div>
                    
                    {/* Service Card 2 */}
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                    >
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Environmental Services</h3>
                      <p className="text-gray-300 text-sm">Sustainable solutions for your environmental needs</p>
                    </motion.div>
                    
                    {/* Service Card 3 */}
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                    >
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Professional Staffing</h3>
                      <p className="text-gray-300 text-sm">Event and security staffing services</p>
                    </motion.div>
                    
                    {/* Service Card 4 */}
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                    >
                      <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">EV Services</h3>
                      <p className="text-gray-300 text-sm">Turn-key solutions for electrification needs</p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </header>

        <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-[#f8f8fa]">
          {/* Background elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute w-[800px] h-[800px] bg-blue-50 rounded-full opacity-20 blur-3xl -top-[400px] -right-[200px]"></div>
            <div className="absolute w-[600px] h-[600px] bg-gray-100 rounded-full opacity-30 blur-3xl -bottom-[300px] -left-[200px]"></div>
          </div>
          
          <div className="max-w-[1200px] mx-auto px-[20px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Content Column */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-blue-600 font-medium tracking-wide uppercase text-sm mb-3 block">About us</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                    Transform your environment with us, enhancing assets <span className="text-blue-600">&amp; improving strategies</span>
                  </h2>
                  
                  <div className="space-y-6 text-[#333336] leading-relaxed">
                    <p>
                      Preeminent Professional Services is a certified NMSDC MBE firm providing professional environmental facilities maintenance and management services.
                    </p>
                    <p>
                      Our services are structured to take into account the health and wellbeing of the client's total physical environment and how the maintenance of that environment impacts those who work within it.
                    </p>
                    <p>
                      We provide environmental/commercial cleaning services, professional/technical services, professional event & security staffing services, renewable energy, and EV services. Our services can enhance the client's building management strategies and even the impact on the overall value of the asset.
                    </p>
                    <p className="font-medium">
                      We strive to bring an eons old industry into the 21st century through process, technology, & impact.
                    </p>
                  </div>
                  
                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <motion.button
                      onClick={() => setIsOpen(!isOpen)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                    >
                      CONTACT US
                    </motion.button>
                    <motion.a
                      href="#services"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-full shadow-lg border border-gray-200 transition-all duration-300 flex items-center justify-center"
                    >
                      OUR SERVICES
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
                
                {/* Stats Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-8 mt-16 border-t border-gray-200 pt-10"
                >
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">30+</h3>
                    <p className="text-[#86868b] text-xs lg:text-sm font-light">Collective years of experience</p>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">100+</h3>
                    <p className="text-[#86868b] text-xs lg:text-sm font-light">Satisfied Clients</p>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">5+</h3>
                    <p className="text-[#86868b] text-xs lg:text-sm font-light">Service Categories</p>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">24/7</h3>
                    <p className="text-[#86868b] text-xs lg:text-sm font-light">Client Support</p>
                  </div>
                  <div className="text-center backdrop-blur-sm bg-gradient-to-br from-white/30 to-white/5 rounded-xl py-3 px-2 shadow-sm border border-gray-100/10 group hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">50K+</h3>
                    <p className="text-[#86868b] text-xs lg:text-sm font-light">Square Feet Maximized</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Image Column */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 scale-105 blur-xl opacity-30"></div>
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10">
                    <ImageSlider />
                  </div>
                  
                  {/* Floating badges */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-black">NMSDC Certified</h4>
                        <p className="text-xs text-[#86868b]">MBE Firm</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute -top-6 right-10 bg-white rounded-2xl shadow-xl p-4 z-20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-black">Eco-Friendly</h4>
                        <p className="text-xs text-[#86868b]">Sustainable Practices</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Careers Section - Apple-inspired design */}
        <section id="careers" className="py-28 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#000E3C] via-[#001a5c] to-[#000E3C] z-0"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 z-[1] opacity-20">
            <div className="absolute w-4 h-4 bg-blue-400 rounded-full top-1/4 left-1/4 animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
            <div className="absolute w-3 h-3 bg-blue-300 rounded-full top-3/4 left-1/3 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
            <div className="absolute w-5 h-5 bg-blue-500 rounded-full top-1/2 left-2/3 animate-pulse" style={{animationDelay: '1s', animationDuration: '4.5s'}}></div>
            <div className="absolute w-4 h-4 bg-indigo-400 rounded-full top-1/3 left-3/4 animate-pulse" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
            <div className="absolute w-3 h-3 bg-indigo-300 rounded-full top-2/3 left-1/5 animate-pulse" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
            <div className="absolute w-6 h-6 bg-indigo-500 rounded-full top-1/5 left-1/2 animate-pulse" style={{animationDelay: '2.5s', animationDuration: '5s'}}></div>
          </div>
          
          {/* Subtle mesh gradient overlay */}
          <div className="absolute inset-0 bg-mesh-gradient opacity-30 mix-blend-overlay z-[2]"></div>
          
          <div className="max-w-[1050px] mx-auto px-[20px] relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="order-2 md:order-1">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white">Professional Growth</h3>
                    </div>
                    <p className="text-gray-300">
                      We invest in our team members' development with ongoing training, mentorship programs, and clear advancement paths.
                    </p>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>
                  
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white">Competitive Benefits</h3>
                    </div>
                    <p className="text-gray-300">
                      Cohesive team and credibility. We are a team of professionals who are dedicated to providing the best possible service to our clients.
                    </p>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>
                  
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white">Inclusive Culture</h3>
                    </div>
                    <p className="text-gray-300">
                      Join a diverse team where your unique perspective is valued and you can make a meaningful impact on our clients and communities.
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Right content */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="inline-block text-blue-300 font-medium mb-2 px-4 py-1 rounded-full bg-blue-900/30 border border-blue-800/50"
                >
                  Now Hiring
                </motion.span>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                >
                  Join Our Team of Professionals
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
                >
                  At Preeminent Professional Services, we're looking for talented individuals who are passionate about making a collective, impactful change in the industry. Discover opportunities to grow your career with us.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                >
                  <Link href="/hiring" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#000E3C] font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                    <span>EXPLORE CAREERS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <span>CONTACT US</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </button>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
                >
                  {/* <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-white">Remote Positions</span>
                  </div>
                   */}
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-white">Full-Time Roles</span>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-white">Contract Opportunities</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve - Apple-inspired design */}
        <section className="bg-gradient-to-b from-white to-[#f5f5f7] py-24 overflow-hidden" id="industries">
          <div className="max-w-[1050px] mx-auto px-[20px]">
            <div className="relative">
              {/* Subtle background elements */}
              <div className="absolute w-[600px] h-[600px] bg-blue-50 rounded-full opacity-20 blur-3xl -top-96 -right-96 z-0"></div>
              <div className="absolute w-[400px] h-[400px] bg-purple-50 rounded-full opacity-20 blur-3xl -bottom-64 -left-64 z-0"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-16">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-[#86868b] font-medium block mb-2"
                  >
                    Industries We Serve
                  </motion.span>
                  <motion.h2 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-black mb-4"
                  >
                    If you serve people, we serve you.
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[#86868b] max-w-2xl mx-auto"
                  >
                    We create experiences that matter wherever people work, learn, recover, and play.
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Commercial Property Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] overflow-hidden group hover:shadow-[0_30px_60px_rgba(8,112,184,0.12)] transition-all duration-500"
                  >
                    <div className="relative h-[240px] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                      <div className="absolute inset-0 bg-blue-900/20 z-[5] group-hover:opacity-0 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-card-1 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"></div>
                    </div>
                    
                    <div className="p-8 relative">
                      <div className="absolute -top-12 right-8 w-16 h-16 bg-blue-600 rounded-2xl shadow-lg flex items-center justify-center text-white z-20 group-hover:rotate-[15deg] transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      
                      <h3 className="text-xl font-bold text-black mb-4 mt-2">Commercial Property Managers/Owners</h3>
                      <p className="text-[#86868b] mb-6">We provide comprehensive solutions for property management companies, ensuring optimal facility maintenance and operational efficiency.</p>
                      
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center text-blue-600 font-medium group/btn"
                      >
                        <span className="group-hover/btn:mr-4 transition-all duration-300">Contact Us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                  
                  {/* Construction Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] overflow-hidden group hover:shadow-[0_30px_60px_rgba(8,112,184,0.12)] transition-all duration-500"
                  >
                    <div className="relative h-[240px] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                      <div className="absolute inset-0 bg-green-900/20 z-[5] group-hover:opacity-0 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-card-2 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"></div>
                    </div>
                    
                    <div className="p-8 relative">
                      <div className="absolute -top-12 right-8 w-16 h-16 bg-green-600 rounded-2xl shadow-lg flex items-center justify-center text-white z-20 group-hover:rotate-[15deg] transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      
                      <h3 className="text-xl font-bold text-black mb-4 mt-2">Construction and Infrastructure Developers</h3>
                      <p className="text-[#86868b] mb-6">We partner with construction firms and developers to deliver sustainable and efficient infrastructure solutions.</p>
                      
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center text-green-600 font-medium group/btn"
                      >
                        <span className="group-hover/btn:mr-4 transition-all duration-300">Contact Us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                  
                  {/* Government Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] overflow-hidden group hover:shadow-[0_30px_60px_rgba(8,112,184,0.12)] transition-all duration-500"
                  >
                    <div className="relative h-[240px] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                      <div className="absolute inset-0 bg-purple-900/20 z-[5] group-hover:opacity-0 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-card-3 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"></div>
                    </div>
                    
                    <div className="p-8 relative">
                      <div className="absolute -top-12 right-8 w-16 h-16 bg-purple-600 rounded-2xl shadow-lg flex items-center justify-center text-white z-20 group-hover:rotate-[15deg] transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                      </div>
                      
                      <h3 className="text-xl font-bold text-black mb-4 mt-2">Public/Private Sector Government Institutions</h3>
                      <p className="text-[#86868b] mb-6">We support government institutions with specialized services designed to enhance operational efficiency and sustainability.</p>
                      
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center text-purple-600 font-medium group/btn"
                      >
                        <span className="group-hover/btn:mr-4 transition-all duration-300">Contact Us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                </div>
                
                {/* Additional Industries */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="mt-16 bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] overflow-hidden p-8"
                >
                  <h3 className="text-xl font-bold text-black mb-6 text-center">Additional Industries We Serve</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-bold text-black mb-1">Healthcare</h4>
                      <p className="text-xs text-[#86868b]">Hospitals & Clinics</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-bold text-black mb-1">Education</h4>
                      <p className="text-xs text-[#86868b]">Schools & Universities</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-bold text-black mb-1">Corporate</h4>
                      <p className="text-xs text-[#86868b]">Offices & Workspaces</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-bold text-black mb-1">Hospitality</h4>
                      <p className="text-xs text-[#86868b]">Hotels & Venues</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Call to Action */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-12 text-center"
                >
                  <button 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    EXPLORE ALL INDUSTRIES
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-4 flex items-center justify-center">
        <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-[200px] hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/assets/mbe-certification.png"
                  alt="Certification Partner"
                  width={200}
                  height={100}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

        </section>

        {/* Certification Section - Apple-inspired design */}
        <section className="bg-gradient-to-b from-[#f5f5f7] to-white py-20 overflow-hidden">
          <div className="max-w-[1050px] mx-auto px-[20px]">
            <div className="text-center mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-[#86868b] font-medium block mb-2"
              >
                Certified Excellence
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-black mb-4"
              >
                Industry-Recognized Certifications
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#86868b] max-w-2xl mx-auto"
              >
                Our commitment to excellence is backed by prestigious certifications that validate our expertise and dedication to quality service.
              </motion.p>
            </div>
            
            <div className="relative">
              {/* Subtle background glow effect */}
              <div className="absolute w-[500px] h-[500px] bg-blue-100 rounded-full opacity-20 blur-3xl -top-64 -left-64 z-0"></div>
              <div className="absolute w-[300px] h-[300px] bg-purple-100 rounded-full opacity-20 blur-3xl -bottom-32 -right-32 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {/* MBE Certification Card */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] overflow-hidden hover:shadow-[0_30px_60px_rgba(8,112,184,0.12)] transition-all duration-500 group"
                >
                  <div className="p-8 flex flex-col md:flex-row items-center">
                    <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0 relative">
                      <div className="w-[120px] h-[120px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
                        <Image
                          src="/assets/mbe-certification.png"
                          alt="MBE Certification"
                          width={100}
                          height={100}
                          className="w-[80px] h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-black mb-2">NMSDC MBE Certification</h3>
                      <p className="text-[#86868b] mb-4">Certified Minority Business Enterprise by the National Minority Supplier Development Council.</p>
                      <div className="flex items-center justify-center md:justify-start">
                        <span className="text-blue-500 font-medium text-sm">Nationally Recognized</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Additional Certification Card */}
         
              </div>
              
              {/* Certification Details */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-12 bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] overflow-hidden p-8 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-bold text-black mb-1">OSHA 10 & 30</h4>
                    <p className="text-xs text-[#86868b]">Safety Standards</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-bold text-black mb-1">EPA 608</h4>
                    <p className="text-xs text-[#86868b]">Environmental</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-bold text-black mb-1">Engineering</h4>
                    <p className="text-xs text-[#86868b]">City of Philadelphia</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-bold text-black mb-1">CSIA #1197</h4>
                    <p className="text-xs text-[#86868b]">Certified Specialist</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-bold text-black mb-1">Serve/Safe</h4>
                    <p className="text-xs text-[#86868b]">Food Management</p>
                  </div>
                  
                  {/* And More Section */}
                  <div className="flex flex-col items-center text-center relative group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                      <div className="absolute inset-0 border border-dashed border-blue-300 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>
                    <h4 className="text-sm font-bold text-black mb-1 relative">
                      And More
                      <span className="absolute -top-1 -right-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-[10px] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">+</span>
                    </h4>
                    <p className="text-xs text-[#86868b]">Coming Soon</p>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Call to Action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12 text-center relative z-10"
              >
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  LEARN MORE ABOUT OUR QUALIFICATIONS
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strategic Partners Section - Apple-inspired design */}
        <section className="bg-gradient-to-b from-white to-[#f5f5f7] py-24 overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-[20px]">
            <div className="relative">
              {/* Subtle background elements */}
              <div className="absolute w-[500px] h-[500px] bg-gray-100 rounded-full opacity-20 blur-3xl -top-64 -right-32 z-0"></div>
              <div className="absolute w-[300px] h-[300px] bg-blue-50 rounded-full opacity-20 blur-3xl -bottom-32 -left-32 z-0"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-20">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-[#86868b] font-medium block mb-2"
                  >
                    Collaborative Excellence
                  </motion.span>
                  <motion.h2 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-black mb-6"
                  >
                    Strategic Partners
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[#86868b] max-w-3xl mx-auto"
                  >
                    We collaborate with industry leaders to deliver comprehensive solutions that exceed expectations and drive innovation.
                  </motion.p>
                </div>
                
                {/* Featured Partners - Redesigned for better spacing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                  {/* Original Partners Row */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] overflow-hidden p-10 hover:shadow-[0_30px_60px_rgba(8,112,184,0.12)] transition-all duration-500 group h-full"
                  >
                    <div className="flex flex-col items-center h-full">
                      <div className="w-[140px] h-[140px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center mb-8 p-4">
                        <Image
                          src="/assets/ready.png"
                          alt="Ready Partner"
                          width={120}
                          height={120}
                          className="w-[100px] h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-black mb-4">Ready</h3>
                      <p className="text-[#86868b] text-center mb-6 flex-grow">Strategic technology partner providing innovative solutions for operational efficiency.</p>
                      <div className="flex items-center justify-center mt-auto">
                        <span className="text-blue-500 font-medium text-sm">Technology Partner</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-blue-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] overflow-hidden p-10 hover:shadow-[0_30px_60px_rgba(8,112,184,0.12)] transition-all duration-500 group h-full"
                  >
                    <div className="flex flex-col items-center h-full">
                      <div className="w-[140px] h-[140px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mb-8 p-4">
                        <Image
                          src="/assets/oxi.jpg"
                          alt="Oxi Partner"
                          width={120}
                          height={120}
                          className="w-[100px] h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-black mb-4">Oxi Fresh</h3>
                      <p className="text-[#86868b] text-center mb-6 flex-grow">Environmental solutions partner specializing in sustainable cleaning technologies.</p>
                      <div className="flex items-center justify-center mt-auto">
                        <span className="text-green-500 font-medium text-sm">Environmental Partner</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-green-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
            
                  
                  {/* New Partners Row */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] overflow-hidden p-10 hover:shadow-[0_30px_60px_rgba(8,112,184,0.12)] transition-all duration-500 group h-full md:col-span-1 lg:col-span-1.5"
                  >
                    <div className="flex flex-col items-center h-full">
                      <div className="w-[140px] h-[140px] bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center mb-8 p-4">
                        <div className="w-[100px] h-[100px] flex items-center justify-center bg-amber-50 rounded-full">
                          <span className="text-amber-600 font-bold text-xl">HS</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-black mb-4 text-center">H.S. Building Services Inc</h3>
                      <p className="text-[#86868b] text-center mb-6 flex-grow">Strategic building services partner providing comprehensive facility solutions.</p>
                      <div className="flex items-center justify-center mt-auto">
                        <span className="text-amber-500 font-medium text-sm">Building Services Partner</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-amber-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] overflow-hidden p-10 hover:shadow-[0_30px_60px_rgba(8,112,184,0.12)] transition-all duration-500 group h-full md:col-span-1 lg:col-span-1.5"
                  >
                    <div className="flex flex-col items-center h-full">
                      <div className="w-[140px] h-[140px] bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-full flex items-center justify-center mb-8 p-4">
                        <div className="w-[100px] h-[100px] flex items-center justify-center bg-indigo-50 rounded-full">
                          <span className="text-indigo-600 font-bold text-xl">RDS</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-black mb-4 text-center">RDS Associates & Consulting Engineers</h3>
                      <p className="text-[#86868b] text-center mb-6 flex-grow">Expert engineering consultants providing innovative technical solutions.</p>
                      <div className="flex items-center justify-center mt-auto">
                        <span className="text-indigo-500 font-medium text-sm">Engineering Partner</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-indigo-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Partnership Benefits */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] overflow-hidden p-12 relative z-10 mb-16"
                >
                  <h3 className="text-2xl font-bold text-black mb-10 text-center">The Power of Partnership</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-black mb-3">Enhanced Capabilities</h4>
                      <p className="text-[#86868b]">Combined expertise to deliver comprehensive solutions</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-black mb-3">Quality Assurance</h4>
                      <p className="text-[#86868b]">Rigorous standards across all partner services</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-black mb-3">Efficiency</h4>
                      <p className="text-[#86868b]">Streamlined processes and faster delivery</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Call to Action */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-12 text-center relative z-10"
                >
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    BECOME A PARTNER
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
  

        <Footer scrollToSection={scrollToSection} />
      </main>
    </div>
  );
}
