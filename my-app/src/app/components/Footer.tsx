import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface NavigationProps {
  scrollToSection?: (sectionId: string) => void;
  textColor?: boolean;
}

export default function Footer({
  scrollToSection
}: NavigationProps) {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200/30 pt-20 pb-12 bg-[#FAFAFA]">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03)_0%,transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col space-y-5"
            >
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_70%)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">P</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Preeminent</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Revolutionizing facility management through innovation, technology, and sustainable practices for a better future.
              </p>
              
              {/* <div className="flex space-x-4 pt-2">
                {['twitter', 'linkedin', 'facebook', 'instagram'].map((social, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-all duration-300 shadow-sm"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                ))}
              </div> */}
            </motion.div>
          </div>
          
          {/* Navigation Column */}
          <div className="md:col-span-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Navigation</h4>
              
              <ul className="space-y-4">
                {[
                  { name: 'Home', section: 'about' },
                  { name: 'Our Services', section: 'services' },
                  { name: 'Industries We Serve', section: 'industries' },
                  { name: 'About Us', section: 'about' },
                  { name: 'Contact', section: 'contact' }
                ].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection && scrollToSection(item.section)}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                    >
                      <span>{item.name}</span>
                      <svg 
                        className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Newsletter Column */}
          <div className="md:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Stay Updated</h4>
              
              <p className="text-gray-600">
                Subscribe to our newsletter to receive the latest updates and industry insights.
              </p>
              
              <div className="relative">
                <input
                  type="email"

                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-gray-900 rounded-full bg-white/80 border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 backdrop-blur-sm pr-12"
                />
                <button className="absolute right-1.5 top-1.5 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
              
              <div className="pt-4">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-white flex items-center justify-center text-white text-xs">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Join <span className="font-medium">400+</span> subscribers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Preeminent Professional Services. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <a key={index} href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}