"use client";

import Nav from "../components/nav";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav scrollToSection={scrollToSection} />

      <main className="pt-24 pb-16">
        <div className="max-w-[1050px] mx-auto px-[20px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-black mb-4">About Preeminent Professional Services</h1>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-8"
          >
            <section className="prose max-w-none text-black">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Preeminent Professional Services was founded with a vision to revolutionize the facilities maintenance and management industry. As a certified NMSDC MBE firm, we've built our reputation on delivering excellence through innovation and unwavering commitment to our clients' success.
              </p>
            </section>

            <section className="prose max-w-none text-black">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We strive to bring an eons-old industry into the 21st century through process, technology, and impact. Our mission is to transform traditional facility management by implementing innovative solutions that enhance both the physical environment and the experience of those who occupy it.
              </p>
            </section>

            <section className="prose max-w-none text-black">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our services are structured with a holistic perspective, taking into account the health and wellbeing of our clients' total physical environment. We understand that maintenance impacts not just the building itself, but also those who work within it. This comprehensive approach allows us to enhance building management strategies while positively impacting the overall value of the asset.
              </p>
            </section>

            <section className="prose max-w-none text-black">
              <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Environmental/Commercial Cleaning Services</li>
                <li>Professional/Technical Services</li>
                <li>Professional Event & Security Staffing Services</li>
                <li>Renewable Energy Solutions</li>
                <li>EV Services</li>
              </ul>
            </section>

            <section className="prose max-w-none text-black">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Preeminent Professional Services, we're committed to delivering solutions that not only meet but exceed our clients' expectations. We believe in sustainable practices, innovative technologies, and building lasting relationships with our clients. Our success is measured not just by the quality of our services, but by the positive impact we make on our clients' operations and the environment.
              </p>
            </section>

            <section className="prose max-w-none text-black">
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              
              <div className="space-y-8">
                {/* CEO Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">C.E.O/President of Operations - Brett Parson</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>5 years of Project management experience on large scale infrastructure & renewable energy projects</li>
                    <li>District of Columbia commercial solar lead on Distributed Energy Resources (DER) Team</li>
                    <li>Led the facilitation of community solar projects in Maryland and government programs like Solar for All in the D.C. area, managing projects from development to permission to operate</li>
                    <li>Co-developed a cost-sharing process for Community Renewable Energy Facility (CREF) projects in the District of Columbia, improving collaboration and reducing costs</li>
                    <li>Innovated and refined interconnection processes for commercial solar projects</li>
                    <li>Extensive project management experience, including the evaluation and approval of cost estimates, designs, and construction plans</li>
                    <li>Spearheaded Net Energy Metering (NEM) initiatives, driving adoption and optimizing energy savings for residential and community customers</li>
                  </ul>
                </div>

                {/* Business Development Officer Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Business Development and Compliance Officer - Derrick Landers</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Commercial EV Fleet infrastructure Services
                      <ul className="list-circle pl-6 mt-2">
                        <li>Charging Stations and related Equipment/Software</li>
                        <li>Professional Relationships with FLO Network (Canada), EV Connect (Schneider Electric), Blink Charging, Charge Point Network, Ford Pro Network</li>
                        <li>Charging Station points of contact responsible for: 168 points of contact</li>
                      </ul>
                    </li>
                    <li>20+ years in large Equipment Management</li>
                    <li>20+ years general contracting experience in Heavy Construction, Site Prep, Earth Works, Concrete, Foundations, Excavation, Commercial Real Estate Development, Demolition, Commercial Buildings</li>
                    <li>10+ years in Event/Hospitality/General Labor Staffing</li>
                    <li>15+ years experience at the Internal Revenue Service - Philadelphia Service Center Tax Examiner - Position Level(s) G-4 to G-8
                      <ul className="list-circle pl-6 mt-2">
                        <li>Examinations</li>
                        <li>Audit Criteria</li>
                        <li>Corporate Taxation (BMF)</li>
                        <li>Small Business/Self-Employed (IMF)</li>
                        <li>Alternative Minimum Tax Task Force</li>
                        <li>Telephone Technical Advisory Service</li>
                        <li>International Tax Shelters</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Director Section - Updated with full details */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Director of Administration & Personnel - Naja Andrews</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Professional Skills Profile for HR and Customer Service Leader</li>
                    <li>Technical Skills
                      <ul className="list-circle pl-6 mt-2">
                        <li>Advanced HRIS (Human Resource Information System) management</li>
                        <li>Payroll and benefits administration</li>
                        <li>Recruitment and talent acquisition strategies</li>
                        <li>Performance management tracking</li>
                      </ul>
                    </li>
                    <li>Customer Service Competencies
                      <ul className="list-circle pl-6 mt-2">
                        <li>Exceptional verbal and written communication</li>
                        <li>Active listening and empathy</li>
                        <li>Conflict resolution and mediation</li>
                        <li>Multi-channel support expertise</li>
                        <li>Customer experience optimization</li>
                      </ul>
                    </li>
                    <li>Leadership Capabilities
                      <ul className="list-circle pl-6 mt-2">
                        <li>Strategic workforce planning</li>
                        <li>Team motivation and development</li>
                        <li>Cross-functional collaboration</li>
                      </ul>
                    </li>
                    <li>Change management</li>
                    <li>Organizational Strengths
                      <ul className="list-circle pl-6 mt-2">
                        <li>Detailed project management</li>
                        <li>Time management and prioritization</li>
                        <li>Process improvement</li>
                        <li>Data-driven decision making</li>
                        <li>Workflow optimization</li>
                      </ul>
                    </li>
                    <li>Soft Skills
                      <ul className="list-circle pl-6 mt-2">
                        <li>Emotional intelligence</li>
                        <li>Problem-solving</li>
                        <li>Adaptability</li>
                        <li>Professional diplomacy</li>
                        <li>Cultural sensitivity</li>
                      </ul>
                    </li>
                    <li>Technical Proficiencies
                      <ul className="list-circle pl-6 mt-2">
                        <li>Microsoft Word</li>
                        <li>Zoom/Teams</li>
                        <li>Applicant tracking systems</li>
                        <li>Xactimate lvl 1</li>
                        <li>Google Workspace</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Technical Advisor Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technical Advisor - Hosea Brawley</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Certifications
                      <ul className="list-circle pl-6 mt-2">
                        <li>Engineering License Grade A – 2010</li>
                        <li>Universal AC License w/EPA 608</li>
                        <li>Computer Certification – 2008</li>
                        <li>Technician Certification – 2001</li>
                      </ul>
                    </li>
                    <li>Can lead comprehensive budgeting, procurement, and contract management for all operational facets</li>
                    <li>Seamless operations experience through meticulous system management, installations, and maintenance</li>
                    <li>Can orchestrate safety and emergency system management, including generators and fire pumps, across the facility</li>
                    <li>Can oversee all building systems encompassing lighting, electrical, plumbing, and HVAC systems</li>
                    <li>Ability to manage building upkeep and structural elements, addressing maintenance needs promptly</li>
                  </ul>
                </div>

                {/* Technical Advisor Section - Winny */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technical Advisor - Winny Donelle Mokam Noche</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Maryland Commercial Solar Lead and District of Columbia Solar For All Program Lead on Distributed Energy Resources (DER) Team</li>
                    <li>Led the facilitation of community solar projects in Maryland and government programs like Solar for All in the D.C. area, managing projects from development to permission to operate</li>
                    <li>Co-developed a cost-sharing process for Community Renewable Energy Facility (CREF) projects in the District of Columbia, improving collaboration and reducing costs</li>
                    <li>Innovated and refined interconnection processes for both low- and high-voltage systems in Maryland, enhancing efficiency and scalability</li>
                    <li>Extensive project management experience, including the evaluation and approval of cost estimates, designs, and construction plans</li>
                    <li>Spearheaded Net Energy Metering (NEM) initiatives, driving adoption and optimizing energy savings for residential, commercial, and community customers</li>
                    <li>Played a key role in the expansion of Electric Vehicle (EV) charging infrastructure by supporting site selection, design, permitting, and integration with renewable energy systems for residential, commercial, and municipal applications</li>
                  </ul>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}