// app/guide/general/page.tsx
"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Poppins } from 'next/font/google';

// --- Font Configuration ---
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'], // Semibold & Bold for the strong typography
});

// --- Configuration ---
// Colors sampled directly from your image for an exact match.
const COLOR_RED_PANEL = '#C51A25';
const COLOR_BLUE_PANEL = '#5A8DAA';
const COLOR_INFO_BOX = '#C7E0EE';
const COLOR_BUTTON_BG = '#E0E0E0';

// --- Reusable Component for Course Items ---
function CourseItem({ title, category }: { title: string, category: string }) {
  return (
    <div className="flex items-center gap-x-6 w-full max-w-md">
      {/* The course title box */}
      <div className="flex-grow bg-[#C7E0EE] text-gray-900 font-bold rounded-2xl h-24 flex items-center justify-center shadow-lg text-2xl uppercase">
        {title}
      </div>
      {/* The category button */}
      <button className={`bg-[${COLOR_BUTTON_BG}] text-black font-bold py-3 px-8 rounded-full text-sm tracking-widest uppercase hover:bg-gray-300 transition-colors shadow-md whitespace-nowrap`}>
        {category}
      </button>
    </div>
  );
}

// --- Main Page Component ---
export default function GeneralGuidePage() {
  const router = useRouter();

  // Data for the courses on the right panel
  const courses = [
    { id: 'bsc', title: 'B.Sc', category: 'GENERAL' },
    { id: 'ba', title: 'BA', category: 'GENERAL' },
  ];

  return (
    <div className={`min-h-screen ${poppins.className}`}>
      <main className="grid grid-cols-1 md:grid-cols-2">
        {/* --- Left Panel (Red) --- */}
        <section className={`relative flex flex-col items-center justify-between p-6 md:p-8 min-h-screen bg-[${COLOR_RED_PANEL}] text-white`}>
          <header className="w-full flex justify-start">
            <Link href="/" className="text-md font-bold uppercase tracking-widest">
              Future Guide
            </Link>
          </header>

          <div className="flex flex-col items-center text-center my-8">
            <div className={`bg-[${COLOR_INFO_BOX}] text-gray-900 font-semibold rounded-[2.5rem] w-64 h-64 lg:w-72 lg:h-72 p-6 flex items-center justify-center shadow-lg`}>
              <p className="text-base leading-relaxed">
                The General stream provides a foundational education in core academic disciplines, preparing students for a wide array of university degrees and professional careers.
              </p>
            </div>
            <button
              onClick={() => router.back()} // Go back to the previous page
              className={`mt-8 bg-[${COLOR_BUTTON_BG}] text-black font-bold py-3 px-12 rounded-full text-sm tracking-widest uppercase hover:bg-gray-300 transition-colors shadow-md`}
            >
              GENERAL
            </button>
          </div>
          
          <div className="h-[28px]"></div> {/* Spacer for layout balance */}
        </section>

        {/* --- Right Panel (Blue) --- */}
        <section className={`relative flex flex-col items-center justify-between p-6 md:p-8 min-h-screen bg-[${COLOR_BLUE_PANEL}] text-white`}>
          {/* Decorative Vertical Text */}
          <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 transform rotate-90 text-sm font-bold tracking-widest text-white/60 hidden md:block z-10">
            ELEVATE
          </div>
          
          {/* Header */}
          <header className="w-full relative flex justify-center items-center">
             <div className="absolute left-0 text-lg font-bold uppercase tracking-widest">
               ELEVATE
             </div>
             <nav className="flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
                <Link href="/" className="hover:text-gray-300">Home</Link>
                <Link href="/start" className="hover:text-gray-300">Guide</Link>
                <Link href="/login" className="hover:text-gray-300">Login</Link>
             </nav>
          </header>

          {/* Main Content: List of Courses */}
          <div className="w-full flex flex-col items-center gap-y-12 my-8 px-4">
            {courses.map(course => (
              <CourseItem key={course.id} title={course.title} category={course.category} />
            ))}
          </div>

          <div className="h-[28px]"></div> {/* Spacer for layout balance */}
        </section>
      </main>
    </div>
  );
}