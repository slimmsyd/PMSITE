"use client";

import Navigation from "./components/nav";
import { useState, useEffect } from "react";
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
  console.log("Logging end point", endpoint);

  useEffect(() => {
    setIsEvServices(window.location.pathname === "/evServices");
  }, []);
  useEffect(() => {
    setIsStaffing(window.location.pathname === "/eventAndStaffing");
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navigation />
      <div className="overlay"></div>

      <header
        className={`header-bg ${bgClass} relative !h-[80vh]`}
        style={{ backgroundImage: `url(${backgroundImage}) !important` }}
      >
        <div className="overlay"></div>
        <div className="px-4 md:px-28 flex flex-col gap-[20px] items-start justify-start text-left relative z-10 mr-auto max-w-[1080px]">
          <span>{spanText}</span>
          <h1 className="!text-left text-white">{headerText}</h1>
          <p>{text}</p>

          {isStaffing && (
            <>
              <p>
                Our staffing personanel are vetted & background-checked prior to
                assignment
              </p>
              <p>
                If you have a staffing need, contact us and let us provide a
                solution.
              </p>
          
              
            </>
          )}

          {isEvServices && (
            <ul>
              {/* <li>Advisory/Consultation</li>
              <li>Site Design</li>
              <li>Site Prep</li>
              <li>Installation</li>
              <li>Commissioning</li>
              <li>Maintenance</li> */}
              {/* <p>
                We have professional relationships with ReadyCharge Services
                Inc, FLO Network, EV Connect,
              </p>
              <p>
                and Blink Network. We also have the ability to help clients
                finance and procure Infrastructure equipment.
              </p> */}
              <p></p>
            </ul>
          )}
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
