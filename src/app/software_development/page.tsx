'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Data for the software development sub-topics. No changes needed here.
const devTopics = [
  {
    key: 'webstack',
    title: 'FRONT END/BACK END\n/FULL STACK',
    descriptionTitle: 'Front End / Back End / Full Stack',
    href: '/jobs/software/web-stack',
    description: 'This is the art of building websites and web applications. Frontend developers create the user interface, Backend developers manage the server and database, and Full-Stack developers handle both sides of the application.',
  },
  {
    key: 'app',
    title: 'APP DEVELOPER',
    descriptionTitle: 'App Developer',
    href: '/jobs/software/app-developer',
    description: 'App developers specialize in creating applications for mobile devices like smartphones and tablets. They work with platforms like iOS (using Swift) and Android (using Kotlin/Java), or cross-platform tools like React Native and Flutter.',
  },
  {
    key: 'game',
    title: 'GAME DEVELOPING',
    descriptionTitle: 'Game Developing',
    href: '/jobs/software/game-developing',
    description: 'Game developers design and build video games for various platforms, including consoles, PCs, and mobile devices. They use game engines like Unity and Unreal Engine to create immersive worlds, characters, and gameplay mechanics.',
  },
];


export default function SoftwareDevelopmentPage() {
  const router = useRouter();

  // Default description state
  const defaultTitle = "SOFTWARE DEVELOPMENT";
  const defaultDescription = "Hover over any field to see a brief description. Click to explore detailed career paths and opportunities.";
  const [activeTopicKey, setActiveTopicKey] = useState<string | null>(null);
  const activeTopic = devTopics.find(topic => topic.key === activeTopicKey);

  // Handle navigation for each topic
  const handleTopicClick = (topicKey: string) => {
    if (topicKey === 'webstack') {
      router.push('/btech_cse'); // Navigate to /btech_cse for webstack
    } else if (topicKey === 'app') {
      router.push('/btech_app'); // Example: navigate to /btech_app for app developer
    } else if (topicKey === 'game') {
      router.push('/btech_game'); // Example: navigate to /btech_game for game developing
    }
  };

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
      <div className="flex flex-col items-center justify-start w-full max-w-6xl mx-auto pt-10">
        <h1 className="text-4xl lg:text-5xl font-bold mb-16 text-center">SOFTWARE DEVELOPMENT</h1>

        {/* Grid of Topic Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
          {devTopics.map((topic) => (
            <button
              key={topic.key}
              onMouseEnter={() => setActiveTopicKey(topic.key)}
              onMouseLeave={() => setActiveTopicKey(null)}
              onClick={() => handleTopicClick(topic.key)}
              className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg font-semibold px-6 py-5 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none"
            >
              <span className="whitespace-pre-line leading-tight">{topic.title}</span>
            </button>
          ))}
        </div>

        {/* Description Card */}
        <div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 w-full lg:w-3/4 min-h-[200px] flex flex-col justify-center items-center shadow-2xl">
          <h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center">
            {activeTopic ? activeTopic.descriptionTitle : defaultTitle}
          </h3>
          <p className="text-md lg:text-lg leading-relaxed text-center">
            {activeTopic ? activeTopic.description : defaultDescription}
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