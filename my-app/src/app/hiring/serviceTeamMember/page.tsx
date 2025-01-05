"use client";
import Link from "next/link";
import { FormEvent, useState, useCallback } from "react";
import HiringSubmitButton from "../../components/HiringSubmitButton";
import { useDropzone } from 'react-dropzone';

export default function Hiring() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        resume: null as File | null,
        linkedIn: "",
        about: "",
        hasVehicle: ""
    });

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file && (file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
            setFormData(prev => ({ ...prev, resume: file }));
        } else {
            alert("Please upload a PDF or DOCX file");
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        },
        maxFiles: 1
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && (file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
            setFormData(prev => ({ ...prev, resume: file }));
        } else {
            alert("Please upload a PDF or DOCX file");
        }
    };

    return (
        <div className="text-black p-8 max-w-[950px] m-auto">
            {/* Logo */}
            <div className="flex items-center justify-between w-[100%]">
                
                <Link href="/"
                className = "w-[55px]"
                >
                    <img src="../assets/Logo.png" />
                </Link>

                <Link
                className = "text-[#3574d6]"
                href = "/hiring">
                    Back To Jobs
                </Link>
            </div>
            <header>
                {/* <div className="flex flex-col gap-2 my-4">
                    <h1 className="text-[33px]">
                        Current Openings at Preeminent Professional Services
                    </h1>
                    <h2 className="font-bold">About Preeminent Professional Services</h2>
                    <p>
                        We strive to bring an eons old industry into the 21st century
                        through process, technology, & impact. We provide a unique approach
                        to facilities maintenance* managment, utilzing process engineering
                        skills to develop non-traditional services models with technological
                        advancments.
                    </p>
                </div> */}
            </header>
            <div className="flex flex-col gap-[20px]">
                <h2 className="font-bold">About You</h2>
                <p>
                    As a Service Team Member, you are a proactive problem solver with a strong understanding of facilities operations and management. You excel in dynamic environments, build strong relationships, and ensure client satisfaction by delivering tailored solutions on the ground.
                </p>
            </div>
            <div className="flex flex-col gap-[20px] my-[30px]">
                <h2 className="text-[20px] font-bold">Responsibilities</h2>
                <ul>
                    <li>Collaborate with clients to identify needs and provide tailored solutions for facility operations and maintenance.</li>
                    <li>Conduct on-site evaluations to ensure compliance with standards and recommend improvements for efficiency and safety.</li>
                    <li>Serve as a liaison between the operations team, contractors, and clients to ensure seamless communication and execution of projects.</li>
                    <li>Develop and implement processes to optimize maintenance schedules and reduce operational downtime.</li>
                    <li>Provide technical support and training to field staff, ensuring alignment with organizational standards and practices.</li>
                    <li>Track and report on performance metrics, identifying areas for continuous improvement.</li>
                    <li>Stay updated on industry advancements and recommend innovative approaches to improve service delivery.</li>
                </ul>
            </div>
            <div className="flex flex-col gap-[20px]">
                <h2 className="text-[20px] font-bold">Qualifications</h2>
                <ul>
                    <li>3+ years of experience in facilities management, field operations, or a related role.</li>
                    <li>Strong technical understanding of industry expertise applied for below.</li>
                    <li>Excellent problem-solving skills and ability to make data-driven decisions in the field.</li>
                    <li>Strong interpersonal and communication skills to effectively manage client relationships and team collaboration.</li>
                    <li>Familiarity with facility management software and tools is a plus.</li>
                    <li>Strong inter-departmental communications skills.</li>

                </ul>
            </div>
            {/* <div className="flex flex-col gap-[20px] my-[20px]">
                <h2 className="text-[20px] font-bold">Compensation</h2>
                <ul>
                    <li>Base pay: $80k - $110k (based on experience).</li>
                </ul>
            </div> */}
            {/* <div className="flex flex-col gap-[20px]">
                <h2 className="text-[20px] font-bold">Benefits & Perks</h2>
                <ul>
                    <li>Comprehensive Medical, Dental, and Vision Insurance plans.</li>
                    <li>Insurance premiums covered 100% for you.</li>
                    <li>Generous PTO policy to promote work-life balance.</li>
                    <li>Access to industry-leading professional development opportunities.</li>
                    <li>Company retreats in scenic locations to foster team collaboration and growth.</li>
                </ul>
            </div> */}

            <div className = "my-[40px]">
                <h3>Apply for this job</h3>
                <span>indications a required field</span>
            </div>

            <form className="flex flex-col gap-8">
                <div className="max-w-[500px] p-[10px] flex flex-col gap-[10px] border border-gray-300 border-solid rounded-lg">
                    <span className="font-bold">First Name</span>
                    <input
                        name="firstName"
                        className="hover:outline-none"
                        onChange={handleChange}
                    />
                </div>
                <div className="max-w-[500px] p-[10px] flex flex-col gap-[10px] border border-gray-300 border-solid rounded-lg">
                    <span className="font-bold">Last Name</span>
                    <input
                        name="lastName"
                        className="hover:outline-none"
                        onChange={handleChange}
                    />
                </div>
                <div className="max-w-[500px] p-[10px] flex flex-col gap-[10px] border border-gray-300 border-solid rounded-lg">
                    <span className="font-bold">Email</span>
                    <input
                        name="email"
                        className="hover:outline-none"
                        onChange={handleChange}
                    />
                </div>
                <div className="max-w-[500px] p-[10px] flex flex-col gap-[10px] border border-gray-300 border-solid rounded-lg">
                    <span className="font-bold">Phone Number</span>
                    <input
                        name="phoneNumber"
                        className="hover:outline-none"
                        onChange={handleChange}
                    />
                </div>
                <div className="max-w-[500px] p-[10px] flex flex-col gap-[10px] border border-gray-300 border-solid rounded-lg">
                    <span className="font-bold">Resume/CV</span>
                    <div {...getRootProps()} className="border-dashed border-2 border-gray-300 p-4 text-center cursor-pointer hover:border-blue-500 transition-colors">
                        <input {...getInputProps()} />
                        {formData.resume ? (
                            <div>
                                <p>Selected file: {formData.resume.name}</p>
                                <button 
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setFormData(prev => ({ ...prev, resume: null }));
                                    }}
                                    className="mt-2 text-red-500 hover:text-red-700"
                                >
                                    Remove file
                                </button>
                            </div>
                        ) : (
                            <div>
                                <p>{isDragActive ? "Drop your file here" : "Drag and drop your PDF or DOCX file here"}</p>
                                <p className="text-sm text-gray-500 mt-2">or</p>
                                <button type="button" className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                                    Browse Files
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="max-w-[500px] p-[10px] flex flex-col gap-[10px] border border-gray-300 border-solid rounded-lg">
                    <span className="font-bold">LinkedIn Profile</span>
                    <input
                        name="linkedIn"
                        className="hover:outline-none"
                        onChange={handleChange}
                    />
                </div>
                <div className="max-w-[500px] p-[10px] flex flex-col gap-[10px] border border-gray-300 border-solid rounded-lg">
                    <span className="font-bold">Tell us more about yourself</span>
                    <textarea
                        name="about"
                        className="hover:outline-none"
                        onChange={handleChange}
                    />
                </div>

                <div className="max-w-[500px] p-[10px] flex flex-col gap-[10px] border border-gray-300 border-solid rounded-lg">
                    <span className="font-bold">Do you own your own personal vehicle?</span>
                    <select
                        name="hasVehicle"
                        className="hover:outline-none p-2"
                        onChange={handleChange}
                        value={formData.hasVehicle}
                    >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <HiringSubmitButton formData={formData} jobTitle="Service Team Member" />
            </form>
        </div>
    );
}
