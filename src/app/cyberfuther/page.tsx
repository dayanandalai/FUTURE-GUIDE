'use client';

import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// --- Data for the further opportunity topics ---
const furtherTopics = [
  {
    key: 'phd',
    title: 'PH.D. IN CYBERSECURITY /\nCRYPTOGRAPHY /\nNETWORK SECURITYE',
    descriptionTitle: 'PH.D. IN CYBERSECURITY / CRYPTOGRAPHY / NETWORK SECURITYE',
    description: 'A Ph.D. in this field involves creating novel solutions to complex security challenges. Research areas can include developing unbreakable encryption, designing quantum-safe algorithms, or creating new frameworks for secure systems.',
  },
  {
    key: 'intelligence',
    title: 'CYBER INTELLIGENCE\nUNITS',
    descriptionTitle: 'CYBER INTELLIGENCE UNITS',
    description: 'Work with national security and intelligence agencies to defend against state-level cyber threats. This highly specialized role involves threat analysis, counter-intelligence, and protecting critical national infrastructure.',
  },
  {
    key: 'policy',
    title: 'CYBER POLICY\nRESEARCH',
    descriptionTitle: 'CYBER POLICY RESEARCH',
    description: 'This path involves working with think tanks, government bodies, and international organizations to research and shape the laws and policies governing cyberspace, digital privacy, and international cyber warfare.',
  },
];


export default function FurtherCyberSecurityPage() {
  const [activeTopicKey, setActiveTopicKey] = useState(furtherTopics[0].key);
  const activeTopic = furtherTopics.find(topic => topic.key === activeTopicKey);

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

        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center">FURTHER OPPORRTUNITIES</h1>

        <div className="flex flex-col lg:flex-row gap-8 w-full">
          
          {/* Left Column: Topic Buttons */}
          <div className="w-full lg:w-1/3 flex flex-wrap lg:flex-col justify-center lg:justify-start gap-4">
            {furtherTopics.map((topic) => (
                <button
                    key={topic.key}
                    onMouseEnter={() => setActiveTopicKey(topic.key)}
                    className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg font-semibold px-6 py-4 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none flex items-center justify-center min-h-[80px] w-full md:w-auto lg:w-full"
                >
                    <span className="whitespace-pre-line leading-tight">{topic.title}</span>
                </button>
            ))}
          </div>

          {/* Right Column: Description Card */}
          <div className="w-full lg:w-2/3">
            {activeTopic && (
              <div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 w-full flex flex-col justify-center items-center shadow-2xl min-h-[300px]">
                  <h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center whitespace-pre-line">
                      {activeTopic.descriptionTitle}
                  </h3>
                  <p className="text-md lg:text-lg leading-relaxed text-center">
                      {activeTopic.description}
                  </p>
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