"use client";
import Link from "next/link";

export default function Hiring() {

    const location = ""

  return (
    <div className="text-black p-8 max-w-[1080px] m-auto">
      {/* Logo */}
      <div className="flex items-center w-[55px]">
        <Link href="/">
          <img src="assets/Logo.png" />
        </Link>
    </div>
      <header>
        <div className="flex flex-col gap-2 my-4">
          <h1 className="text-[33px]">
            Current Openings at Preeminent Professional Services{" "}
          </h1>
          <hr className = "my-[20px]" style={{borderTop: '0.5px solid grey'}} />
        
          <p>
            You will recieve a response from a team member. Upon an opening becoming avaiable <br />

            Input your information below for opportunity to join our team. 
            <br />
          <em 
          className = "my-[10px] text-[12px]"
          style={{color: 'red'}}>Disclaimer: This is not a guaranteed offer.</em>
          </p>
        </div>
      </header>

      <div className="my-[80px] ">
        <h2
        className = "font-bold px-[10px]"
        >3 Jobs</h2>

        <Link
          href="hiring/fieldAdvisor"
          className="flex flex-col gap-[5px] border-b border-black border-b-[0.5px] pb-[10px] px-[10px] hover:bg-[#2660bd65]"
        >
          <h4 className="text-[20px] pt-[10px]">Field Supervisors</h4>
          <p>Location here</p>
        </Link>

        <Link
          href="/hiring/serviceTeamMember"
          className="flex flex-col gap-[5px] border-b border-black border-b-[0.5px] pb-[10px] px-[10px] hover:bg-[#2660bd65]"
        >
          <h4 className="text-[20px] pt-[10px]">Service Team Member</h4>
          <p>Location here</p>
        </Link>
        <Link
          href="/hiring/technicalAdivsor"
          className="flex flex-col gap-[5px] border-b border-black border-b-[0.5px] pb-[10px] px-[10px] hover:bg-[#2660bd65]"
        >
          <h4 className="text-[20px] pt-[10px]">Technical Adivsor</h4>
          <p>Location here</p>
        </Link>
      </div>
    </div>
  );
}
