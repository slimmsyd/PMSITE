"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Hiring() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        resume: null,
        linkedIn: "",
        about: ""
    });

    const onsubmit = async (event: FormEvent) => {
        event.preventDefault();


        console.log("This was clicked")

        const response = await fetch("https://your-endpoint-url.com/plachoedler", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log("Form submitted successfully!");
        } else {
            console.error("Error submitting form");
        }
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
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
                <div className="flex flex-col gap-2 my-4">
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
                </div>
            </header>
            <div className="flex flex-col gap-[10px]">
                <h2 className="font-bold">About You</h2>
                <p>
                    Job responsiblity goes here
                </p>
            </div>
            <div className="flex flex-col gap-[10px] my-[30px]">
                <h2 className="text-[20px] font-bold">Responsibilities</h2>
                <ul>
                    <li>
                        Work cross-functionally with product, design, and sales to understand
                        requirements and ship thoughtful solutions.
                    </li>
                    <li>Write high-quality code optimized for extensibility.</li>
                    <li>
                        Engage in code reviews to maintain a high bar of engineering
                        excellence.
                    </li>
                    <li>
                        Lead discussions and documentation to communicate and arrive at the
                        best technical design.
                    </li>
                    <li>
                        Work across different components boundaries, from frontend to backend,
                        and even infrastructure layers.
                    </li>
                    <li>
                        Promote better practices and share technical knowledge across the
                        team.
                    </li>
                    <li>
                        Help grow Loop through deliberate feedback on product, process, and
                        culture.
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-[10px]">
                <h2 className="text-[20px] font-bold">Qualifications</h2>
                <ul>
                    <li>Five years of software engineering experience.</li>
                    <li>
                        Experience with TypeScript and tools such as GraphQL, Relay, React,
                        and Node.js.
                    </li>
                    <li>
                        Experience working at early-stage companies where you shipped products
                        end to end and wore many hats.
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-[10px]">
                <h2 className="text-[20px] font-bold">Under the Hood</h2>
                <ul>
                    <li>Infrastructure: AWS, CDK, Fargate ECS</li>
                    <li>
                        Backend: TypeScript, Node.js, Prisma, NestJS, PostgreSQL, Redis,
                        Elasticsearch, GraphQL
                    </li>
                    <li>Frontend: TypeScript, React, Relay, Ant Design, Vite, GraphQL</li>
                </ul>
            </div>
            <div className="flex flex-col gap-[10px]">
                <h2 className="text-[20px] font-bold">Compensation</h2>
                <ul>
                    <li>Base pay 120k - 190k</li>
                </ul>
            </div>
            <div className="flex flex-col gap-[10px]">
                <h2 className="text-[20px] font-bold">Benefits & Perks</h2>
                <ul>
                    <li>Premium Medical, Dental, and Vision Insurance plans</li>
                    <li>Insurance premiums covered 100% for you</li>
                    <li>Unlimited PTO</li>
                    <li>Fireside chats with industry leading keynote speakers</li>
                    <li>Off-sites in locales such as Napa and Tahoe</li>
                    <li>Generous professional development budget to feed your curiosity</li>
                    <li>
                        Physical and Mental fitness subsidies for yoga, meditation, gym, or
                        ski memberships
                    </li>
                </ul>
            </div>

            <div className = "my-[40px]">
                <h3>Apply for this job</h3>
                <span>indications a required field</span>
            </div>

            <form className="flex flex-col gap-8" onSubmit={onsubmit}>
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
                    <div className="border-dashed border-2 border-gray-300 p-4 text-center">
                        <p>Drag and drop your PDF or TXT file here</p>
                        <button className="mt-2 bg-blue-500 text-white p-2 rounded">Upload</button>
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
                <button type="submit" className="global-btn max-w-[180px] !text-white !bg-[#3574d6]">
                    Submit Application
                </button>
            </form>
        </div>
    );
}
