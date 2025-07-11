'use client';

import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// --- Data for the technical degrees ---
const technicalDegrees = [
	{
		key: 'btech',
		title: 'BACHELOR\nOF\nTECHNOLOGY',
		descriptionTitle: 'BACHELOR OF TECHNOLOGY',
		description:
			'A 4-year undergraduate program focused on practical and theoretical knowledge in engineering and technology fields. It prepares students for technical roles in various industries and serves as a gateway to advanced studies.',
	},
	{
		key: 'bpharm',
		title: 'BACHELOR\nOF\nPHARMACY',
		descriptionTitle: 'BACHELOR OF PHARMACY',
		description:
			'An undergraduate degree in the field of pharmaceutical science. Students learn about drug synthesis, pharmacology, and patient care, preparing for careers as pharmacists and in the pharmaceutical industry.',
	},
	{
		key: 'barch',
		title: 'BACHELOR\nOF\nARCHITECTURE',
		descriptionTitle: 'BACHELOR OF ARCHITECTURE',
		description:
			'A professional degree program covering the art and science of building design and construction. The curriculum combines artistic talent with technical knowledge of materials, structural engineering, and urban planning.',
	},
];

export default function TechnicalGuidePage() {
	const [activeDegreeKey, setActiveDegreeKey] = useState(technicalDegrees[0].key);
	const activeDegree = technicalDegrees.find((degree) => degree.key === activeDegreeKey);

	return (
		<main className="relative min-h-screen w-full font-sans overflow-hidden">
			<div className="flex h-screen">
				{/* Left Blue Column */}
				<div className="hidden lg:flex flex-none flex-col items-center justify-center w-28 bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] p-8 text-black relative h-full">
					{/* Vertically centered ELEVATE */}
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-90 origin-center whitespace-nowrap">
						<span className="text-lg font-semibold tracking-widest">ELEVATE</span>
					</div>
					{/* Social Media Icons - horizontally at bottom left */}
					<div className="absolute left-4 bottom-6 flex-row flex gap-4 text-2xl">
						<a href="#" className="hover:text-white transition-colors">
							<FaInstagram />
						</a>
						<a href="#" className="hover:text-white transition-colors">
							<FaLinkedin />
						</a>
						<a href="#" className="hover:text-white transition-colors">
							<FaEnvelope />
						</a>
					</div>
				</div>

				{/* Center Red Column */}
				<div className="flex-1 bg-gradient-to-b from-red-600 to-red-800 flex flex-col items-center p-8 text-white">
					{/* Header */}
					<header className="w-full flex justify-between items-center mb-8">
						<h1 className="text-lg font-semibold tracking-wider">FUTURE GUIDE</h1>
						<h2 className="text-lg font-semibold tracking-wider">ELEVATE</h2>
						<nav className="flex gap-6 text-lg font-semibold">
							<a href="#" className="hover:text-gray-300 transition-colors">
								HOME
							</a>
							<a href="#" className="hover:text-gray-300 transition-colors">
								GUIDE
							</a>
							<a href="/login" className="hover:text-gray-300 transition-colors">
								LOGIN
							</a>
						</nav>
					</header>

					{/* Main Content */}
					<div className="flex-1 flex flex-col items-center justify-center gap-16 w-full max-w-4xl">
						{/* Top Cards */}
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
							{technicalDegrees.map((degree) =>
								degree.key === 'btech' ? (
									<button
										key={degree.key}
										onClick={() => (window.location.href = '/technical_guide')}
										className="bg-[#d1e6ec] text-black rounded-3xl p-6 shadow-xl flex items-center justify-center h-48 hover:bg-white hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
									>
										<span className="text-xl font-bold text-center whitespace-pre-line leading-tight">
											{degree.title}
										</span>
									</button>
								) : (
									<button
										key={degree.key}
										onMouseEnter={() => setActiveDegreeKey(degree.key)}
										className="bg-[#d1e6ec] text-black rounded-3xl p-6 shadow-xl flex items-center justify-center h-48 hover:bg-white hover:scale-105 transition-all duration-300 ease-in-out"
									>
										<span className="text-xl font-bold text-center whitespace-pre-line leading-tight">
											{degree.title}
										</span>
									</button>
								),
							)}
						</div>

						{/* Bottom Description Card */}
						{activeDegree && (
							<div className="bg-[#d1e6ec] text-black rounded-3xl p-8 shadow-xl w-full">
								<h3 className="text-2xl font-bold text-center mb-4">
									{activeDegree.descriptionTitle}
								</h3>
								<p className="text-lg text-center leading-relaxed">
									{activeDegree.description}
								</p>
							</div>
						)}
					</div>
				</div>

				{/* Right Blue Column */}
				<div className="hidden lg:flex flex-none items-center justify-center w-28 bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] text-black">
					<div className="transform rotate-90 origin-center whitespace-nowrap">
						<span className="text-lg font-semibold tracking-widest">ELEVATE</span>
					</div>
				</div>
			</div>
		</main>
	);
}