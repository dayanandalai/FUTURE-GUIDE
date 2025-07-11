'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link'
// --- Data for the certification topics ---
const certificationTopics = [
  {
    key: 'data_science',
    title: 'DATA SCIENCE',
    descriptionTitle: 'DATA SCIENCE',
    href: '/certifications/data-science',
    description: 'Certifications in Data Science validate your skills in data analysis, machine learning, and statistical modeling. Popular certifications from IBM, Google, and Microsoft cover tools like Python, R, and SQL, preparing you for high-demand analyst and scientist roles.',
  },
  {
    key: 'cloud',
    title: 'CLOUD CERTIFICATIONS',
    descriptionTitle: 'CLOUD CERTIFICATIONS',
    href: '/certifications/cloud',
    description: 'Cloud certifications from providers like AWS, Microsoft Azure, and Google Cloud are highly valued. They demonstrate expertise in cloud architecture, security, and operations, opening doors to roles like Cloud Engineer and Solutions Architect.',
  },
  {
    key: 'cisco',
    title: 'CISCO',
    descriptionTitle: 'CISCO',
    href: '/certifications/cisco',
    description: 'Cisco certifications, such as CCNA and CCNP, are the industry standard for networking professionals. They cover topics like network fundamentals, IP connectivity, and security, essential for roles in network administration and engineering.',
  },
  {
    key: 'ui_ux',
    title: 'UI/UX',
    descriptionTitle: 'UI/UX',
    href: '/certifications/ui-ux',
    description: 'UI/UX design certifications focus on creating user-friendly and visually appealing digital products. Programs from Google and Interaction Design Foundation teach user research, wireframing, and prototyping with tools like Figma and Adobe XD.',
  },
];


export default function CertificationsPage() {
  const router = useRouter();
  
  // State to track the currently hovered topic. Default to the first one.
  const [activeTopicKey, setActiveTopicKey] = useState(certificationTopics[0].key);

  // Find the full object for the active topic.
  const activeTopic = certificationTopics.find(topic => topic.key === activeTopicKey);

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
      <div className="flex flex-col items-center justify-start w-full max-w-6xl mx-auto pt-16">

        <h1 className="text-4xl lg:text-5xl font-bold mb-20 text-center">CERTIFICATIONS/DIPLOMAS</h1>

        {/* Topic Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full mb-16 px-4">
          {certificationTopics.map((topic) => (
            <Link
              key={topic.key}
              href={topic.href}
              className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg font-semibold px-6 py-4 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none flex items-center justify-center"
              onMouseEnter={() => setActiveTopicKey(topic.key)}
            >
              {topic.title}
            </Link>
          ))}
        </div>

        {/* Description Card */}
        {activeTopic && (
            <div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 w-full lg:w-3/4 min-h-[200px] flex flex-col justify-center items-center shadow-2xl">
                <h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center">
                    {activeTopic.descriptionTitle}
                </h3>
                <p className="text-md lg:text-lg leading-relaxed text-center">
                    {activeTopic.description}
                </p>
            </div>
        )}

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