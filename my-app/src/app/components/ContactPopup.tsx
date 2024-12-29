"use client";
import Link from "next/link";

import React, { useState } from "react";
interface ContactPopupProps {
  isOpen: boolean;
  togglePopup: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, togglePopup }) => {
  // State to capture form values
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    address: "",
    phoneNumber: "",
    dunsNumber: "",
    industry: "",
    location: "",
    yearsInBusiness: "",
    numberOfTechnicians: "",
    numberOfCommercialVehicles: "",
    reason: "",
    selectedOption: "", // Track the selected option
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target as
      | HTMLInputElement
      | HTMLTextAreaElement;
    const checked =
      type === "checkbox"
        ? (event.target as HTMLInputElement).checked
        : undefined;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleOptionClick = (option: string) => {
    if (option === "hiringJobs") {
      // Redirect to /hiring when "Hiring/Jobs" is clicked
      window.location.href = "/hiring"; // Use window.location to navigate
    } else {
      setFormData((prevData) => ({
        ...prevData,
        selectedOption: option, // Set the selected option
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    // Determine the endpoint based on the selected option
    const endpoint =
      formData.selectedOption === "workWithUs" ||
      formData.selectedOption === "hiringJobs" ||
      formData.selectedOption === "vendorSignUps"
        ? "https://your-endpoint-url.com/hiring" // Endpoint for hiring/vendor/work with us
        : "https://your-endpoint-url.com/general"; // General contact endpoint

    // Send formData to the determined endpoint
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle successful submission
      console.log("Form submitted successfully!");
      togglePopup(); // Close the popup after submission
    } else {
      // Handle errors
      console.error("Error submitting form");
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed bottom-0 w-[488px] right-0 m-4 p-4 bg-white shadow-lg rounded-lg z-50 text-black max-w-[350px] md:bottom-0 bottom-[-33px] overflow-y-auto max-h-screen">
          <div className="mt-4 mb-4">
            <div className="flex items-center w-[55px]">
              <Link href="/">
                <img src="assets/Logo.png" />
              </Link>
            </div>
            <h2 className="text-lg font-bold">Get in contact</h2>
            <p>Work With Us Form</p>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Option Selection as Divs */}

            {/* Form Fields */}
            {formData.selectedOption === "workWithUs" ? (
              <>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  className="w-full form-input mb-2 p-2 border"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Your Name & Title"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Company email Address"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Business Address (not mailing)"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="Location"
                  placeholder="Do you have more than one location"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Contact Number"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="dunsNumber"
                  placeholder="DUNS Number"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="industry"
                  placeholder="Industry You Are In"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="Years"
                  placeholder="Numbers of Years In Business"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />

                <textarea
                  name="reason"
                  placeholder="Additional Information & Reason For Contact"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  className="w-full form-input mb-2 p-2 border"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Your Name & Title"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Company email Address"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Business Address (not mailing)"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="Contact Number"
                  placeholder="Contact Number"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
            
                <input
                  type="text"
                  name="industry"
                  placeholder="Industry of Operation"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="Years"
                  placeholder="Numbers of Years In Business?"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="Vehcies"
                  placeholder="Numbers of Commercial Vehicles?"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />

                {formData.selectedOption === "vendorSignUps" && (
                  <>
                    <input
                      type="text"
                      name="regionsServed"
                      placeholder="Regions You Serve"
                      className="w-full mb-2 p-2 border form-input"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="yearsInBusiness"
                      placeholder="Number of Years in Business"
                      className="w-full mb-2 p-2 border form-input"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="numberOfTechnicians"
                      placeholder="Number of Technicians"
                      className="w-full mb-2 p-2 border form-input"
                      onChange={handleChange}
                    />
                  </>
                )}
                <textarea
                  name="reason"
                  placeholder="Additional Information & Reason For Contact"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />
              </>
            )}

            <div className="mb-2 flex flex-col gap-2">
              {["vendorSignUps", "hiringJobs", "workWithUs"].map((option) => (
                <div
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`p-2 border rounded-lg cursor-pointer ${
                    formData.selectedOption === option
                      ? "bg-black text-white"
                      : "border border-light-gray"
                  }`}
                >
                  {option === "vendorSignUps" && "Vendor sign ups"}
                  {option === "hiringJobs" && "Hiring/Jobs"}
                  {option === "workWithUs" && "Work with us?"}
                </div>
              ))}
            </div>

            <button type="submit" className="bg-black text-white p-2 rounded">
              Submit
            </button>
            <button
              type="button"
              onClick={togglePopup}
              className="ml-2 p-2 border"
            >
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactPopup;
