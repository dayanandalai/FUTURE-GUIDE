'use client';

import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// --- Data for the Game Developing roles ---
const gameDevRoles = [
  {
    key: 'engine_dev',
    title: 'GAME DEVELOPER\n(UNITY/UNREAL)',
    descriptionTitle: 'GAME DEVELOPER (UNITY/UNREAL)',
    description: 'Specializes in using industry-standard game engines like Unity (C#) or Unreal Engine (C++) to build the core mechanics, features, and functionality of a video game.',
    companies: 'Ubisoft, EA, Rockstar Games, Naughty Dog, Blizzard, Nazara, Dream11, MPL, Gametion, etc.',
  },
  {
    key: 'gameplay_prog',
    title: 'GAMEPLAY\nPROGRAMMER',
    descriptionTitle: 'GAMEPLAY PROGRAMMER',
    description: 'Focuses specifically on coding the rules and player interactions within the game. They bring the game designer\'s vision to life by programming character movements, AI behavior, and game logic.',
    companies: 'Most major and indie game studios.',
  },
  {
    key: 'tech_artist',
    title: 'TECHNICAL ARTIST',
    descriptionTitle: 'TECHNICAL ARTIST',
    description: 'Bridges the gap between the art and programming teams. They create tools, shaders, and pipelines to help artists import their work into the game engine efficiently and with high visual fidelity.',
    companies: 'Studios with a focus on high-quality graphics like Naughty Dog, Sucker Punch.',
  },
  {
    key: 'designer',
    title: 'GAME DESIGNER',
    descriptionTitle: 'GAME DESIGNER',
    description: 'The creative visionary behind a game. They design the core concepts, rules, levels, and story. While less coding-focused, a technical background is highly beneficial for this role.',
    companies: 'Nintendo, FromSoftware, and all major game development studios.',
  },
  {
    key: 'mobile_dev',
    title: 'MOBILE GAME\nDEVELOPER',
    descriptionTitle: 'MOBILE GAME DEVELOPER',
    description: 'Specializes in creating games for mobile platforms like Android and iOS. This involves optimizing for touch controls, varying screen sizes, and performance on less powerful hardware.',
    companies: 'Supercell, King, Zynga, Nazara, MPL.',
  },
  {
    key: 'others',
    title: 'OTHERS',
    descriptionTitle: 'OTHER ROLES',
    description: 'The game industry is vast, including roles like Graphics Programmer, AI Programmer, QA Tester, and Audio Engineer, each contributing a critical part to the final product.',
    companies: 'Specialized roles are found across the industry, from AAA to indie studios.',
  },
];


export default function GameDevelopingPage() {
  const [activeRoleKey, setActiveRoleKey] = useState(gameDevRoles[0].key);
  const activeRole = gameDevRoles.find(role => role.key === activeRoleKey);

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] p-4 sm:p-8 text-black font-sans overflow-hidden">
      {/* Header and Vertical Text */}
      <header className="flex justify-between items-center w-full mb-8 px-4">
        <h1 className="text-lg">FUTURE GUIDE</h1>
        <h2 className="text-lg hidden sm:block">ELEVATE</h2>
        <nav className="flex gap-6 text-lg">
          <a href="#" className="hover:text-white transition-colors">HOME</a>
          <a href="#" className="hover:text-white transition-colors">GUIDE</a>
          <a href="#" className="hover:text-white transition-colors">LOGIN</a>
        </nav>
      </header>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center hidden lg:block"><span className="text-lg tracking-widest">ELEVATE</span></div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 origin-center hidden lg:block"><span className="text-lg tracking-widest">ELEVATE</span></div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-start w-full max-w-6xl mx-auto pt-10">

        <h1 className="text-4xl lg:text-5xl font-bold mb-16 text-center">GAME DEVELOPING</h1>

        {/* Topic Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16">
          {gameDevRoles.map((role) => (
             <button
                key={role.key}
                onMouseEnter={() => setActiveRoleKey(role.key)}
                className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg px-6 py-4 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none flex items-center justify-center min-h-[80px]"
              >
                <span className="whitespace-pre-line leading-tight">{role.title}</span>
              </button>
          ))}
        </div>

        {/* Description Cards */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
            {activeRole && (
                <>
                    {/* Description Card */}
                    <div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 w-full flex flex-col justify-center items-center shadow-2xl">
                        <h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center">
                            {activeRole.descriptionTitle}
                        </h3>
                        <p className="text-md lg:text-lg leading-relaxed text-center">
                            {activeRole.description}
                        </p>
                    </div>
                    {/* Companies Hiring Card */}
                    <div className="bg-[#b3d4e0] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 w-full flex flex-col justify-center items-center shadow-2xl">
                        <h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center">
                            COMPANIES HIRING
                        </h3>
                        <p className="text-md lg:text-lg leading-relaxed text-center">
                            {activeRole.companies}
                        </p>
                    </div>
                </>
            )}
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