'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link'
// --- Data for the higher studies topics ---
// Using '\n' for line breaks in the button titles.
const studyTopics = [
	{
		key: 'degrees',
		title: 'POSTGRADUATE\nDEGREES',
		descriptionTitle: 'POSTGRADUATE DEGREES',
		href: '/higher-studies/degrees',
		description:
			'Pursue advanced academic qualifications like a Master of Science (M.Sc.), Master of Technology (M.Tech), or an MBA. These programs offer deep specialization and research opportunities, leading to roles in academia, R&D, and senior management.',
	},
	{
		key: 'certs',
		title: 'CERTIFICATIONS/\nDIPLOMAS',
		descriptionTitle: 'CERTIFICATIONS / DIPLOMAS',
		href: '/higher-studies/certifications',
		description:
			'Gain industry-recognized skills through specialized certifications and postgraduate diplomas. These focused, shorter-term programs in areas like Data Science, Project Management (PMP), or Digital Marketing can significantly boost your employability and career prospects.',
	},
];

function HigherStudiesPage() {
	const router = useRouter();

	// State to track the currently hovered topic. Default to the first one.
	const [activeTopicKey, setActiveTopicKey] = useState(studyTopics[0].key);

	// Find the full object for the active topic.
	const activeTopic = studyTopics.find((topic) => topic.key === activeTopicKey);

	return (
		<main className="relative min-h-screen w-full bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] p-4 sm:p-8 text-black font-sans overflow-hidden">
			{/* Header and Vertical Text */}
			<header className="flex justify-between items-center w-full mb-8 px-4">
				<h1 className="text-lg">FUTURE GUIDE</h1>
				<h2 className="text-lg hidden sm:block">ELEVATE</h2>
				<nav className="flex gap-6 text-lg">
					 <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                     <Link href="/firstpage" className="hover:text-white transition-colors">GUIDE</Link>
                     <Link href="/login" className="hover:text-white transition-colors">LOGIN</Link>
				</nav>
			</header>
			<div className="absolute left-4 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center hidden lg:block">
				<span className="text-lg tracking-widest">ELEVATE</span>
			</div>
			<div className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 origin-center hidden lg:block">
				<span className="text-lg tracking-widest">ELEVATE</span>
			</div>

			{/* Main Content Area */}
			<div className="flex flex-col items-center justify-start w-full max-w-5xl mx-auto pt-16">
				<h1 className="text-4xl lg:text-5xl font-bold mb-20 text-center">
					HIGHER STUDIES
				</h1>

				{/* Topic Buttons and Description Side by Side */}
				<div className="flex flex-col md:flex-row justify-center items-start gap-10 w-full mb-16">
					{/* Buttons Column */}
					<div className="flex flex-col gap-6 w-full md:w-1/3">
						{studyTopics.map((topic) => {
							let href = '';
							if (topic.key === 'degrees') href = '/postgradcse';
							else if (topic.key === 'certs') href = '/csediploma';
							else href = topic.href;
							return (
								<Link
									key={topic.key}
									href={href}
									className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg px-8 py-8 rounded-3xl transition-all duration-300 ease-in-out transform focus:outline-none w-full flex items-center justify-center"
									onMouseEnter={() => setActiveTopicKey(topic.key)}
								>
									<span className="whitespace-pre-line leading-tight">{topic.title}</span>
								</Link>
							);
						})}
					</div>

					{/* Description Card Column */}
					{activeTopic && (
						<div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 w-full md:w-2/3 min-h-[200px] flex flex-col justify-center items-center shadow-2xl">
							<h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center">
								{activeTopic.descriptionTitle}
							</h3>
							<p className="text-md lg:text-lg leading-relaxed text-center">
								{activeTopic.description}
							</p>
						</div>
					)}
				</div>
			</div>

			{/* Footer Icons */}
			<footer className="absolute bottom-8 left-8 flex gap-4 text-2xl">
				<a
					href="#"
					aria-label="Instagram"
					className="hover:text-white transition-colors"
				>
					<FaInstagram />
				</a>
				<a
					href="#"
					aria-label="LinkedIn"
					className="hover:text-white transition-colors"
				>
					<FaLinkedin />
				</a>
				<a
					href="#"
					aria-label="Email"
					className="hover:text-white transition-colors"
				>
					<FaEnvelope />
				</a>
			</footer>
		</main>
	);
}

// Wrap HigherStudiesPage in a default exported Page component for Next.js compliance
const Page = () => <HigherStudiesPage />;
export default Page;