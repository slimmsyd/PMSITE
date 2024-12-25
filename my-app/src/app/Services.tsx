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
}

const Services: React.FC<Servce> = ({ backgroundImage , spanText, headerText}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navigation />

      <header
        className="header-bg tech relative !h-[80vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay"></div> {/* Added overlay div */}
        <div className="oversslay"></div> {/* Added overlay div */}
        <div className="px-4 md:px-28 flex flex-col gap-[30px] items-start justify-start text-left relative z-10 mr-auto max-w-[1080px]">
          <span>{spanText}</span>
          <h1 className="!text-left text-white">
            {headerText}
          </h1>
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
