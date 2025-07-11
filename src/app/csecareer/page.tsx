'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link'
// --- Data for the career roles ---
const careerRoles = [
  {
    key: 'swe',
    title: 'SOFTWARE ENGINEER /\nDEVELOPER',
    descriptionTitle: 'SOFTWARE ENGINEER / DEVELOPER',
    description: 'This role involves designing, building, and maintaining software systems. With an M.Tech, you will work on complex architectural challenges, lead development cycles, and mentor junior engineers.',
    companies: 'Google, Microsoft, Amazon, Adobe, Oracle, Startups',
  },
  {
    key: 'architect',
    title: 'SYSTEM ARCHITECT',
    descriptionTitle: 'SYSTEM ARCHITECT',
    description: 'A System Architect defines the structure, behavior, and overall architecture of a software system. This high-level role requires deep technical knowledge to make critical decisions that ensure scalability and robustness.',
    companies: 'Salesforce, IBM, Intel, Large Enterprises, Consulting Firms',
  },
  {
    key: 'backend',
    title: 'BACKEND / FULL-STACK\nDEVELOPER',
    descriptionTitle: 'BACKEND / FULL-STACK DEVELOPER',
    description: 'Specializes in server-side logic, databases, and APIs. M.Tech graduates often work on advanced backend systems, microservices architecture, and cloud-native applications to power complex platforms.',
    companies: 'Netflix, Uber, Wipro, Infosys, TCS, Product Companies',
  },
  {
    key: 'rnd',
    title: 'R&D ENGINEER',
    descriptionTitle: 'R&D ENGINEER',
    description: 'Research and Development engineers work on innovative and experimental projects, exploring new technologies to create future products. This role is common in large tech companies and government research labs.',
    companies: 'ISRO, DRDO, Samsung Research, Bell Labs, BARC',
  },
  {
    key: 'lead',
    title: 'TECHNICAL LEAD /\nENGINEERING MANAGER',
    descriptionTitle: 'TECHNICAL LEAD / ENGINEERING MANAGER',
    description: 'This is a leadership role responsible for guiding a team of engineers. It combines technical expertise with project management and people skills to deliver high-quality software products on schedule.',
    companies: 'Any company with a software team, from startups to MNCs',
  },
  {
    key: 'others',
    title: 'OTHERS',
    descriptionTitle: 'OTHER ROLES',
    description: 'An M.Tech in CSE also prepares you for roles like a Machine Learning Engineer, Cyber Security Analyst, Cloud Solutions Architect, or a specialized consultant, depending on your interests and electives.',
    companies: 'Specialized firms, financial institutions, defense contractors',
  },
];


export default function MtechCareersPage() {
  const router = useRouter();
  
  const [activeRoleKey, setActiveRoleKey] = useState(careerRoles[0].key);
  const activeRole = careerRoles.find(role => role.key === activeRoleKey);

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] p-4 sm:p-8 text-black font-sans overflow-hidden">
      {/* Header and Vertical Text */}
      <header className="flex justify-between items-center w-full mb-8 px-4">
        <h1 className="text-lg font-semibold tracking-wider">FUTURE GUIDE</h1>
        <h2 className="text-lg font-semibold tracking-wider hidden sm:block">ELEVATE</h2>
        <nav className="flex gap-6 text-lg font-semibold">
           <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <Link href="/firstpage" className="hover:text-white transition-colors">GUIDE</Link>
           <Link href="/login" className="hover:text-white transition-colors">LOGIN</Link>
        </nav>
      </header>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center hidden lg:block"><span className="text-lg font-semibold tracking-widest">ELEVATE</span></div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 origin-center hidden lg:block"><span className="text-lg font-semibold tracking-widest">ELEVATE</span></div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-start w-full max-w-7xl mx-auto pt-10">

        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center">CAREER OPPORTUNITIES</h1>

        <div className="flex flex-col lg:flex-row gap-8 w-full">
          
          {/* Left Column: Role Buttons */}
          <div className="w-full lg:w-1/3 flex flex-wrap lg:flex-col justify-center lg:justify-start gap-4">
            {careerRoles.map((role) => (
              <button
                key={role.key}
                onMouseEnter={() => setActiveRoleKey(role.key)}
                type="button"
                className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg font-semibold px-6 py-4 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none flex items-center justify-center w-full md:w-auto lg:w-full"
              >
                <span className="whitespace-pre-line leading-tight">{role.title}</span>
              </button>
            ))}
          </div>

          {/* Right Column: Description Cards */}
          <div className="w-full lg:w-2/3">
            {activeRole && (
              <div className="flex flex-col gap-6">
                {/* Description Card */}
                <div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 w-full flex flex-col justify-center items-center shadow-2xl">
                    <h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center">
                        {activeRole.descriptionTitle}
                    </h3>
                    <p className="text-md lg:text-lg leading-relaxed text-center">
                        {activeRole.description}
                    </p>
                </div>
                {/* Industries/Companies Card */}
                <div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 w-full flex flex-col justify-center items-center shadow-2xl">
                    <h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center">
                        INDUSTRIES/COMPANIES
                    </h3>
                    <p className="text-md lg:text-lg leading-relaxed text-center">
                        {activeRole.companies}
                    </p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Footer Icons */}
      <footer className="absolute bottom-8 left-8 flex gap-4 text-2xl">
        <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><FaInstagram/></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><FaLinkedin/></a>
        <a href="#" aria-label="Email" className="hover:text-white transition-colors"><FaEnvelope/></a>
      </footer>
    </main>
  );
}