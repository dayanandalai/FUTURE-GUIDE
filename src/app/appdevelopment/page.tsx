'use client';

import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// --- Data for the App Developer roles ---
const appDevRoles = [
  {
    key: 'mobile_app',
    title: 'MOBILE APP DEVELOPER',
    descriptionTitle: 'MOBILE APP DEVELOPER',
    description: 'A generalist role focused on creating, testing, and maintaining applications for mobile devices. They ensure the app is responsive, user-friendly, and performs well across different screen sizes and operating systems.',
    companies: 'Google, Microsoft, Apple, Flipkart, PhonePe, Paytm, Swiggy, Zomato, Cred, Meesho, Groww, etc.',
  },
  {
    key: 'native',
    title: 'ANDROID/IOS ENGINEER',
    descriptionTitle: 'ANDROID/IOS ENGINEER',
    description: 'A specialist who builds applications for a single platform (either Android or iOS) using native technologies like Kotlin/Java for Android or Swift/Objective-C for iOS. This allows for the best performance and integration with the device.',
    companies: 'Google (Android), Apple (iOS), Meta, Snap, top-tier product companies.',
  },
  {
    key: 'cross_platform',
    title: 'CROSS-PLATFORM APP DEVELOPER',
    descriptionTitle: 'CROSS-PLATFORM APP DEVELOPER',
    description: 'Uses frameworks like React Native or Flutter to write a single codebase that runs on both Android and iOS. This approach speeds up development time and is popular among startups and companies with smaller teams.',
    companies: 'Startups, consulting firms, companies seeking cost-effective development.',
  },
  {
    key: 'flutter',
    title: 'FLUTTER DEVELOPER',
    descriptionTitle: 'FLUTTER DEVELOPER',
    description: 'A specialist in Google\'s Flutter framework. Flutter is known for its high-performance, expressive UI and fast development cycle, allowing developers to build beautiful native apps for mobile, web, and desktop from one codebase.',
    companies: 'Google, BMW, Tencent, and a growing number of startups.',
  },
  {
    key: 'react_native',
    title: 'REACT NATIVE DEVELOPER',
    descriptionTitle: 'REACT NATIVE DEVELOPER',
    description: 'A specialist in Meta\'s React Native framework. This role is ideal for developers with a web background in React, as it allows them to leverage their existing skills to build native mobile applications.',
    companies: 'Meta (Facebook, Instagram), Shopify, Tesla, Discord.',
  },
];


export default function AppDeveloperPage() {
  const [activeRoleKey, setActiveRoleKey] = useState(appDevRoles[0].key);
  const activeRole = appDevRoles.find(role => role.key === activeRoleKey);

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

        <h1 className="text-4xl lg:text-5xl font-bold mb-16 text-center">APP DEVELOPER</h1>

        {/* Topic Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-6 w-full max-w-5xl mb-16">
          {appDevRoles.map((role) => (
             <button
                key={role.key}
                onMouseEnter={() => setActiveRoleKey(role.key)}
                className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none"
              >
                {role.title}
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