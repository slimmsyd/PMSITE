"use client"
import Services from "../Services"
import React from "react"
import { useState } from "react";
import { motion } from "framer-motion";
import CheckBox from "../components/checkbox";
import Footer from "../components/Footer";
import ContactPopup from "../components/ContactPopup";
export default function TechincalServices() 

{

    const bgImage = 'assets/TailerBG.png"'
    const spanText = "Professional & Technical Services"
    const headerText = "Preeminent Professional + Technical Services"


    const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };


    return ( 
        <>
            <Services
            backgroundImage = {bgImage}
            spanText = {spanText}
            headerText = {headerText}
            
            />


<ContactPopup isOpen={isOpen} togglePopup={togglePopup} />


      <div className="bg-[#003DFA] py-[40px] px-[80px] md:h-[176px]">
        <div className="flex flex-col md:flex-row justify-between gap-[10px]">
          <h2 className="max-w-full md:max-w-[75%]">
            Find out how Preeminent Professional Services can help you care for
            the people, spaces, and places that are important to you.
          </h2>
          <button
           onClick = {() => setIsOpen(!isOpen)}
            className=" w-[130px] h-[50px] text-[15px]"
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
            <h2 className=" text-black ">
            Project Management
                         </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className=" text-black ">
            Processes and Creation            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className=" text-black ">
            Facilities Management/Maintenance            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className=" text-black ">
            Planning & Logistics            
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className=" text-black ">
            Roofing Services            
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className=" text-black ">
Renewable Energy Services            
                </h2>
          </motion.div>



          <div className="flex flex-col mt-4 gap-[7px]">
                    <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                      <CheckBox />
                      Project management experience on large scale projects.
                    </div>
                    <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                      <CheckBox />
                      Planning & Logistics with our implementation of “Quality Control”.
                    </div>
                    <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                      <CheckBox />
                      Communication with our clients
                                          </div>
                    <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                      <CheckBox />
                      Commercial Cleaning/Environmental Services; implemented with “process and                    </div>
                    <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                      <CheckBox />
                      Discipline”. Managed with “quality control” measures, and executed purposeful and detailed use of selected products, and the application of technology is critical to achieving objectives.                   
                      
                       </div>
                  </div>
  
          <div className="flex justify-start flex-row gap-4">
            <a
              href="https://calendly.com/0ncode-info/30min"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Next
            </a>
            <a
              href="#pricing"
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


    )
}