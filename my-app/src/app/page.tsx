"use client";

import Image from "next/image";
import Nav from "../app/components/nav";
import GlobalButton from "./components/button";
import CheckBox from "./components/checkbox";
import ContactPopup from "./components/ContactPopup";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import Link from "next/link";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      src: "/assets/Fac.png",
      name: "Professional/Technical Services",
      description:
        "Property Management Companies, Real Estate Developers, Industrial and/or commercial properties, Hot-Spot Discovery and evaluation",
      link: "/technicalServices",
    },
    {
      src: "/assets/Janitor.png",
      name: "Commericial Cleaning/Enviromental Services.",
      description: "Commericial Cleaning/Enviromental Services.",
      link: "/environmentServices",
    },

    {
      src: "/assets/Staffing.png",
      name: "Professional Events and Staffing",
      description:
        "Preeminet Professional Services is proud to provide staffing services for its clientel. We provide temporary staffing for events either commerical private/public with a minimum of notice.",
      link: "/eventAndStaffing",
    },
    {
      src: "/assets/energy.png",
      name: "EV Services",
      description:
        " We provide turn-key services for the Electification of your commerical fleet or individual/company vechicle(s). These services include (but not limited to)..",
      link: "/evServices",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden my-[100px]">
      <div
        className={`flex transition-transform duration-300 ease-in-out ${
          isMobile ? "" : "gap-[10px]"
        }`}
        style={{
          transform: `translateX(-${
            currentIndex * (isMobile ? 100 : 100 / 3)
          }%)`,
        }}
      >
        {services.map((service, index) => (
          <Link
            href={service.link}
            key={index}
            className={`${
              isMobile ? "w-full" : "w-auto"
            } h-[500px] relative flex-shrink-0 group`}
          >
            <div className="overlay"></div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-10 absolute bg-black/50 top-0 left-0 w-full h-full items-center justify-center flex">
              <span className="text-[20px] font-bold text-white relative z-30">
                {service.description}{" "}
              </span>
            </div>

            <Image
              className="h-[100%] servicesImage object-cover"
              src={service.src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={500}
            />

            <div className="flex p-[10px] items-end justify-end absolute bottom-0 text-white">
              <p className="mt-2 text-center font-semibold relative z-20">
                {service.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute clickBtns left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute clickBtns right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isCountingRef = useRef(false);
  const pathname = usePathname();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const startCounting = () => {
    if (isCountingRef.current) return; // Prevent multiple counts
    isCountingRef.current = true;

    let start = 0;
    const end = 30000;
    const duration = 2000; // Duration of the animation in milliseconds
    const increment = end / ((duration / 1000) * 40); // Calculate increment per frame

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        console.log("Current count:", Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it ends at 10000
        console.log("Final count:", end);
      }
    };

    animate();
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is in view, starting count...");
          startCounting();
          observer.disconnect(); // Stop observing after counting starts
        } else {
          console.log("Element is not in view.");
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
      console.log("Observer is set up.");
    }

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  return (
    <div className="">
      <Nav scrollToSection={scrollToSection} />

      <main className="h-[100vh]">
        <ContactPopup isOpen={isOpen} togglePopup={togglePopup} />

        <header className="header-bg relative">
          <div className="overlay"></div> {/* Added overlay div */}
          <video
            autoPlay
            loop
            muted
            className="absolute pointer-events-none inset-0 w-full h-full object-cover"
          >
            <source src="assets/world_.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div> {/* Added overlay div */}
          <div className="px-[20px] md:px-28 flex flex-col gap-[30px] items-stast justify-start text-left relative z-10 mr-auto max-w-[1080px]">
            <h1 className="!text-left !text-white font-bold text-[30px] md:text-[40px]">
              Serving our clients Infrastructure Development and Asset
              Management needs.
            </h1>
            <p className="font-medium !text-white">
              {" "}
              We strive to bring an eons old industry into the 21st century
              through process, technology, & impact. We provide a unique
              approach to facilities maintenance* managment, utilzing process
              engineering skills to develop non-traditional services models with
              technological advancments.
            </p>
            <button
              className="global-btn max-w-[180px]"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              CONTACT US
            </button>
          </div>
        </header>

        {/* <section
              className = "pt-[80px] !md:py-[10px] gap-[15px] w-full m-auto flex flex-col items-center justify-center"
              > 
              <h3
                className = "text-black"
              >
              Strategic Parthners
              </h3>
                      
                      <div className = "flex flex-col md:flex-row gap-[40px] items-center justify-between">

                        <div
                          className = "max-w-[100px]"
                        >
                          <img src = "assets/ndclient.PNG" />

                        </div>
                        <div
                          className = "max-w-[100px]"
                        >
                          <img src = "assets/oxi.jpg" />

                        </div>
                        <div
                          className = "max-w-[100px]"
                        >
                          <img src = "assets/rcharge.PNG" />

                        </div>

                      </div>
                
              </section> */}

        <section id="about" className="top-section bg-white">
          <div className="main-container py-[80px] px-[20px] max-w-[1050px] m-auto">
            <div className="flex flex-col gap-2">
              <span className="text-black"> About us</span>
              <div className="flex flex-col md:flex-row gap-[25px] md:gap-0">
                <h1 className="text-black w-full md:w-[70%]">
                  Transform your environment with us, enhancing assets,
                  <b>& improving strategies...</b>
                </h1>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="global-btn border text-[15px] border-black border-0.5 w-[180px] md:w-[169px] h-[39px]"
                >
                  CONTACT US
                </button>
              </div>

              <p className="text-black">
                Our team, provides professional-grade environmental & facilities
                maintenance & management services. Our services are structured
                to take into account the health and well-being of the client's
                total physical environment, and how the maintenance of that
                environment impacts those who work within it. We value clear cut
                analysis of the process from start to completion.
              </p>
            </div>

            <ImageSlider />
          </div>
          {/* <div className="main-container py-[80px] px-[20px] max-w-[1050px] m-auto">
            <div className="flex flex-col gap-2">
              <span className="text-black"> About us</span>
              <div className="flex flex-col md:flex-row gap-[25px] md:gap-0">
                <h1 className="text-black w-full md:w-[70%]">
                  Transform your environment with us, enhancing assets,
                  improving strategies...
                </h1>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="global-btn border text-[15px] border-black border-0.5 w-[180px] md:w-[169px] h-[39px]"
                >
                  CONTACT US
                </button>
              </div>

              <p className="text-black">
                Our team, provides professional-grade environmental, facilities
                maintenance & management services. Our services are structured
                to take into account the health and well-being of the client's
                total physical environment, and how the maintenance of that
                environment impacts those who work within it. We value clear cut
                analysis of the process from start to completion.
              </p>
            </div>

            <div
              id="services"
              className="flex flex-col md:flex-row flex-wrap items-center md:items-center py-[50px] gap-[24px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card bg-white shadow-md rounded-lg max-w-xs
            text-black
            transition-all duration-500 ease-in-out transform hover:scale-110"
              >
                <div className="relative ">
                  <div className="overlay"></div> 
                  <img
                    src="assets/Fac.png"
                    alt="Description 1"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="p-3 flex flex-col  ">
                  <h2 className="text-lg font-bold mt-2">
                    Professional + Technical Services
                  </h2>
                  <p className="flex-1">
                    Property Management Companies, Real Estate Developers,
                    Industrial and/or commercial properties, Hot-Spot Discovery
                    and evaluation
                  </p>
                  <a href="/technicalServices" className="text-blue-500">
                    Learn more →
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="card bg-white shadow-md rounded-lg max-w-xs
            text-black
            transition-all duration-500 ease-in-out transform hover:scale-110"
              >
                <div className="relative">
                  <div className="overlay"></div> 
                  <img
                    src="assets/Janitor.png"
                    alt="Description 2"
                    className="w-full h-[230px] rounded-t-lg"
                  />
                </div>

                <div className="p-3 flex flex-col w-full ">
                  <h2 className="text-lg font-bold mt-2">
                    Environmental Services
                  </h2>
                  <p className="flex-1">
                    Environmental Sustainability or Risk Assessment Services.
                  </p>
                  <a href="/environmentServices" className="text-blue-500">
                    Learn more →
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="card bg-white shadow-md rounded-lg max-w-xs
            text-black
            transition-all duration-500 ease-in-out transform hover:scale-110"
              >
                <div className="relative">
                  <div className="overlay"></div> 
                  <img
                    src="assets/Staffing.png"
                    alt="Description 3"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="p-3 flex flex-col ">
                  <h2 className="text-lg font-bold mt-2">
                    Professional Events and Staffing
                  </h2>
                  <p className="flex-1">MEP, Electrical, Civil, Structural</p>
                  <a href="/eventAndStaffing" className="text-blue-500">
                    Learn more →
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card bg-white shadow-md rounded-lg max-w-xs
            text-black
            transition-all duration-500 ease-in-out transform hover:scale-110"
              >
                <div className="relative ">
                  <div className="overlay"></div> 
                  <img
                    src="assets/energy.png"

                    alt="Description 1"
                    className="w-full  rounded-t-lg  h-[230px]"
                  />
                </div>

                <div className="p-3 flex flex-col  ">
                  <h2 className="text-lg font-bold mt-2">EV Services</h2>
                  <p className="flex-1">
                    We provide turn-key services for the Electification of your
                    commerical fleet or individual/company vechicle(s). These
                    services include (but not limited to)..
                  </p>
                  <a href="/evServices" className="text-blue-500">
                    Learn more →
                  </a>
                </div>
              </motion.div>

              
            </div>
          </div> */}
        </section>

        <section
          id="careers"
          className="employment relative h-[50vh] flex items-center justify-center "
        >
          <div className="overlay"></div>
          <div className="flex flex-col items-center justify-center relative z-10 !text-white">
            <span>Now Hiring</span>
            <h1 className="text-center">Seeking employment considerations? </h1>
            <p className="text-center">
              Join us a Preeminent Professional Services, for opportunity to
              make collective impactful change
            </p>

            <div className="mt-8 text-center">
              <GlobalButton link="/hiring" text="SEE CAREERS" />
            </div>
          </div>
        </section>

        <section className="top-section bg-white" id="industries">
          <div className="main-container py-[80px] px-[20px] max-w-[1050px] m-auto">
            <div className="flex flex-col gap-2">
              <span className="text-black"> Industries We Serve...</span>
              <div className="flex flex-col gap-[50px] md:flex-row">
                <h1 className="text-black">
                  If you serve people, we serve you.
                </h1>
                <button className="global-btn border text-[15px] border-black border-0.5 w-[169px] h-[39px]">
                  SEE INDUSTRIES
                </button>
              </div>

              <p className="text-black">
                We create experiences that matter wherever people work, learn,
                recover, and play.
              </p>
            </div>

            <div className="flex-col flex justify-center py-[50px] gap-[24px] md:flex-row">
              <div
                className="card h-[426px] bg-white shadow-md rounded-lg max-w-xs w-full md:max-w-full md:w-full
            text-black
            "
              >
                <div className="relative card-1 min-h-[300px] md:h-full flex items-center px-4 text-white justify-center flex-col  ">
                  <div className="overlay"></div> {/* Added overlay div */}
                  <div className="z-10 flex flex-col gap-[10px]">
                    <h2>Commercial Property Managers/Owners</h2>

                    <button
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                      className="mt-[5px] global-btn max-w-[115px] text-left flex justify-start "
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="card  h-[426px] bg-white shadow-md rounded-lg max-w-xs w-full md:max-w-full md:w-full
            text-black
            "
              >
                <div className="relative min-h-[300px] md:h-full   card-2 h-full flex items-center px-4 text-white justify-center flex-col  ">
                  <div className="overlay"></div> {/* Added overlay div */}
                  <div className="z-10 flex flex-col gap-[10px]">
                    <h2>Construction and Infrastructure Developers</h2>

                    <button
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                      className="mt-[5px]  max-w-[115px]  global-btn text-left flex justify-start "
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="card h-[426px] bg-white shadow-md rounded-lg max-w-xs w-full md:max-w-full md:w-full
            text-black
            "
              >
                <div className="relative min-h-[300px] md:h-full card-3 h-full flex items-center px-4 text-white justify-center flex-col  ">
                  <div className="overlay"></div> {/* Added overlay div */}
                  <div className="z-10 flex items-start justify-start flex-col gap-[10px]">
                    <h2>Public/Private Sector Government Institutions</h2>

                    <button
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                      className="mt-[5px] global-btn text-left flex justify-start "
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-[#000E3C] py-[20px] relative !h-[25vh] !md:h-full flex items-center justify-center ">
          <div className="overlay"></div> {/* Added overlay div */}
          <div className="flex flex-col items-center justify-center relative z-10">
            <span>Our impact by the numbers</span>
            <h1 className="text-center">Value in the Analysis </h1>

            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="mt-8"
            >
              <GlobalButton text="CONTACT US" />
            </div>
          </div>
        </section>

        <section className="top-section flex flex-col bg-white">
          <div className="main-container py-[80px] px-[20px] max-w-[1050px] m-auto">
            <div className="flex flex-col gap-2">
              <span className="text-black"> </span>
              <div className="flex w-full flex-col gap-[50px] md:flex-col items-center justify-center">
                <div className="flex-col flex max-w-full">
                  <h1 className="text-black">Total Area Serviced...</h1>
                  <p className="text-black"></p>
                  {/* 
                  <div className="flex flex-col mt-4 gap-[7px]">
                    <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                      <CheckBox />
                      OSHA 10 & OSHA 30
                    </div>
                    <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                      <CheckBox />
                      EPA 608 Certification
                    </div>
                    <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                      <CheckBox />
                      City of Philadelphia – Engineering Licenses
                    </div>
                    <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                      <CheckBox />
                      CSIA Certification (#1197)
                    </div>
                    <div className="flex flex-row items-center justify-start gap-3 text-black text-[16px]">
                      <CheckBox />
                      Serve / Safe Food/ Management 
                    </div>
                  </div> */}
                </div>

                <div className="flex flex-col gap-[10px]">
                  {/* <h3 className="text-black">Square footage counter</h3> */}
                  <div className="flex items-start justify-start">
                    <motion.div
                      className="] bg-white rounded-full  flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      onViewportEnter={startCounting}
                    >
                      <div className="flex flex-row items-start  justify-center gap-[3px] relative">
                        <span className="text-black font-bold !text-[89px] flex items-center justify-center">
                          {count}
                          <span className="text-sm">+</span>{" "}
                        </span>
                        <span
                          className="text-gray-300 text-[14px] transform relative text-lg font-bold"
                          style={{ transform: "translateY(-10px)" }}
                        >
                          Sqft
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <div className=" flex items-start justify-start items-end flex-1 w-full mt-40 md:mt-0">
                    <button
                      className="global-btn max-w-full w-full my-[40px] !bg-black !text-white"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      CONTACT US
                    </button>
                    {/* <button className="border-b-0.5 my-[20px] border-black flex items-center pointer w-full">
                      <span
                        onClick={() => {
                          setIsOpen(!isOpen);
                        }}
                        className="text-black w-full"
                      >
                        Contact us
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="black"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 0 0-1 1v6.586l-3.293-3.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L11 10.586V4a1 1 0 0 0-1-1z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M3 13a1 1 0 0 0 1 1h12a1 1 0 0 0 0-2H4a1 1 0 0 0-1 1z"
                        />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-row flex justify-center py-[50px] gap-[24px]"></div>
          </div>
        </section>

        <Footer scrollToSection={scrollToSection} />
      </main>
    </div>
  );
}
