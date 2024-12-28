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
      {/* <section className="relative w-full py-12 md:py-24 lg:py-20 xl:py-10 max-w-[500px] m-auto  text-black">
        <div className="container mx-auto px-4 max-w-6xl">




        </div>
      </section> */}


      <Footer />

            
        
        </>


    )
}