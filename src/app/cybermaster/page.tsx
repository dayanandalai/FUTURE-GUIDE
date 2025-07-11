'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link'
// --- Data for the two main tabs on this page ---
const opportunityTopics = [
  {
    key: 'career',
    title: 'CAREER OPPORTUNITIES',
    descriptionTitle: 'CAREER OPPORTUNITIES',
    href: '/mtech/cyber-security/careers',
    description: 'Graduates can pursue high-demand roles like Security Architect, Penetration Tester, and Chief Information Security Officer (CISO). They are hired by government agencies, financial institutions, and tech companies to protect critical digital assets.',
  },
  {
    key: 'further',
    title: 'FURTHER OPPORTUNITIES',
    descriptionTitle: 'FURTHER OPPORTUNITIES',
    href: '/mtech/cyber-security/further-studies',
    description: 'After an M.Tech, a Ph.D. in Cyber Security allows for deep research into cryptography, network defense, or digital forensics. This path leads to influential roles in academia, national security, and corporate R&D labs.',
  },
];


export default function MtechCyberSecurityPage() {
  const router = useRouter();
  
  // State to track the currently hovered tab. Default to the first one.
  const [activeTabKey, setActiveTabKey] = useState(opportunityTopics[0].key);

  // Find the full object for the active tab.
  const activeTab = opportunityTopics.find(topic => topic.key === activeTabKey);

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
      <div className="flex flex-col items-center justify-start w-full max-w-5xl mx-auto pt-16">

        <h1 className="text-4xl lg:text-5xl font-bold mb-20 text-center px-4">M.TECH IN CYBER SECURITY</h1>

        {/* Topic Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full mb-16">
          {opportunityTopics.map((topic) => (
             <button
                key={topic.key}
                onMouseEnter={() => setActiveTabKey(topic.key)}
                onClick={() => {
                  if (topic.key === 'career') router.push('/cybercareer');
                  else if (topic.key === 'further') router.push('/cyberfuther');
                  else router.push(topic.href);
                }}
                className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none w-full sm:w-auto"
              >
                {topic.title}
              </button>
          ))}
        </div>

        {/* Description Card */}
        {activeTab && (
            <div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 w-full lg:w-3/4 min-h-[200px] flex flex-col justify-center items-center shadow-2xl">
                <h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center">
                    {activeTab.descriptionTitle}
                </h3>
                <p className="text-md lg:text-lg leading-relaxed text-center">
                    {activeTab.description}
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