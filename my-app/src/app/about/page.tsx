"use client";

import Nav from "../components/nav";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ChatPopup from "../components/ChatPopup";
import ContactPopup from "../components/ContactPopup";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Add state for contact popup
  const [showContactPopup, setShowContactPopup] = useState(false);
  
  // Function to toggle contact popup
  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup);
  };

  // Enhanced animation variants with Apple-like smooth transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const scaleUpVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Custom hook for scroll-triggered animations
  function useScrollAnimation() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    
    return {
      ref,
      animate: isInView ? "visible" : "hidden"
    };
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Ambient background gradients */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(59,130,246,0.08)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,_rgba(59,130,246,0.08)_0%,transparent_50%)] pointer-events-none"></div>
      
      {/* Blurred background images */}
      <div className="fixed top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-blue-100 opacity-30 blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-indigo-100 opacity-20 blur-3xl pointer-events-none"></div>
      
      <Nav scrollToSection={scrollToSection} />
      <ChatPopup />
      {showContactPopup && <ContactPopup isOpen={showContactPopup} togglePopup={toggleContactPopup} />}

      <main className="pt-32 pb-16 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              About <span className="text-blue-600 relative">
                Preeminent
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full opacity-70"></span>
              </span> Professional Services
            </h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Revolutionizing facility management through innovation, technology, and sustainable practices.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-32"
          >
            {/* Story Section */}
            <section className="grid md:grid-cols-12 gap-16 items-center">
              {/* <motion.div 
                {...useScrollAnimation()} 
                variants={itemVariants} 
                className="md:col-span-5 space-y-6"
              >
                <div className="inline-block px-4 py-1.5 bg-blue-50/80 rounded-full text-blue-700 text-sm font-medium mb-2 shadow-sm backdrop-blur-sm border border-blue-100/50">Our Journey</div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">Our Story</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Preeminent Professional Services was founded with a vision to revolutionize the facilities maintenance and management industry. As a certified NMSDC MBE firm, we've built our reputation on delivering excellence through innovation and unwavering commitment to our clients' success.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We pride ourselves on creating customized solutions that perfectly align with each client's unique needs and challenges.
                </p>
                <div className="pt-4">
                  <button className="group flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn more about our history
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div> */}
        
            </section>

            {/* Mission Section */}
            {/* <section className="grid md:grid-cols-12 gap-16 items-center">
              <motion.div 
                {...useScrollAnimation()} 
                variants={scaleUpVariants}
                className="md:col-span-7 md:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-700 via-blue-600 to-blue-500 opacity-90"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2)_0%,transparent_60%)]"></div>
                <div className="absolute inset-0 backdrop-blur-[100px]"></div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl">💡</span>
                    </div>
                  </div>
                </motion.div>
                
                <div className="absolute bottom-8 left-8 z-20 text-white">
                  <p className="text-sm uppercase tracking-wider font-medium text-blue-100">Our Vision</p>
                  <h3 className="text-2xl font-bold mt-2">Transforming Industry Standards</h3>
                </div>

                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl transform -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-black/20 to-transparent rounded-full blur-2xl"></div>
              </motion.div>
              <motion.div 
                {...useScrollAnimation()} 
                variants={itemVariants} 
                className="md:col-span-5 md:order-1 space-y-6"
              >
                <div className="inline-block px-4 py-1.5 bg-blue-50/80 rounded-full text-blue-700 text-sm font-medium mb-2 shadow-sm backdrop-blur-sm border border-blue-100/50">Our Purpose</div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">Our Mission</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We strive to bring an eons-old industry into the 21st century through process, technology, and impact. Our mission is to transform traditional facility management by implementing innovative solutions that enhance both the physical environment and the experience of those who occupy it.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  By combining cutting-edge technology with sustainable practices, we create solutions that not only meet today's needs but anticipate tomorrow's challenges.
                </p>
                <div className="pt-4">
                  <button className="group flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Discover our approach
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </section> */}

            {/* Team Section */}
            <motion.section 
              {...useScrollAnimation()} 
              variants={fadeInVariants} 
              className="space-y-12 relative"
            >
              {/* Ethereum-inspired background elements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1)_0%,transparent_50%)] pointer-events-none"></div>
              <div className="absolute w-full h-full">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
              </div>

              <div className="text-center mb-20 relative">
                <div className="inline-block px-6 py-2 bg-indigo-50/80 rounded-2xl text-indigo-700 text-sm font-medium mb-4 shadow-lg shadow-indigo-500/20 backdrop-blur-sm border border-indigo-100/50">
                  Leadership & Innovation
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mt-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900">
                  Our Leadership Team
                </h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 mx-auto mt-8 rounded-full"></div>
                <p className="text-gray-600 max-w-3xl mx-auto mt-8 text-xl leading-relaxed">
                  Bringing together decades of expertise in technology, sustainability, and innovation to transform the future of facility management
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                {[
                  {
                    name: "Brett Parson",
                    title: "C.E.O/President of Operations",
                    gradient: "from-indigo-600 via-blue-500 to-indigo-700",
                    bio: "A visionary leader with extensive experience in renewable energy and infrastructure development. Brett's innovative approach has revolutionized how we think about facility management.",
                    highlights: [
                      "Lead Over 10 MW Solar Projects to PTO",
                      "DC commercial solar lead",
                      "Infrastructure & renewable energy expert",
                      "Pioneer in sustainable facility solutions",
                      "Strategic partnerships development"
                    ],
                    stats: [
                      { label: "Projects Led", value: "50+" },
                      // { label: "Team Size", value: "100+" },
                      // { label: "Revenue Growth", value: "300%" }
                    ]
                  },
                  {
                    name: "Derrick Landers",
                    title: "Business Development and Compliance Officer",
                    gradient: "from-blue-700 via-indigo-600 to-blue-500",
                    bio: "A strategic leader with deep expertise in equipment management and regulatory compliance. Derrick's experience ensures our operations meet the highest industry standards.",
                    highlights: [
                      "20+ years Equipment Management",
                      "Commercial EV Fleet infrastructure expert",
                      "15+ years IRS experience",
                      "Regulatory compliance specialist",
                      "Strategic planning leader"
                    ],
                    stats: [
                      // { label: "Compliance Rate", value: "100%" },
                      // { label: "Projects Overseen", value: "200+" },
                      // { label: "Cost Savings", value: "$2M+" }
                    ]
                  },
                  {
                    name: "Naja Andrews",
                    title: "Technical Advisor",
                    gradient: "from-indigo-500 via-blue-600 to-indigo-700",
                    bio: "A transformational leader focused on building high-performing teams and streamlining operations. Naja's expertise in change management drives our organizational excellence.",
                    highlights: [
                      "HR and Customer Service Leader",
                      "Process improvement specialist",
                      "Change management expert",
                      "Team development strategist",
                      "Operations optimization"
                    ],
                    stats: [
                      // { label: "Team Satisfaction", value: "96%" },
                      // { label: "Process Efficiency", value: "+75%" },
                      // { label: "Training Programs", value: "25+" }
                    ]
                  },
                  {
                    name: "Abdulrahman  Kargbo",
                    title: "Technical Advisor/Designer",
                    gradient: "from-blue-600 via-indigo-500 to-blue-700",
                    bio: "A pioneering force in distributed energy resources and grid modernization. Abdulrahman's expertise drives our technological innovation and sustainable energy solutions.",
                    highlights: [
                      "M.Eng in Power Systems Engineering",
                      "Led 6MW CREF facility implementations",
                      "Expert in grid decarbonization & EV adoption",
                      "Advanced analytics implementation",
                      "Sustainable energy innovation"
                    ],
                    stats: [
                      // { label: "MW Managed", value: "50+" },
                      // { label: "Innovation Patents", value: "3" },
                      // { label: "System Efficiency", value: "+85%" }
                    ]
                  }
                ].map((member, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="bg-white/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group backdrop-blur-xl border border-gray-100/50"
                  >
                    <div className={`relative h-48 bg-gradient-to-br ${member.gradient} group-hover:scale-[1.02] transition-transform duration-700`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_60%)]"></div>
                      <div className="absolute inset-0 backdrop-blur-[100px]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-24 h-24">
                          <div className="absolute inset-0 bg-white/10 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-700"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            {/* <span className="text-5xl">{member.emoji}</span> */}
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-6 text-white">
                        <p className="text-sm font-medium opacity-90 tracking-wide">{member.title}</p>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">{member.name}</h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-600 mb-5"></div>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>

                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {member.stats.map((stat, i) => (
                          <div key={i} className="text-center p-3 rounded-xl bg-gray-50/50 backdrop-blur-sm border border-gray-100/50">
                            <div className="text-xl font-bold text-indigo-600">{stat.value}</div>
                            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        {member.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start text-gray-600 leading-relaxed">
                            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <button 
                          onClick={toggleContactPopup}
                          className="w-full group bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <span>Connect & Collaborate</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Values Section */}
            <motion.section 
              {...useScrollAnimation()} 
              variants={fadeInVariants} 
              className="bg-white/80 rounded-3xl p-12 shadow-xl relative overflow-hidden border border-gray-100/50 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent)] pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
              
              <div className="text-center mb-16 relative z-10">
                <div className="inline-block px-4 py-1.5 bg-blue-50/80 rounded-full text-blue-700 text-sm font-medium mb-2 shadow-sm backdrop-blur-sm border border-blue-100/50">What Drives Us</div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mt-4">Our Values</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 mx-auto mt-8 rounded-full"></div>
                <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
                  These core principles guide our approach to every project and relationship
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  { 
                    title: "Innovation", 
                    description: "Pushing boundaries in facility management by embracing new technologies and methodologies to deliver cutting-edge solutions.",
                    emoji: "💡",
                    gradient: "from-blue-600 to-blue-500"
                  },
                  { 
                    title: "Excellence", 
                    description: "Delivering outstanding results consistently through attention to detail and unwavering commitment to quality in everything we do.",
                    emoji: "✨",
                    gradient: "from-blue-700 to-blue-600"
                  },
                  { 
                    title: "Sustainability", 
                    description: "Creating lasting positive impact on our environment and communities through responsible practices and forward-thinking solutions.",
                    emoji: "🌍",
                    gradient: "from-blue-500 to-blue-700"
                  }
                ].map((value, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="bg-gradient-to-b from-white/80 to-white/40 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border border-gray-100/50 text-center group relative backdrop-blur-sm"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-t-xl"></div>
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} mb-6 group-hover:scale-110 transition-transform duration-500 relative`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_60%)] rounded-2xl"></div>
                      <span className="text-4xl relative z-10">{value.emoji}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section 
              {...useScrollAnimation()} 
              variants={scaleUpVariants} 
              className="rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2)_0%,transparent_60%)]"></div>
              <div className="absolute inset-0 backdrop-blur-[100px]"></div>
              
              <div className="relative z-10 p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">Ready to transform your facility management?</h2>
                <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join the growing list of organizations that trust Preeminent Professional Services for innovative facility solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <button 
                    onClick={toggleContactPopup}
                    className="px-8 py-4 bg-white/90 text-blue-600 rounded-full font-medium hover:bg-white transition-all hover:shadow-xl hover:shadow-white/20 focus:ring-4 focus:ring-white/30 focus:outline-none transform hover:-translate-y-1 backdrop-blur-sm">
                    Contact Us
                  </button>
                  <button className="px-8 py-4 bg-blue-500/90 text-white rounded-full font-medium hover:bg-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/30 focus:ring-4 focus:ring-blue-400/30 focus:outline-none transform hover:-translate-y-1 backdrop-blur-sm">
                    View Services
                  </button>
                </div>
                
                {/* <div className="mt-12 flex justify-center space-x-8">
                  {["Google", "Microsoft", "Amazon", "Tesla", "IBM"].map((client, index) => (
                    <div key={index} className="text-white/60 font-medium">{client}</div>
                  ))}
                </div> */}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-black/20 to-transparent rounded-full blur-2xl"></div>
            </motion.section>
          </motion.div>
        </div>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}