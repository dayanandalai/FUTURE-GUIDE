// app/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import useRouter

// Replace with your actual image paths in the /public folder
const treeImageSrc = '/images/image-tree-on-cliff.png';
const ctaBgImageSrc = '/images/image-cta-background.jpg';

// Colors for the hero gradient (approximated from your image)
const HERO_GRADIENT_FROM = '#0D6EFF'; // Vibrant Blue
const HERO_GRADIENT_VIA = '#D6000E';  // Strong Red (Center)
const HERO_GRADIENT_TO = '#0D6EFF';   // Vibrant Blue

export default function HomePage() {
  const router = useRouter(); // Initialize the router

  // Generic button click handler for demonstration (for buttons not navigating yet)
  const handleAlertClick = (actionName: string) => {
    alert(`Button "${actionName}" clicked! This button does not navigate yet.`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      {/* --- Section 1: Hero --- */}
      <section
        className="relative min-h-[calc(90vh)] md:min-h-[calc(85vh)] text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, ${HERO_GRADIENT_FROM}, ${HERO_GRADIENT_VIA}, ${HERO_GRADIENT_TO})`
        }}
      >
        {/* Decorative side text "ELEVATE" */}
        <div className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 transform -rotate-90 text-xs md:text-sm tracking-widest text-white opacity-70 hidden lg:block">
          ELEVATE
        </div>
        <div className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 transform -rotate-90 text-xs md:text-sm tracking-widest text-white opacity-70 hidden lg:block">
          ELEVATE
        </div>

        <div className="relative z-10 container mx-auto px-5 h-full flex flex-col">
          {/* ELEVATE logo at the top center */}
          <div className="absolute top-5 md:top-6 left-1/2 -translate-x-1/2 text-white text-xl md:text-2xl font-bold z-20">
            ELEVATE
          </div>

          {/* Navigation Bar */}
          <nav className="py-5 md:py-15 flex justify-between items-center relative z-10">
            <Link href="/" className="text-lg md:text-xl font-bold text-white">
              FUTURE GUIDE
            </Link>
            <div className="space-x-3 md:space-x-6 text-xs md:text-sm text-white">
              <Link href="#" className="hover:text-gray-300">HOME</Link>
              <Link href="#" className="hover:text-gray-300">GUIDE</Link>
              {/* UPDATED NAV LOGIN BUTTON */}
              <button onClick={() => router.push('/login')} className="hover:text-gray-400">LOGIN</button>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex-grow flex flex-col md:flex-row items-center justify-around pt-10 pb-16 md:pt-40">
            <div className="text-center md:text-left mb-12 md:mb-0 md:w-2/5">
              <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-bold mb-6 leading-tight">
                PLAN YOUR<br />FUTURE
              </h1>
              {/* UPDATED START BUTTON */}
              <button
                onClick={() => router.push('/start')}
                className="bg-gray-200 text-gray-800 py-2.5 px-7 rounded-xl font-semibold hover:bg-gray-400 transition-colors shadow-md text-sm flex items-center justify-center space-x-2 mx-auto md:mx-0"
              >
                <span>→</span> <span>START</span>
              </button>
            </div>

            <div className="w-1/5 hidden md:block" aria-hidden="true"></div>

            <div className="text-center md:text-right md:w-2/5">
              <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-bold mb-6 leading-tight">
                ACT WITH<br />PURPOSE
              </h1>
              {/* UPDATED HERO LOGIN BUTTON */}
              <button
                onClick={() => router.push('/login')}
                className="bg-gray-200 text-gray-800 py-2.5 px-7 rounded-xl font-semibold hover:bg-gray-400 transition-colors shadow-md text-sm flex items-center justify-center space-x-2 mx-auto md:mx-120"
              >
                 <span>LOGIN</span> <span>←</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Unlock Your Future Intro --- */}
      <section className="py-12 md:py-40 bg-[#A9D0E9] text-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                Unlock Your Future with Tailored Career Guidance and Planning Tools
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At Future Guidance, we understand that every student has unique aspirations. Our personalized career guidance helps you navigate your options effectively. With our innovative planning tools, you can take actionable steps towards achieving your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Features --- */}
      <section className="py-12 md:py-20 bg-[#A9D0E1] text-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            { title: "Empower Your Journey with Innovative Planning Tools and Resources", desc: "Our planning tools simplify the process of mapping out your career.", buttonText: "Explore" },
            { title: "Achieve Your Goals with Actionable Tasks and Expert Guidance", desc: "Take actionable steps towards your career aspirations with our expert support.", buttonText: "Get Started" },
            { title: "Transform Your Future with Comprehensive Career Planning Solutions", desc: "Our comprehensive solutions are designed to help you succeed.", buttonText: "Join Us" },
          ].map((feature) => (
            <div key={feature.title} className="flex flex-col items-start p-2">
              <h3 className="text-lg md:text-xl font-semibold mb-2.5">{feature.title}</h3>
              <p className="text-slate-700 mb-4 text-xs md:text-sm flex-grow">{feature.desc}</p>
              <button
                onClick={() => handleAlertClick(feature.buttonText)} // Using alert for these for now
                className="mt-auto bg-white text-slate-800 py-2 px-5 rounded-md font-medium hover:bg-gray-200 transition-colors shadow-sm text-xs"
              >
                {feature.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 4: Your Path to a Successful Career --- */}
      <section className="py-12 md:py-20 bg-[#D6000E] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Your Path to a Successful Career
          </h2>
          <p className="text-center text-gray-200 mb-10 md:mb-14 max-w-xl mx-auto text-sm md:text-base">
            At Future Guide, we empower students with personalized career planning. Our step-by-step approach ensures clarity and direction.
          </p>
          {/* ... (image and text content) ... */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1.5">Explore Your Options</h3>
                <p className="text-gray-300 text-xs md:text-sm">Discover various career paths tailored to your interests and strengths.</p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1.5">Create Your Plan</h3>
                <p className="text-gray-300 text-xs md:text-sm">Develop a personalized action plan that aligns with your career goals.</p>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] max-w-sm mx-auto md:max-w-none rounded-lg overflow-hidden shadow-xl">
              <Image src={treeImageSrc} alt="Scenic view of a tree on a cliff" fill objectFit="cover" />
            </div>

            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1.5">Get Expert Guidance</h3>
                <p className="text-gray-300 text-xs md:text-sm">Receive insights and advice from experienced career counselors to navigate your journey.</p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1.5">Take Action Now</h3>
                <p className="text-gray-300 text-xs md:text-sm">Start your career planning today and unlock your potential.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-14 text-center">
            <button
              onClick={() => handleAlertClick('Learn More')} // Using alert for this for now
              className="bg-white text-[#9B1C1C] py-2.5 px-7 rounded-md font-semibold hover:bg-gray-200 transition-colors mr-3 shadow-md text-sm"
            >
              Learn More
            </button>
            <button
              onClick={() => handleAlertClick('Sign Up (Path Section)') } // Using alert for this for now
              className="text-white hover:underline font-semibold text-sm"
            >
              Sign Up →
            </button>
          </div>
        </div>
      </section>

      {/* --- Section 5: Unlock Your Future Today CTA --- */}
      <section className="relative py-20 md:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <Image src={ctaBgImageSrc} alt="Abstract background for CTA" fill objectFit="cover" className="brightness-[0.4]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Unlock Your Future Today</h2>
          <p className="mb-6 max-w-lg mx-auto text-gray-200 text-sm md:text-base">
            Join us for personalized career guidance and planning tools tailored just for you.
          </p>
          <button
            onClick={() => handleAlertClick('Sign Up (CTA)')} // Using alert for this for now
            className="bg-white text-slate-800 py-2.5 px-7 rounded-md font-semibold hover:bg-gray-200 transition-colors shadow-md text-sm"
          >
            Sign Up
          </button>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-10 md:py-14 bg-[#A9D0E1] text-slate-700">
        <div className="container mx-auto px-4">
          {/* ... (footer content) ... */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
            <div className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-0">ELEVATE</div>
            <nav className="flex space-x-4 md:space-x-6 text-sm">
              <Link href="#" className="hover:text-slate-900">Contact Us</Link>
              <Link href="#" className="hover:text-slate-900">About Us</Link>
            </nav>
          </div>
          <div className="border-t border-slate-400/60 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="mb-4 md:mb-0 text-slate-600">© {new Date().getFullYear()} Future Guide. All Rights Reserved.</p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex space-x-3">
                <Link href="#" className="hover:text-slate-900">Privacy Policy</Link>
                <Link href="#" className="hover:text-slate-900">Terms of Service</Link>
                <button onClick={() => handleAlertClick('Cookie Settings')} className="hover:text-slate-900">Cookie Settings</button>
              </div>
              <div className="flex space-x-3 text-slate-600">
                <Link href="#" aria-label="Facebook"><Facebook size={18} className="hover:text-slate-900" /></Link>
                <Link href="#" aria-label="Twitter"><Twitter size={18} className="hover:text-slate-900" /></Link>
                <Link href="#" aria-label="LinkedIn"><Linkedin size={18} className="hover:text-slate-900" /></Link>
                <Link href="#" aria-label="Instagram"><Instagram size={18} className="hover:text-slate-900" /></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}