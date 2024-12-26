"use client";
import Link from "next/link";

export default function Hiring() {
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

      <div className="my-[80px] ">
        <h2
        className = "font-bold px-[10px]"
        >3 Jobs</h2>

        <Link
          href="hiring/Job1"
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
