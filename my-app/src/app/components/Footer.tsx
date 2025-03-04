import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  scrollToSection?: (sectionId: string) => void;

  textColor?: boolean;
}

export default function Footer({

  scrollToSection
}:NavigationProps) 
{

    return ( 

        <footer className="px-[20px] flex items-center py-[80px] mx-[20px] border-t border-black border-0.5 h-auto">
          <div className="flex flex-col md:flex-row justify-between gap-[30px] w-full text-black">
            <div className="flex-row">
              <Image 
                src="/assets/Logo.png" 
                alt="Preeminent Professional Services Logo"
                width={150}
                height={50}
                className="object-contain"
              />

              <h2>Preeminent Professional Services</h2>
            </div>

            <div className="flex flex-col gap-[8px]">
              <div>
                <span className="font-bold">Discover</span>
              </div>

              <span className="global-span cursor-pointer" onClick={() => scrollToSection && scrollToSection('about')}>Home</span>
              <span className="global-span cursor-pointer" onClick={() => scrollToSection && scrollToSection('services')}>Our services</span>
              <span className="global-span cursor-pointer" onClick={() => scrollToSection && scrollToSection('industries')}>Industries we serve</span>


              
            </div>

            <div className="flex flex-col w-full md:max-w-[25%] gap-[10px]">
              <div>
                <span className="font-bold">Subscribe to our Newsletter </span>
              </div>

              <p className="text-[#979797]">
                Want to stay up to date with news and updates about our team?
              </p>

              <input
                type="email"
                placeholder="Enter your email here"
                className="border border-gray-300 border-opacity-50 rounded-md p-2"
              />

              <p className="text-[15px] text-[#979797]">
                By subscribing to our newsletter you agree to our privacy policy
                and will get commercial communication.{" "}
              </p>
            </div>
          </div>
        </footer>
    )
}