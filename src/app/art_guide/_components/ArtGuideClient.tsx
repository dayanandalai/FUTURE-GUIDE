'use client';

import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { type Subject } from '@prisma/client';

interface ArtGuideClientProps {
  subjects: Subject[];
}

export default function ArtGuideClient({ subjects }: ArtGuideClientProps) {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [hoveredSubject, setHoveredSubject] = useState<Subject | null>(null);
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
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#87c4d5] to-[#599eb9] text-black font-[Poppins] overflow-hidden flex flex-col">
      {/* Header Section */}
      <header className="flex justify-between items-center w-full px-12 pt-8 pb-4">
        <h1 className="text-xl font-bold tracking-wider">FUTURE GUIDE</h1>
        <h2 className="text-base font-bold tracking-wider text-center absolute left-1/2 -translate-x-1/2">
          ELEVATE
        </h2>
        <nav className="flex gap-8 text-lg font-medium">
          <a href="#" className="hover:text-white transition-colors">
            HOME
          </a>
          <a href="#" className="hover:text-white transition-colors">
            GUIDE
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LOGIN
          </a>
        </nav>
      </header>
      <div className="flex flex-1 w-full h-full">
        {/* Sidebar on the left */}
        <aside className=" fixed top-0 left-0 bg-[#a80000] w-full max-w-xs min-w-[320px] h-full flex flex-col justify-between  p-8  ml-65 z-10">
          <div className="flex flex-col gap-6 mt-8">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                className={`w-full py-3 px-4 rounded-full font-normal text-lg bg-white hover:bg-[#e0e0e0] transition-colors border-2 border-black shadow text-black ${
                  selectedSubject?.id === subject.id
                    ? 'bg-[#fff] border-4 border-[#222]'
                    : ''
                }`}
                onMouseEnter={() => setHoveredSubject(subject)}
                onMouseLeave={() => setHoveredSubject(null)}
                onClick={() => {
                  // Route based on subject name (slugify for path)
                  const slug = subject.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '_')
                    .replace(/^_|_$/g, '');
                  router.push(`/${slug}`);
                }}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </aside>
        {/* Main Content */}
        <section className="flex-1 flex flex-col items-center justify-center relative">
          {hoveredSubject ? (
            <div className="bg-[#e0f7fa] bg-opacity-90 rounded-3xl p-12 shadow-lg max-w-2xl w-full mt-8 ml-auto mr-32 flex flex-col items-center">
              <h3 className="text-3xl font-normal mb-6 text-center tracking-wide">
                {hoveredSubject.name}
              </h3>
              <p
                className="text-lg font-normal text-black text-center tracking-wide"
                style={{ fontFamily: 'monospace' }}
              >
                {hoveredSubject.description}
              </p>
            </div>
          ) : selectedSubject ? (
            <div className="bg-[#e0f7fa] bg-opacity-90 rounded-3xl p-12 shadow-lg max-w-2xl w-full mt-8 ml-auto mr-32 flex flex-col items-center">
              <h3 className="text-3xl font-normal mb-6 text-center tracking-wide">
                {selectedSubject.name}
              </h3>
              <p
                className="text-lg font-normal text-black text-center tracking-wide"
                style={{ fontFamily: 'monospace' }}
              >
                {selectedSubject.description}
              </p>
            </div>
          ) : null}
        </section>
      </div>
      {/* Vertical ELEVATE text with space */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[-90deg] text-black font-bold tracking-widest text-sm select-none"
        style={{ letterSpacing: '0.2em', left: '32px' }}
      >
        ELEVATE
      </div>
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-black font-bold tracking-widest text-sm select-none"
        style={{ letterSpacing: '0.2em', right: '32px' }}
      >
        ELEVATE
      </div>
      {/* Social Media Icons fixed to bottom left OUTSIDE sidebar */}
      <div className="fixed left-8 bottom-8 z-50 flex gap-4 items-center">
        <a href="#" className="text-black hover:text-white">
          <FaInstagram size={22} />
        </a>
        <a href="#" className="text-black hover:text-white">
          <FaLinkedin size={22} />
        </a>
        <a href="#" className="text-black hover:text-white">
          <FaEnvelope size={22} />
        </a>
      </div>
    </main>
  );
}
