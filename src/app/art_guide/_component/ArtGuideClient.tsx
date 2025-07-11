'use client';

import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { type Subject } from '@prisma/client';
import Link from 'next/link';
interface ArtGuideClientProps {
  subjects: Subject[];
}

export default function ArtGuideClient({ subjects }: ArtGuideClientProps) {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (subjects && subjects.length > 0) {
      setSelectedSubject(subjects[0]);
    }
  }, [subjects]);

  if (!subjects || subjects.length === 0) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-800 text-white">
        Loading Arts subjects or none found...
      </div>
    );
  }

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#87c4d5] to-[#599eb9] p-4 sm:p-8 text-black font-sans overflow-hidden">
      {/* Header Section */}
      <header className="flex justify-between items-center w-full mb-8 px-4">
        <h1 className="text-lg">FUTURE GUIDE</h1>
        <h2 className="text-lg hidden sm:block">ELEVATE</h2>
        <nav className="flex gap-6 text-lg">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <Link href="/firstpage" className="hover:text-white transition-colors">GUIDE</Link>
          <Link href="/login" className="hover:text-white transition-colors">LOGIN</Link>
        </nav>
      </header>

      {/* Vertical Text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center hidden lg:block">
        <span className="text-lg tracking-widest">ELEVATE</span>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 origin-center hidden lg:block">
        <span className="text-lg tracking-widest">ELEVATE</span>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto">
        {/* Left: Subject List with Red Theme */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="bg-gradient-to-b from-red-600 to-red-800 p-4 sm:p-6 lg:h-full lg:rounded-r-3xl shadow-2xl">
            <div className="flex flex-wrap lg:flex-col gap-4">
              {subjects.map((subject) => (
                <button
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject)}
                  className={`w-full text-left text-lg p-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none ${
                    selectedSubject?.id === subject.id
                      ? 'bg-white shadow-lg scale-105 text-black'
                      : 'bg-gray-300 bg-opacity-70 hover:bg-gray-200 text-black'
                  }`}
                >
                  {subject.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Description Card */}
        <div className="w-full lg:w-2/3">
          {selectedSubject && (
            <div className="bg-[#cce3e9] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 h-full flex flex-col justify-center min-h-[350px] shadow-2xl">
              <h3 className="text-3xl lg:text-4xl mb-6">{selectedSubject.name}</h3>
              <p className="text-md lg:text-lg leading-relaxed">{selectedSubject.description}</p>
              <div className="mt-auto pt-6 flex justify-center">
                <button
                  onClick={() => router.push('/start')}
                  className="bg-gray-200 text-gray-800 py-2.5 px-7 rounded-full font-semibold hover:bg-white transition-colors shadow-md text-sm flex items-center justify-center space-x-2"
                >
                  <span>→</span> <span>CHOOSE</span>
                </button>
              </div>
            </div>
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