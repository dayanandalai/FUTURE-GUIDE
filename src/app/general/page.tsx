'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// --- Data for the right-side categories ---
const rightSideCategories = [
	{
		key: 'bsc',
		title: 'B.SC',
		description:
			'Bachelor of Science focuses on scientific principles and research. Explore subjects like Physics, Chemistry, Biology, and Mathematics.',
		href: '/guide',
	},
	{
		key: 'ba',
		title: 'BA',
		description:
			'Bachelor of Arts covers a broad range of humanities and social sciences. Dive into subjects like History, Literature, Economics, and Sociology.',
		href: '/art_guide',
	},
];

export default function GeneralStudiesPage() {
	return (
		<main className="relative min-h-screen w-full font-sans overflow-hidden">
			<div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-4 sm:p-8">
				{/* Top-left Header */}
				<h1 className="text-lg font-semibold tracking-wider text-white">
					FUTURE GUIDE
				</h1>

				{/* Top-center Header */}
				<h2 className="text-lg font-semibold tracking-wider hidden sm:block text-white">
					ELEVATE
				</h2>

				{/* Top-right Navigation */}
				<nav className="flex gap-6 text-lg font-semibold text-white">
					<Link
						href="/"
						className="hover:text-white transition-colors"
					>
						HOME
					</Link>
					<Link
						href="/firstpage"
						className="hover:text-white transition-colors"
					>
						GUIDE
					</Link>
					<Link
						href="/login"
						className="hover:text-white transition-colors"
					>
						LOGIN
					</Link>
				</nav>
			</div>

			<div className="flex flex-col lg:flex-row h-screen">
				{/* --- Left Column (Red) --- */}
				<div className="flex-1 lg:flex-none lg:w-1/3 bg-gradient-to-b from-red-600 to-red-800 flex flex-col items-center justify-center p-8 gap-12 relative">
					<div className="bg-[#d1e6ec] bg-opacity-80 rounded-3xl w-64 h-64 flex items-center justify-center p-6 shadow-xl">
						<p className="text-md lg:text-lg leading-relaxed text-center font-semibold text-gray-800">
							General studies form the foundation of higher education,
							exploring a wide range of subjects in arts and sciences.
						</p>
					</div>
					<Link href="/art_guide" passHref>
						<div className="bg-gray-300 bg-opacity-70 hover:bg-white hover:scale-105 text-black text-center text-xl font-semibold px-12 py-4 rounded-full transition-all duration-300 ease-in-out shadow-lg cursor-pointer">
							GENERAL
						</div>
					</Link>
					{/* Footer Icons (only for the left column) */}
					<footer className="absolute bottom-8 left-8 flex gap-4 text-2xl text-white">
						<a
							href="#"
							aria-label="Instagram"
							className="hover:text-gray-300 transition-colors"
						>
							<FaInstagram />
						</a>
						<a
							href="#"
							aria-label="LinkedIn"
							className="hover:text-gray-300 transition-colors"
						>
							<FaLinkedin />
						</a>
						<a
							href="#"
							aria-label="Email"
							className="hover:text-gray-300 transition-colors"
						>
							<FaEnvelope />
						</a>
					</footer>
				</div>

				{/* --- Right Column (Blue) --- */}
				<div className="flex-1 lg:w-2/3 bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] flex flex-col items-center justify-center p-8 gap-12 relative">
					{/* Vertical Text */}
					<div className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 origin-center hidden lg:block">
						<span className="text-lg font-semibold tracking-widest text-black">
							ELEVATE
						</span>
					</div>

					{rightSideCategories.map((category) => (
						<div
							key={category.key}
							className="flex items-center justify-center gap-8 w-full max-w-lg"
						>
							<div className="bg-[#d1e6ec] bg-opacity-80 rounded-3xl w-64 h-40 flex flex-col items-center justify-center p-4 shadow-xl">
								<h3 className="text-3xl font-bold text-gray-800">
									{category.title}
								</h3>
								<p className="text-sm text-center text-gray-700 mt-2">
									{category.description}
								</p>
							</div>
							<Link
								href={category.href}
								className="bg-gray-300 bg-opacity-70 hover:bg-white hover:scale-105 text-black text-center text-xl font-semibold px-12 py-4 rounded-full transition-all duration-300 ease-in-out shadow-lg cursor-pointer flex items-center justify-center min-h-[56px]"
							>
								{category.title}
							</Link>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}