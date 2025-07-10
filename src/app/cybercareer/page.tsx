'use client';

import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// --- Data for the Cyber Security career roles ---
const careerRoles = [
  {
    key: 'analyst',
    title: 'CYBERSECURITY ANALYST',
    descriptionTitle: 'CYBERSECURITY ANALYST',
    description: 'The first line of defense against cyber attacks. Analysts monitor networks for security breaches, investigate violations, and prepare reports on security status. They are crucial for maintaining an organization\'s security posture.',
    companies: 'KPMG, Deloitte, PwC, EY, Cisco, Palo Alto Networks, FireEye, Govt. Organizations, DRDO, C-DAC',
  },
  {
    key: 'hacker',
    title: 'ETHICAL HACKER /\nPENETRATION TESTER',
    descriptionTitle: 'ETHICAL HACKER / PENETRATION TESTER',
    description: 'Authorized professionals who simulate cyberattacks on an organization\'s systems to identify vulnerabilities before malicious hackers can exploit them. This role requires a deep understanding of hacking techniques and tools.',
    companies: 'Offensive Security, Mandiant, consulting firms, bug bounty platforms.',
  },
  {
    key: 'consultant',
    title: 'SECURITY CONSULTANT',
    descriptionTitle: 'SECURITY CONSULTANT',
    description: 'Advises companies on how to best protect their digital assets. Consultants assess security risks, recommend solutions, and help implement comprehensive security strategies and policies.',
    companies: 'Big Four (KPMG, EY, Deloitte, PwC), IBM Security, Accenture.',
  },
  {
    key: 'network_engineer',
    title: 'NETWORK SECURITY\nENGINEER',
    descriptionTitle: 'NETWORK SECURITY ENGINEER',
    description: 'Responsible for designing, building, and maintaining secure network infrastructures. They configure firewalls, VPNs, and intrusion detection systems to protect data flowing across the network.',
    companies: 'Cisco, Juniper Networks, Fortinet, major corporations.',
  },
  {
    key: 'architect',
    title: 'SECURITY ARCHITECT',
    descriptionTitle: 'SECURITY ARCHITECT',
    description: 'Designs the overall security structure for an organization\'s IT systems. This senior role involves creating complex security architectures and ensuring that all new and existing systems meet security standards.',
    companies: 'Financial institutions, large tech companies, government agencies.',
  },
  {
    key: 'others',
    title: 'OTHERS',
    descriptionTitle: 'OTHER ROLES',
    description: 'The field also includes specialized roles like Digital Forensics Investigator, who recovers information from digital devices for legal cases, and Cryptographer, who develops secure encryption algorithms.',
    companies: 'Law enforcement, intelligence agencies, specialized security firms.',
  },
];


export default function CyberSecurityCareersPage() {
  const [activeRoleKey, setActiveRoleKey] = useState(careerRoles[0].key);
  const activeRole = careerRoles.find(role => role.key === activeRoleKey);

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] p-4 sm:p-8 text-black font-sans overflow-hidden">
      {/* Header and Vertical Text */}
      <header className="flex justify-between items-center w-full mb-8 px-4">
        <h1 className="text-lg font-semibold tracking-wider">FUTURE GUIDE</h1>
        <h2 className="text-lg font-semibold tracking-wider hidden sm:block">ELEVATE</h2>
        <nav className="flex gap-6 text-lg font-semibold">
          <a href="#" className="hover:text-white transition-colors">HOME</a>
          <a href="#" className="hover:text-white transition-colors">GUIDE</a>
          <a href="#" className="hover:text-white transition-colors">LOGIN</a>
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
                    className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg font-semibold px-6 py-4 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none flex items-center justify-center min-h-[70px] w-full md:w-auto lg:w-full"
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