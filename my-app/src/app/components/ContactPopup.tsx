"use client";
import { option } from "framer-motion/client";
import Link from "next/link";

import React, { use, useEffect, useState } from "react";
interface ContactPopupProps {
  isOpen: boolean;
  togglePopup: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, togglePopup }) => {
  // State to capture form values
  const initialFormData = {
    companyName: "",
    email: "",
    address: "",
    phoneNumber: "",
    industry: "",
    location: "",
    yearsInBusiness: "",
    numberOfTechnicians: "",
    numberOfCommercialVehicles: "",
    reason: "",
    selectedOption: "", // Track the selected option
    selectedServices: [] as string[], // Add selectedServices here
    regionsServed: ""
  };

  const [formData, setFormData] = useState(initialFormData); // Use initialFormData


const formatPhoneNumber = (phoneNumber: string): string => {
  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Check if it's a US number without country code
  if (cleaned.length === 10) {
    return `+1${cleaned}`;
  }

  // If it already has country code
  if (cleaned.length === 11 && cleaned.startsWith("1")) {
    return `+${cleaned}`;
  }

  return cleaned;
};


  const isValidPhoneNumber = (phoneNumber: string): boolean => {
    // Basic phone validation regex
    const phoneRegex = /^\+1\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  // Submission Form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sending email to:", formData.email);

    // Format the phone number
    const formattedPhone = formatPhoneNumber(formData.phoneNumber);

    // // Validate phone number
    // if (!isValidPhoneNumber(formattedPhone)) {
    //   alert("Please enter a valid US phone number (10 digits)");
    //   return;
    // }

    try {
      // Send form submission
      // const response = await fetch("/api/sendMessage", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: formData.email,
      //     phone: formattedPhone,
      //     industry: formData.industry,
      //     address: formData.address,
      //     companyName: formData.companyName,
      //     location: formData.location,
      //     yearsInBusiness: formData.yearsInBusiness,
      //     numberOfTechnicians: formData.numberOfTechnicians,
      //     numberOfCommercialVehicles: formData.numberOfCommercialVehicles,
      //     reason: formData.reason,
      //     selectedOption: formData.selectedOption,
      //     selectedServices: formData.selectedServices,
      //   }),
      // });

      // Send admin notification
      const adminEmailResponse = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "inquiries@prmntpro.com",
          name: formData.companyName,
          company: formData.companyName,
          email: formData.email,
          phone: formattedPhone,
          message: formData.reason,
          subject: `New ${
            currentOption === "vendorSignUps" ? "Vendor Sign Up" :
            currentOption === "workWithUs" ? "Work With Us" :
            currentOption === "hiringJobs" ? "Career" :
            ""
          } Form Submission on PM Site`,
          content: `
            Email: ${formData.email}
            Phone: ${formattedPhone}
            Company: ${formData.companyName}
            Idea: ${formData.reason}
            Industry: ${formData.industry}
            Address: ${formData.address}
            Location: ${formData.location}
            Years in Business: ${formData.yearsInBusiness}
            Number of Technicians: ${formData.numberOfTechnicians}
            Number of Commercial Vehicles: ${formData.numberOfCommercialVehicles}
            Selected Option: ${formData.selectedOption}
            Selected Services: ${formData.selectedServices.join(", ")}
            ${currentOption === "vendorSignUps" ? `
              Regions Served: ${formData.regionsServed}
              Years in Business: ${formData.yearsInBusiness}
              Number of Technicians: ${formData.numberOfTechnicians}
            ` : ""}
            ${currentOption === "workWithUs" ? `
              Additional Info: ${formData.reason}
            ` : ""}
          `,
          isClientEmail: false,
          option: formData.selectedOption
        }),
      });

      // Send client confirmation
      const clientEmailResponse = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: formData.email,
          name: formData.companyName,
          company: formData.companyName,
          email: formData.email,
          phone: formattedPhone,
          message: formData.reason,
          subject: "Thank you for your submission",
          content: `
.`, // The content will be set in the route
          isClientEmail: true,
          option: formData.selectedOption
        }),
      });
      console.log("Logging the formData", formData)

      if (adminEmailResponse.ok && clientEmailResponse.ok) {
        // Reset formData to initial state
        setFormData(initialFormData); // Reset to initialFormData
      }

      window.alert("Thank you for your submission. We will get back to you shortly.")
    } catch (error) {
      console.error("Failed to submit form:", error);
      alert("Something went wrong. Please try again.");
    }
  };


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


  const [currentOption, setCurrentOption] = useState<string>("")
  const handleOptionClick = (option: string) => {
    console.log("Logging optoin on click", option)
    if (option === "hiringJobs") {
      setCurrentOption(option)
      // Redirect to /hiring when "Hiring/Jobs" is clicked
      window.location.href = "/hiring"; // Use window.location to navigate
    } else {
      setFormData((prevData) => ({
        ...prevData,
        selectedOption: option, // Set the selecte option
      }));
      setCurrentOption(option)

    }
  };

  useEffect(() => { 

    console.log("Logging the current Option", currentOption)

  },[currentOption])
  const handleServiceClick = (service: string) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedServices: prevData.selectedServices.includes(service)
        ? prevData.selectedServices.filter((s) => s !== service) // Remove service if already selected
        : [...prevData.selectedServices, service], // Add service if not selected
    }));
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
                  required
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Your Name & Title"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Company email Address"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Business Address (not mailing)"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                  required
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
                  required
                />
             
                <input
                  type="text"
                  name="industry"
                  placeholder="Industry You Are In"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="Years"
                  placeholder="Numbers of Years In Business"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="reason"
                  placeholder="Additional Information & Reason For Contact"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                />

<div className="my-2 flex flex-col gap-2">
              <label className="text-black text-[14px]">Services to be requested (Select all that apply)</label>
              {["Pro + Technical Services", "Enviromental Services", "Prof Events & Staffing", "EV Services"].map((service) => (
                <div
                  key={service}
                  onClick={() => handleServiceClick(service)}
                  className={`p-2 border rounded-lg cursor-pointer ${
                    formData.selectedServices.includes(service)
                      ? "bg-black text-white"
                      : "border border-light-gray"
                  }`}
                >
                  {service}
                </div>
              ))}
            </div>
            
              <div className="w-full h-[0.5px] my-4 bg-gray-300"></div>

              </>

            ) : (
              <>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  className="w-full form-input mb-2 p-2 border"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Your Name & Title"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Company email Address"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Business Address (not mailing)"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="Contact Number"
                  placeholder="Contact Number"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                  required
                />
            
                <input
                  type="text"
                  name="industry"
                  placeholder="Industry of Operation"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="Years"
                  placeholder="Numbers of Years In Business?"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="Vehcies"
                  placeholder="Numbers of Commercial Vehicles?"
                  className="w-full mb-2 p-2 border form-input"
                  onChange={handleChange}
                  required
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
                      required
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
