"use client"

import React, { useState } from 'react';
interface ContactPopupProps {
    isOpen: boolean;
    togglePopup: () => void;
  }

  const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, togglePopup }) => {



  return (
    <div>
   

      {isOpen && (
        <div className="fixed bottom-0 w-[488px] right-0 m-4 p-4 bg-white shadow-lg rounded-lg z-50 text-black max-w-[350px]">
          <h2 className="text-lg font-bold">Get in contact</h2>
          <p>Work With Us Form</p>
          <form>
            <input type="text" placeholder="Company Name" className="w-full mb-2 p-2 border" />
            <input type="email" placeholder="Company email Address" className="w-full mb-2 p-2 border" />
            <input type="text" placeholder="Business Address (not mailing)" className="w-full mb-2 p-2 border" />
            <input type="tel" placeholder="Cell Phone Number" className="w-full mb-2 p-2 border" />
            <input type="text" placeholder="Industry of Operation" className="w-full mb-2 p-2 border" />
            <input type="text" placeholder="Where are you located?" className="w-full mb-2 p-2 border" />
            <input type="text" placeholder="Your Title" className="w-full mb-2 p-2 border" />
            <textarea placeholder="Reason for Contact" className="w-full mb-2 p-2 border" />
            <div className="mb-2">
              <label>
                <input type="checkbox" /> Vendor sign ups
              </label>
              <label>
                <input type="checkbox" /> Hiring/Jobs
              </label>
              <label>
                <input type="checkbox" /> Work with us?
              </label>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Submit
            </button>
            <button type="button" onClick={togglePopup} className="ml-2 p-2 border">
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactPopup;