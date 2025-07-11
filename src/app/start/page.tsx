// app/start/page.tsx
"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Poppins } from 'next/font/google';

// --- Font Configuration ---
// Using Poppins with bold weights to match the design's strong typography.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'], // Semibold, Bold
});

// --- Configuration ---
// Colors sampled directly from your image for an exact match.
const COLOR_RED_BG = '#C51A25';    // The main page background
const COLOR_BLUE_PANEL = '#5A8DAA'; // The color of the side panels
const COLOR_INFO_BOX = '#C7E0EE';   // The light blue description box
const COLOR_BUTTON_BG = '#E0E0E0';  // The light grey button

// Data for the three columns, structured for easy management and clarity.
const sections = [
  {
    id: 'general',
    title: 'GENERAL',
    description: 'The general academic stream offers a broad-based education, covering a wide range of subjects and preparing you for diverse university studies in arts, humanities, and sciences.',
    panelColor: `bg-[${COLOR_BLUE_PANEL}]`, // This panel is blue
    headerComponent: (
      <Link href="/" className="text-md font-bold text-white uppercase tracking-widest">
        Future Guide
      </Link>
    ),
    footerComponent: (
       <div className="flex space-x-4">
          <Link href="#" aria-label="Instagram"><Instagram size={20} className="hover:opacity-70" /></Link>
          <Link href="#" aria-label="LinkedIn"><Linkedin size={20} className="hover:opacity-70" /></Link>
          <Link href="#" aria-label="Mail"><Mail size={20} className="hover:opacity-70" /></Link>
       </div>
    ),
    headerAlignment: 'md:justify-start',
    footerAlignment: 'md:justify-start',
  },
  {
    id: 'technical',
    title: 'TECHNICAL',
    description: 'The technical stream focuses on applied sciences, engineering, and technology. This path is designed for students with a strong interest in practical skills and careers in fields like IT or manufacturing.',
    panelColor: '#D6000E', // KEY: This panel is transparent to show the red background
    headerComponent: (
      <div className="text-white text-lg font-bold uppercase tracking-widest">
        Elevate
      </div>
    ),
    footerComponent: <div className="h-[28px] md:h-auto"></div>, // Spacer for layout consistency
    headerAlignment: 'md:justify-center',
    footerAlignment: 'md:justify-center',
  },
  {
    id: 'others',
    title: 'OTHERS',
    description: 'This category includes specialized vocational, artistic, and other unique educational paths. From fine arts to culinary studies, this stream caters to students with distinct passions and specific career goals.',
    panelColor: `bg-[${COLOR_BLUE_PANEL}]`, // This panel is blue
    headerComponent: (
      <nav className="space-x-8 text-sm text-white font-bold uppercase tracking-widest">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/start" className="hover:text-gray-300">Guide</Link>
        <Link href="/login" className="hover:text-gray-300">Login</Link>
      </nav>
    ),
    footerComponent: <div className="h-[28px] md:h-auto"></div>, // Spacer for layout consistency
    headerAlignment: 'md:justify-end',
    footerAlignment: 'md:justify-end',
  },
];

/**
 * A reusable component for rendering each column.
 * Its background is determined by the `panelColor` prop.
 */
function InfoColumn({ section }: { section: typeof sections[0] }) {
  const router = useRouter();

  // In src/app/start/page.tsx
const handleCategoryClick = (category: string) => {
  if (category.toLowerCase() === 'general') {
    // This path now correctly matches your file structure
    router.push('/start/general'); 
  } else {
    alert(`The page for the "${category}" category is not yet implemented.`);
  }
};
  return (
    <div className={`relative flex flex-col items-center justify-between p-6 md:py-8 md:px-6 min-h-[95vh] md:min-h-screen text-white ${section.panelColor}`}>
      {/* Header */}
      <header className={`w-full flex ${section.headerAlignment} justify-center`}>
        {section.headerComponent}
      </header>

      {/* Main content: Box + Button */}
      <div className="flex flex-col items-center text-center my-8 md:my-0">
        <div className={`bg-[${COLOR_INFO_BOX}] text-gray-900 font-semibold rounded-[2.5rem] w-60 h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 p-6 flex items-center justify-center shadow-lg`}>
           <p className="text-sm md:text-base leading-relaxed">{section.description}</p>
        </div>
        <button
          onClick={() => handleCategoryClick(section.title)}
          className={`mt-8 bg-[${COLOR_BUTTON_BG}] text-black font-bold py-3 px-12 rounded-full text-sm tracking-widest uppercase hover:bg-gray-300 transition-colors shadow-md`}
        >
          {section.title}
        </button>
      </div>

      {/* Footer */}
      <footer className={`w-full flex ${section.footerAlignment} justify-center`}>
         {section.footerComponent}
      </footer>
    </div>
  );
};


/**
 * The Start Page, visually aligned with the provided design.
 */
export default function StartPage() {
  return (
    // The main container has the RED background.
    <div className={`relative min-h-screen ${poppins.className} bg-[${COLOR_RED_BG}]`}>
        {/* Decorative Vertical Text */}
        <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 transform -rotate-90 text-sm font-bold tracking-widest text-white/60 hidden md:block z-10">
          ELEVATE
        </div>
        <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 transform rotate-90 text-sm font-bold tracking-widest text-white/60 hidden md:block z-10">
          ELEVATE
        </div>

      {/* The grid container creates the three-column layout. */}
      <main className="grid grid-cols-1 md:grid-cols-3">
        {sections.map((sec) => (
          <InfoColumn key={sec.id} section={sec} />
        ))}
      </main>
    </div>
  );
  
}