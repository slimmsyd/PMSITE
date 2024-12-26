"use client";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import { RefObject } from "react";


import { useRouter } from "next/navigation";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import "@rainbow-me/rainbowkit/styles.css";



interface NavigationProps {
  scrollToSection?: (sectionId: string) => void;
  refSection1?: RefObject<HTMLDivElement>;
  refSection2?: RefObject<HTMLDivElement>;
  refSection3?: RefObject<HTMLDivElement>;
  refSection4?: RefObject<HTMLDivElement>;
  textColor?: boolean;
}

export default function Navigation({
  scrollToSection,
  refSection1,
  refSection2,
  refSection3,
  refSection4,
  textColor,
}: NavigationProps) {
  const [showBG, setShowBG] = useState<boolean>(false);
  const router = useRouter();
  const showNavBG = () => {
    setShowBG(!showBG);
  };

  const mobileNavBtn = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    }

    setShowBG(!showBG);
  };

  useEffect(() => {
    console.log("Logging the Show BG show", showBG);
  }, [showBG]);


  //check if user is connected our not


  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 30) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [showDropdown, setShowDropdown] = useState<boolean>(false); // State to manage dropdown visibility

  return (
    <div className={`
      fixed top-[25px] left-1/2 transform -translate-x-1/2 z-50 w-full
      ${isVisible ? 'max-w-[93%]' : 'max-w-[80%]'}
      transition-all duration-300 ease-in-out
    `}>
      <div className="flex items-center justify-between px-8 h-[48px] py-4 w-full border border-[#F0F0F0] rounded-[10px] bg-white">
        {/* Logo */}
        <div className="flex items-center w-[55px]">
          <Link href = "/">
          <img  src = "assets/Logo.png" />
          </Link>



        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="nav-link hover:text-gray-300 cursor-pointer" onClick={() => mobileNavBtn('about')}>ABOUT US</div>
          <div className="nav-link hover:text-gray-300 cursor-pointer" onClick={() => mobileNavBtn('services')}>OUR SERVICES</div>
          <div className="nav-link hover:text-gray-300 cursor-pointer" onClick={() => mobileNavBtn('industries')}>INDUSTRIES WE SERVE</div>
          <div className="nav-link hover:text-gray-300 cursor-pointer" onClick={() => mobileNavBtn('careers')}>CAREERS</div>
        </div>

        {/* Connect Wallet Button */}
     

        {/* Mobile Menu Button */}
        <div className="md:hidden z-30 ">
          <button 
            onClick={() => showNavBG()} 
            className="mobile-nav-container z-30 w-6 h-6 flex items-center justify-center"
          >
            <svg
              className={`${showBG ? "nav-svg" : ""} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                fillRule="evenodd"
                d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {showBG && (
          <div className="absolute text-black top-16 left-0 right-0 bg-white p-4 md:hidden rounded-[10px] border border-[#F0F0F0] shadow-lg">
            <div className="flex flex-col space-y-4">
              <div 
                className="nav-link hover:text-gray-300 cursor-pointer py-2"
                onClick={() => mobileNavBtn('about')}
              >
                About us
              </div>
              <div 
                className="nav-link text-black hover:text-gray-300 cursor-pointer py-2"
                onClick={() => mobileNavBtn('services')}
              >
                Ecosystem
              </div>
              <div 
                className="nav-link hover:text-gray-300 cursor-pointer py-2"
                onClick={() => mobileNavBtn('industries')}
              >
                Industries we serve
              </div>
              <div 
                className="nav-link hover:text-gray-300 cursor-pointer py-2"
                onClick={() => mobileNavBtn('careers')}
              >
                Case Studies
              </div>
              
            
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
