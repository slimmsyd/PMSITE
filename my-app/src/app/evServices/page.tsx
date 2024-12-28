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

    const bgImage = 'assets/energy.png"'
    const spanText = "EV Services"
    const headerText = " EV Services"


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
            bgClass="energy"
            text = "We provide turn-key services for the Electification of your commerical fleet or  individual/company vechicle(s). These services include (but not limited to).. "
            // endpoint="/technicalServices"

            
            />


<ContactPopup isOpen={isOpen} togglePopup={togglePopup} />


      <div className="bg-[#003DFA] relative z-30 py-[40px] px-[80px] md:h-[176px]">
        <div className="flex flex-col md:flex-row justify-between gap-[10px]">
          <h2 className="max-w-full md:max-w-[75%]">
            Find out how Preeminent Professional Services can help you care for
            the people, spaces, and places that are important to you.
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
            <p>
            We have professional relationships with ReadyCharge Services Inc, FLO Network, EV Connect,

and Blink Network. We also have the ability to help clients finance and procure Infrastructure equipmen
            </p>
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ul>
                <li>
                  <h2 className=" text-black ">Advisory/Consultation
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
                  Site Design
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
                  <h2 className=" text-black ">Site Prep</h2>
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
                  <h2 className=" text-black ">Installation</h2>
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
                  <h2 className=" text-black ">Commissioning</h2>
                </li>
              </ul>
            </motion.div>
        */}
            <div className="flex flex-col mt-4 gap-[7px]">
              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                Advisory/Consultation
                
              </div>
              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                Site Design
                
              </div>
           
              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                Site Prep
              </div>

              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                Installation
              </div>
              <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                <CheckBox />
                Maintenance
              </div>
            </div>

            <div className="flex justify-start flex-row gap-4">
              <a
                href="/environmentServices"
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


    )
}