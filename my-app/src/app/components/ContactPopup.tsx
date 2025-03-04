"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

interface ContactPopupProps {
  isOpen: boolean;
  togglePopup: () => void;
}

// Move initialFormData outside the component to prevent recreation on each render
const defaultFormData = {
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
  selectedOption: "workWithUs", // Set default option
  selectedServices: [] as string[],
  regionsServed: "",
  title: ""
};

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, togglePopup }) => {
  // State to capture form values
  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Reset form when popup opens/closes
    setFormData({...defaultFormData});
    setSubmitSuccess(false);
  }, [isOpen]); // Remove initialFormData from dependencies

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
    setIsSubmitting(true);
    
    // Format the phone number
    const formattedPhone = formatPhoneNumber(formData.phoneNumber);

    try {
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

      if (adminEmailResponse.ok && clientEmailResponse.ok) {
        // Reset formData to initial state
        setFormData(defaultFormData);
        setSubmitSuccess(true);
      }
      
      setIsSubmitting(false);
    } catch (error) {
      console.error("Failed to submit form:", error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target as HTMLInputElement | HTMLTextAreaElement;
    const checked = type === "checkbox" ? (event.target as HTMLInputElement).checked : undefined;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [currentOption, setCurrentOption] = useState<string>("workWithUs");
  
  const handleOptionClick = (option: string) => {
    if (option === "hiringJobs") {
      setCurrentOption(option);
      // Redirect to /hiring when "Hiring/Jobs" is clicked
      window.location.href = "/hiring";
    } else {
      setFormData((prevData) => ({
        ...prevData,
        selectedOption: option,
      }));
      setCurrentOption(option);
    }
  };

  const handleServiceClick = (service: string) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedServices: prevData.selectedServices.includes(service)
        ? prevData.selectedServices.filter((s) => s !== service)
        : [...prevData.selectedServices, service],
    }));
  };

  // Available services
  const services = [
    { id: "proTech", name: "Pro + Technical Services", icon: "💼" },
    { id: "environmental", name: "Environmental Services", icon: "🌱" },
    { id: "staffing", name: "Prof Events & Staffing", icon: "👥" },
    { id: "ev", name: "EV Services", icon: "⚡" }
  ];

  // Form options
  const formOptions = [
    { id: "workWithUs", name: "Work with us", icon: "🤝" },
    { id: "vendorSignUps", name: "Vendor sign ups", icon: "📋" },
    { id: "hiringJobs", name: "Careers", icon: "💼" }
  ];

  // Input field styling - Updated for white text
  const inputClasses = `
    w-full mb-3 p-3 
    bg-white/5 backdrop-blur-xl 
    border border-white/10 
    rounded-xl
    focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 
    focus:outline-none 
    transition-all duration-300 
    text-white text-sm
    placeholder:text-gray-300
    shadow-[0_2px_4px_rgba(0,0,0,0.02)]
    hover:bg-white/10
  `;

  // Success animation variants
  const successVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/5 backdrop-blur-[2px] z-40"
            onClick={togglePopup}
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="fixed bottom-0 right-0 m-4 z-50 w-full max-w-[400px]"
          >
            <div className="
              relative
              bg-gradient-to-br from-white/10 to-white/5
              backdrop-blur-2xl
              rounded-2xl
              shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]
              overflow-hidden
              border border-white/20
              before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/10 before:to-purple-500/10 before:opacity-30
            ">
              {/* Header - More compact */}
              <div className="relative bg-gradient-to-br from-blue-600/90 to-blue-800/90 backdrop-blur-xl p-5 text-white overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-[300px] h-[300px] -top-[150px] -right-[150px] bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute w-[200px] h-[200px] -bottom-[100px] -left-[100px] bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <button 
                  onClick={togglePopup}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:rotate-90 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="relative flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-xl flex items-center justify-center mr-3 shadow-lg">
                    <Image 
                      src="/assets/Logo.png" 
                      alt="Logo" 
                      width={28}
                      height={28}
                      className="object-contain" 
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">Get in touch</h2>
                    <p className="text-blue-100/80 text-xs">We'd love to hear from you</p>
                  </div>
                </div>
                
                {/* Form Options - More compact grid */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {formOptions.map((option) => (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOptionClick(option.id)}
                      className={`
                        py-2 px-3 rounded-lg text-xs font-medium 
                        transition-all duration-300 
                        flex items-center justify-center gap-1.5
                        backdrop-blur-xl
                        ${formData.selectedOption === option.id
                          ? "bg-white text-blue-700 shadow-lg shadow-blue-500/20"
                          : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                        }
                      `}
                    >
                      <span className="text-sm">{option.icon}</span>
                      <span>{option.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {/* Form Body - More compact with better scroll area */}
              <div className="p-5 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {submitSuccess ? (
                  <motion.div 
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-xl rounded-xl flex items-center justify-center mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-xl animate-pulse"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Thank you!</h3>
                    <p className="text-gray-500 text-sm mb-6">Your submission has been received. We'll be in touch soon.</p>
                    <motion.button
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={togglePopup}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                    >
                      Close
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {formData.selectedOption === "workWithUs" ? (
                      <>
                        <div className="space-y-3">
                          {/* Two-column layout for shorter inputs */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                              <input
                                type="text"
                                name="companyName"
                                placeholder="Company Name"
                                className={inputClasses}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="relative">
                              <input
                                type="text"
                                name="title"
                                placeholder="Your Name & Title"
                                className={inputClasses}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                              <input
                                type="email"
                                name="email"
                                placeholder="Company Email"
                                className={inputClasses}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="relative">
                              <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Contact Number"
                                className={inputClasses}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="relative">
                            <input
                              type="text"
                              name="address"
                              placeholder="Business Address"
                              className={inputClasses}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                              <input
                                type="text"
                                name="industry"
                                placeholder="Industry"
                                className={inputClasses}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="relative">
                              <input
                                type="text"
                                name="yearsInBusiness"
                                placeholder="Years in Business"
                                className={inputClasses}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="relative">
                            <textarea
                              name="reason"
                              placeholder="Additional Information & Reason For Contact"
                              className={`${inputClasses} min-h-[80px] resize-none`}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-white text-sm font-medium px-1">Services Requested</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {services.map((service) => (
                              <motion.div
                                key={service.id}
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleServiceClick(service.name)}
                                className={`
                                  p-3 rounded-lg cursor-pointer 
                                  transition-all duration-300 
                                  flex items-center gap-2
                                  backdrop-blur-xl text-sm
                                  ${formData.selectedServices.includes(service.name)
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                                  }
                                `}
                              >
                                <span className="text-base">{service.icon}</span>
                                <span className="text-xs font-medium">{service.name}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-4">
                          <input
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            className={inputClasses}
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="text"
                            name="title"
                            placeholder="Your Name & Title"
                            className={inputClasses}
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="email"
                            name="email"
                            placeholder="Company Email Address"
                            className={inputClasses}
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="text"
                            name="address"
                            placeholder="Business Address"
                            className={inputClasses}
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Contact Number"
                            className={inputClasses}
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="text"
                            name="industry"
                            placeholder="Industry of Operation"
                            className={inputClasses}
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="text"
                            name="yearsInBusiness"
                            placeholder="Number of Years In Business"
                            className={inputClasses}
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="text"
                            name="numberOfCommercialVehicles"
                            placeholder="Number of Commercial Vehicles"
                            className={inputClasses}
                            onChange={handleChange}
                            required
                          />

                          {formData.selectedOption === "vendorSignUps" && (
                            <>
                              <input
                                type="text"
                                name="regionsServed"
                                placeholder="Regions You Serve"
                                className={inputClasses}
                                onChange={handleChange}
                              />
                              <input
                                type="text"
                                name="numberOfTechnicians"
                                placeholder="Number of Technicians"
                                className={inputClasses}
                                onChange={handleChange}
                              />
                            </>
                          )}
                          
                          <textarea
                            name="reason"
                            placeholder="Additional Information & Reason For Contact"
                            className={`${inputClasses} min-h-[120px] resize-none`}
                            onChange={handleChange}
                          />
                        </div>
                      </>
                    )}

                    <div className="pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`
                          w-full py-3 px-4
                          bg-gradient-to-r from-blue-600 to-blue-700
                          hover:from-blue-500 hover:to-blue-600
                          text-white text-sm font-medium rounded-lg
                          shadow-lg shadow-blue-500/20
                          hover:shadow-xl hover:shadow-blue-500/30
                          transition-all duration-300
                          flex items-center justify-center
                          backdrop-blur-xl
                          disabled:opacity-70 disabled:cursor-not-allowed
                        `}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Submit
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
              
              {/* Footer - More compact */}
              <div className="px-5 py-3 bg-gradient-to-br from-gray-50/5 to-gray-50/2 backdrop-blur-xl border-t border-white/10">
                <p className="text-[10px] text-gray-400 text-center">
                  By submitting this form, you agree to our <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Privacy Policy</a> and <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Terms of Service</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
