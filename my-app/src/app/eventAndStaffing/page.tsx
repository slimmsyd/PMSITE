"use client";
import Services from "../Services";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import CheckBox from "../components/checkbox";
import Footer from "../components/Footer";
import ContactPopup from "../components/ContactPopup";
import { getRandomServiceLink } from "@/utils/randomServiceLink";
export default function TechincalServices() {
  const bgImage = 'assets/TailerBG.png"';
  const spanText = " Events and Staffing";
  const headerText = " Event & Staffing Services";

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Services
        backgroundImage={bgImage}
        spanText={spanText}
        headerText={headerText}
        bgClass="event"
        text={`Preeminet Professional Services is proud to provide staffing services for its clientel. 
        We provide temporary staffing for events either commerical private/public with a minimum of notice.
        
        `}
      />
      <ContactPopup isOpen={isOpen} togglePopup={togglePopup} />

      <div className="bg-[#003DFA] relative z-30 py-[40px] px-[80px] md:h-[176px]">
        <div className="flex flex-col md:flex-row justify-between gap-[10px]">
          <h2 className="max-w-full md:max-w-[75%] !text-white">
            Find out how Preeminent Professional Services can help you care for
            the people, spaces, and places that are important to you.
          </h2>
          <p></p>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[130px] h-[50px] text-[15px] hover:bg-white hover:text-black"
            style={{ borderRadius: "8px", border: "0.5px solid white" }}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
      <section className="relative w-full py-12 md:py-24 lg:py-20 xl:py-10 max-w-[500px] m-auto  text-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ul>
                <li>
                  <h2 className=" text-black ">Event Staffing Services</h2>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ul>
                <li>
                  <h2 className=" text-black ">
                    General Labor Staffing Services
                  </h2>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ul>
                <li>
                  <h2 className=" text-black ">
                    Security Services & Patrol Services
                  </h2>
                </li>
              </ul>
            </motion.div>

            <div className="flex flex-col mt-4 gap-[7px]">
              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                Project management experience on large scale projects.
              </div>
              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                Planning & Logistics with our implementation of “Quality
                Control”.
              </div>
              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                Communication with our Clients
              </div>
              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                Ability to operate with small teams
              </div>
              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                Commercial Cleaning/Environmental Services; implemented with
                “process and discipline”. Managed with “quality control”
                Measures, and executed purposeful and detailed use of selected
                products, and the application of technology is critical to
                achieving objectives.
              </div>
              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                Specialty Cleaning Services; facilities with specific/special
                cleaning and/or sanitation requirements.{" "}
              </div>
            </div>

            <div className="flex justify-start flex-row gap-4">
            <a
                href={getRandomServiceLink()} // Use the utility function here
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200"
              >
                Next
              </a>
           
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
