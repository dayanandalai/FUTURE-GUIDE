'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function FirstPage() {
  return (
    <main className="fixed inset-0 w-screen h-screen flex flex-row overflow-hidden items-center">
      {/* Header at the top of the page */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-20">
        <h1 className="text-lg font-semibold tracking-wider">FUTURE GUIDE</h1>
        <nav className="flex gap-6 text-lg font-semibold">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <Link href="/firstpage" className="hover:text-white transition-colors">GUIDE</Link>
          <Link href="/login" className="hover:text-white transition-colors">LOGIN</Link>
        </nav>
      </header>

      {/* Left Column - GENERAL */}
      <section className="flex-1 flex flex-col items-center bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] p-8 relative justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="bg-[#c6f6fa] rounded-3xl w-64 h-64 flex items-center justify-center p-6 shadow-xl">
            <p className="text-md text-center text-gray-800 font-semibold break-words overflow-hidden w-full h-full flex items-center justify-center">
              General studies form the foundation of higher education, encompassing a wide range of subjects in arts and sciences. This includes Bachelor of Arts (B.A.) and Bachelor of Science (B.Sc.) degrees, focusing on critical thinking, research, and broad knowledge.
            </p>
          </div>
          <Link href="/general" className="bg-gray-200 text-black font-bold text-xl px-8 py-4 rounded-full shadow hover:bg-white transition-all mx-auto flex items-center justify-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            GENERAL
          </Link>
        </div>
        {/* Vertical ELEVATE - Center vertically, left edge */}
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold tracking-widest flex flex-col items-center" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
          ELEVATE
        </span>
        {/* Social Media Icons - Bottom left corner */}
        <div className="absolute left-6 bottom-6 flex gap-4 text-2xl">
          <a href="#" aria-label="Instagram" className="hover:text-black"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-black"><FaLinkedin /></a>
          <a href="#" aria-label="Email" className="hover:text-black"><FaEnvelope /></a>
        </div>
      </section>

      {/* Middle Column - TECHNICAL */}
      <section className="flex-1 flex flex-col items-center bg-gradient-to-b from-red-600 to-red-800 p-8 justify-center h-full relative">
        <div className="w-full flex justify-center absolute top-8 left-0">
          <h2 className="text-lg font-semibold tracking-wider text-white">ELEVATE</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 h-full">
          <div className="bg-[#c6f6fa] rounded-3xl w-64 h-64 flex items-center justify-center p-6 shadow-xl">
            <p className="text-md text-center text-gray-800 font-semibold break-words overflow-hidden w-full h-full flex items-center justify-center">
              Technical fields are centered on applied science and engineering. These programs, like a Bachelor of Technology (B.Tech), provide hands-on skills and deep knowledge in specific domains like computer science, civil, and mechanical engineering.
            </p>
          </div>
          <Link href="/technical" className="bg-gray-200 text-black font-bold text-xl px-8 py-4 rounded-full shadow hover:bg-white transition-all mx-auto flex items-center justify-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            TECHNICAL
          </Link>
        </div>
      </section>

      {/* Right Column - OTHERS */}
      <section className="flex-1 flex flex-col items-center bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] p-8 relative justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="bg-[#c6f6fa] rounded-3xl w-64 h-64 flex items-center justify-center p-6 shadow-xl">
            <p className="text-md text-center text-gray-800 font-semibold break-words overflow-hidden w-full h-full flex items-center justify-center">
              This category includes specialized and vocational fields that offer direct pathways to specific careers. It covers a diverse range of areas such as design, paramedical sciences, hospitality, and other skill-based professional courses.
            </p>
          </div>
          <Link href="/other_guides" className="bg-gray-200 text-black font-bold text-xl px-8 py-4 rounded-full shadow hover:bg-white transition-all mx-auto flex items-center justify-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            OTHERS
          </Link>
        </div>
        {/* Vertical ELEVATE - Center vertically, right edge */}
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg font-semibold tracking-widest flex flex-col items-center" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
          ELEVATE
        </span>
      </section>
    </main>
  );
}