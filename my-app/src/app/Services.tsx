"use client";
import Navigation from "./components/nav";
import { useState } from "react";
import { motion } from "framer-motion";
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

const Services: React.FC<Servce> = ({ backgroundImage, spanText, headerText, bgClass, text, endpoint }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("Logging end point", endpoint)

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navigation />
      <div className="overlay"></div>

      <header
        className={`header-bg ${bgClass} relative !h-[80vh]`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {endpoint === '/technicalServices' && (
          <video
            autoPlay
            loop
            muted
            className="absolute pointer-events-none inset-0 w-full h-full object-cover"
          >
            <source src="assets/world_.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="overlay"></div>
        <div className="px-4 md:px-28 flex flex-col gap-[30px] items-start justify-start text-left relative z-10 mr-auto max-w-[1080px]">
          <span>{spanText}</span>
          <h1 className="!text-left text-white">
            {headerText}
          </h1>
          <p>
            {text}
          </p>
          <button
            className="global-btn"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            CONTACT US
          </button>
        </div>

        <ContactPopup isOpen={isOpen} togglePopup={togglePopup} />
      </header>
    </div>
  );
};

export default Services;
