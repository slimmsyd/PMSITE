import React from 'react';

interface HiringSubmitButtonProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    resume: File | null;
    linkedIn: string;
    about: string;
  };
  jobTitle: string;
}

const HiringSubmitButton: React.FC<HiringSubmitButtonProps> = ({ formData, jobTitle }) => {
  const handleSubmit = async () => {
    try {
      if (!formData.resume) {
        alert("Please upload your resume before submitting.");
        return;
      }

      console.log("Resume file:", formData.resume);
      console.log("Resume file type:", formData.resume.type);
      console.log("Resume file name:", formData.resume.name);
      console.log("Resume file size:", formData.resume.size);

      // Format phone number if needed
      const formatPhoneNumber = (phoneNumber: string): string => {
        const cleaned = phoneNumber.replace(/\D/g, "");
        if (cleaned.length === 10) {
          return `+1${cleaned}`;
        }
        if (cleaned.length === 11 && cleaned.startsWith("1")) {
          return `+${cleaned}`;
        }
        return cleaned;
      };

      const formattedPhone = formatPhoneNumber(formData.phoneNumber);

      // First, upload the resume file
      const formDataToSend = new FormData();
      formDataToSend.append('resume', formData.resume, formData.resume.name);
      formDataToSend.append('jobTitle', jobTitle);

      // Log the FormData contents
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`FormData entry - ${key}:`, value);
      }

      const fileUploadResponse = await fetch("/api/uploadResume", {
        method: "POST",
        body: formDataToSend,
      });

      if (!fileUploadResponse.ok) {
        const errorText = await fileUploadResponse.text();
        console.error("File upload failed:", errorText);
        throw new Error(`Failed to upload resume: ${errorText}`);
      }

      const resumePath = await fileUploadResponse.text();
      console.log("Resume path:", resumePath);

      // Then send the application data with the resume URL
      const adminEmailResponse = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "inquiries@prmntpro.com",
          name: `${formData.firstName} ${formData.lastName}`,
          company: "",
          email: formData.email,
          phone: formattedPhone,
          message: formData.about,
          subject: `New Job Application for ${jobTitle} Position`,
          content: `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formattedPhone}
LinkedIn: ${formData.linkedIn}
About: ${formData.about}
Resume: ${resumePath}
          `,
          isClientEmail: false,
          option: "careers",
          resumePath: resumePath
        }),
      });

      // Send applicant confirmation
      const clientEmailResponse = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          company: "",
          email: formData.email,
          phone: formattedPhone,
          message: "",
          subject: "Thank you for your application",
          content: "",
          isClientEmail: true,
          option: "careers"
        }),
      });

      if (adminEmailResponse.ok && clientEmailResponse.ok) {
        window.alert("Thank you for your application. We will get back to you shortly.");
      } else {
        throw new Error("Failed to send emails");
      }
    } catch (error) {
      console.error("Failed to submit application:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <button
      onClick={handleSubmit}
      type="button"
      className="global-btn max-w-[180px] !text-white !bg-[#3574d6]"
    >
      Submit Application
    </button>
  );
};

export default HiringSubmitButton; 