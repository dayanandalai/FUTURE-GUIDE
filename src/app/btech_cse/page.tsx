'use client';

import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

// --- Data for the content cards ---
// We store it in an object for easy lookup.
const contentData = {
  jobs: {
    title: 'JOB OPPORTUNITIES',
    description: 'A degree in this field opens doors to diverse roles such as a Research Scientist, Data Analyst, Technical Writer, and Lab Technician. Graduates are highly sought after in government organizations like ISRO and DRDO, as well as in private tech firms and educational institutions for their analytical and problem-solving skills.',
  },
  studies: {
    title: 'HIGHER STUDIES',
    description: 'For those passionate about academia and research, pursuing higher studies is an excellent path. Options include a Master of Science (M.Sc.), followed by a Ph.D. in specialized fields like Astrophysics, Quantum Mechanics, or Material Science. Many universities also offer integrated M.Sc.-Ph.D. programs.',
  },
  exams: {
    title: 'COMPETITIVE EXAM',
    description: 'A strong foundation in science is a significant advantage for various competitive exams. Graduates can appear for civil services exams (UPSC), banking exams (IBPS), and specialized scientific officer exams. Exams like GATE also provide a pathway to postgraduate courses in prestigious institutes and jobs in Public Sector Undertakings (PSUs).',
  },
};

// --- Array for the tab buttons ---
const tabs = [
    { key: 'jobs', label: 'JOB OPPORTUNITIES' },
    { key: 'studies', label: 'HIGHER STUDIES' },
    { key: 'exams', label: 'COMPETITIVE EXAM' },
];


export default function Page() {
  // State to track the hovered tab, defaulting to null
  const [hoveredTab, setHoveredTab] = useState<keyof typeof contentData | null>(null);

  // Default description
  const defaultTitle = contentData.jobs.title;
  const defaultDescription = contentData.jobs.description;

  // Determine which tab's content to show (hovered or default)
  const displayTab = hoveredTab;
  const displayContent = displayTab ? contentData[displayTab] : { title: defaultTitle, description: defaultDescription };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#9bcde0] to-[#6ca8c1] p-4 sm:p-8 text-black font-sans overflow-hidden">
      {/* Header Section */}
      <header className="flex justify-between items-center w-full mb-8 px-4">
        <h1 className="text-lg font-semibold tracking-wider">FUTURE GUIDE</h1>
        <h2 className="text-lg font-semibold tracking-wider hidden sm:block">ELEVATE</h2>
        <nav className="flex gap-6 text-lg font-semibold">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <Link href="/firstpage" className="hover:text-white transition-colors">GUIDE</Link>
          <Link href="/login" className="hover:text-white transition-colors">LOGIN</Link>
        </nav>
      </header>

      {/* Vertical Text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center hidden lg:block">
        <span className="text-lg font-semibold tracking-widest">ELEVATE</span>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 origin-center hidden lg:block">
        <span className="text-lg font-semibold tracking-widest">ELEVATE</span>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto pt-16">
        {/* Top Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
          {tabs.map((tab) => {
            let href = '';
            if (tab.key === 'jobs') href = '/software_development';
            else if (tab.key === 'studies') href = '/csehigher_study';
            else if (tab.key === 'exams') href = '/btech_cse/exams';
            return (
              <Link
                key={tab.key}
                href={href}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform focus:outline-none ${
                  hoveredTab === tab.key ? 'bg-white shadow-lg scale-105' : 'bg-gray-300 bg-opacity-70 hover:bg-gray-200'
                }`}
                onMouseEnter={() => setHoveredTab(tab.key as keyof typeof contentData)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 w-full min-h-[300px] flex flex-col justify-center shadow-2xl">
          <h3 className="text-3xl lg:text-4xl mb-6 font-bold text-center">
            {displayContent.title}
          </h3>
          <p className="text-md lg:text-lg leading-relaxed text-center">
            {displayContent.description}
          </p>
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