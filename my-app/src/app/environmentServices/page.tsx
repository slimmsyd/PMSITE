"use client";
import Services from "../Services";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import CheckBox from "../components/checkbox";
import Footer from "../components/Footer";
import ContactPopup from "../components/ContactPopup";
export default function TechincalServices() {
  const bgImage = 'assets/Engine.png"';

  const spanText = " Environmental Services";
  const headerText = " Environmental Services";

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
        bgClass={"enviroment"}
        text={
          "We offer professional environmental facilities maintenace & managment services. Our Strength lies in our process & project management approach to providing services. We utilize the experience/backgrounds of our Managament and Advisory Teams to develop effective solutions for our clients."
        }
      />
      <ContactPopup isOpen={isOpen} togglePopup={togglePopup} />

      <div className="bg-[#003DFA] relative z-30 py-[40px] px-[80px] md:h-[176px]">
                <div className="flex flex-col md:flex-row justify-between gap-[10px]">
          {" "}
          <h2 className="max-w-full md:max-w-[75%]">
          Find out how Preeminent Professional Services can help you care for the people, spaces, and places that are important to you.
          </h2>
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
              <h2 className=" text-black ">Pre/Post Construction Clean Up</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className=" text-black ">Hot-Spot" Discovery/ Evaluation</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className=" text-black ">
                Commercial Cleaning/Environmental Services{" "}
              </h2>
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
                Communication with our clients
              </div>
              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                Commercial Cleaning/Environmental Services; implemented with
                “process and discipline”. Managed with “quality control” Measures, and
                executed purposeful and detailed use of selected products, and
                the application of technology is critical to achieving
                objectives.
              </div>
              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                  Specality Cleaning Services; facilities with specifed/special cleaning and/or sanitation requirments
              </div>
            </div>

            <div className="flex justify-start flex-row gap-4">
              <a
            href="/technicalServices" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200"
              >
                Next
              </a>
              <a
                 href="/eventAndStaffing" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#B5B5B5] border border-[#B5B5B5] rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                Previous
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
