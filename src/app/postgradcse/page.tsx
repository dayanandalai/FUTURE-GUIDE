'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// --- Data for the postgraduate degree topics ---
const degreeTopics = [
  {
    key: 'mtech',
    title: 'M.TECH/ME',
    descriptionTitle: 'M.TECH / ME',
    href: '/higher-studies/degrees/mtech',
    description: 'A Master of Technology (M.Tech) or Master of Engineering (ME) is a postgraduate degree focused on advanced technical knowledge and research in a specific engineering discipline. It is ideal for those seeking roles in R&D and specialized technical fields.',
  },
  {
    key: 'ms',
    title: 'M.S.',
    descriptionTitle: 'M.S.',
    href: '/higher-studies/degrees/ms',
    description: 'A Master of Science (M.S.) is a research-intensive degree that provides a deep theoretical and practical understanding of a scientific subject. It serves as a strong foundation for a Ph.D. or a career as a research scientist.',
  },
  {
    key: 'mba',
    title: 'MBA',
    descriptionTitle: 'MBA',
    href: '/higher-studies/degrees/mba',
    description: 'A Master of Business Administration (MBA) is a professional degree focused on business management and leadership. It is suitable for graduates from any background looking to pivot into managerial roles in finance, marketing, operations, or strategy.',
  },
  {
    key: 'others',
    title: 'OTHERS',
    descriptionTitle: 'OTHER DEGREES',
    href: '/higher-studies/degrees/others',
    description: 'Beyond the common paths, there are various other postgraduate options like a Master in Computer Applications (MCA), specialized diplomas, or interdisciplinary programs that combine technology with arts, law, or public policy.',
  },
];


export default function PostgraduateDegreesPage() {
  const router = useRouter();
  
  // State to track the currently hovered topic. Default to the first one.
  const [activeTopicKey, setActiveTopicKey] = useState(degreeTopics[0].key);

  // Find the full object for the active topic.
  const activeTopic = degreeTopics.find(topic => topic.key === activeTopicKey);

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
      <div className="flex flex-col items-center justify-start w-full max-w-6xl mx-auto pt-16">

        <h1 className="text-4xl lg:text-5xl font-bold mb-20 text-center">POSTGRADUATE DEGREES</h1>

        {/* Topic Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full mb-16 px-4">
          {degreeTopics.map((topic) => (
             <button
                key={topic.key}
                onMouseEnter={() => setActiveTopicKey(topic.key)}
                onClick={() => router.push(topic.href)}
                className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg font-semibold px-6 py-4 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none"
              >
                {topic.title}
              </button>
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