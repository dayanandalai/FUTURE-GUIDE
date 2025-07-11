'use client';

import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link'
// --- Data for the Web Stack roles ---
const webRoles = [
	{
		key: 'frontend',
		title: 'FRONT-END DEVELOPER',
		descriptionTitle: 'FRONT-END DEVELOPER',
		description: 'A Front-End Developer specializes in building the visual, client-side part of a web application that users interact with directly. They use languages like HTML, CSS, and JavaScript to create responsive and engaging user interfaces.',
		companies: 'Google, Microsoft, Amazon, Adobe, Atlassian, Swiggy, Zomato, Cred, Razorpay, Meesho, etc.',
	},
	{
		key: 'ui',
		title: 'UI DEVELOPER',
		descriptionTitle: 'UI DEVELOPER',
		description: 'A UI Developer is a type of Front-End Developer who has a strong focus on aesthetics and user experience design. They translate visual designs from tools like Figma into pixel-perfect, interactive code.',
		companies: 'Companies with a strong focus on design and user experience.',
	},
	{
		key: 'web',
		title: 'WEB DEVELOPER',
		descriptionTitle: 'WEB DEVELOPER',
		description: 'A generalist term that can refer to front-end, back-end, or full-stack developers. They are responsible for the overall coding, design, and layout of a website according to a company\'s specifications.',
		companies: 'Virtually every company with a web presence, from small agencies to large corporations.',
	},
	{
		key: 'react',
		title: 'REACT DEVELOPER',
		descriptionTitle: 'REACT DEVELOPER',
		description: 'A specialist in the React library, one of the most popular front-end technologies for building modern, component-based user interfaces. They build complex single-page applications and manage their state efficiently.',
		companies: 'Meta (Facebook), Airbnb, Netflix, and a vast number of tech companies.',
	},
	{
		key: 'javascript',
		title: 'JAVASCRIPT ENGINEER',
		descriptionTitle: 'JAVASCRIPT ENGINEER',
		description: 'An expert in the JavaScript language and its ecosystem. This role involves working on complex front-end logic, back-end development with Node.js, and optimizing application performance.',
		companies: 'All major tech companies and startups rely heavily on JavaScript expertise.',
	},
];

// Helper to find a role by key, defaults to the first role.
const findRole = (key) => webRoles.find(role => role.key === key) || webRoles[0];

export default function WebStackPage() {
	const [activeRoleKey, setActiveRoleKey] = useState(webRoles[0].key);
	const activeRole = findRole(activeRoleKey);

	const buttonRows = [
		webRoles.slice(0, 3), // First row: Front-End, UI, Web Developer
		webRoles.slice(3, 5)  // Second row: React, JavaScript Engineer
	];

	return (
		<main className="relative min-h-screen w-full bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] p-4 sm:p-8 text-black font-sans overflow-hidden">
			{/* Header and Vertical Text */}
			<header className="flex justify-between items-center w-full mb-8 px-4">
                <h1 className="text-lg font-semibold tracking-wider">FUTURE GUIDE</h1>
                <h2 className="text-lg font-semibold tracking-wider hidden sm:block">ELEVATE</h2>
                <nav className="flex gap-6 text-lg font-semibold">
                    <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                    <Link href="/firstpage" className="hover:text-white transition-colors">GUIDE</Link>
                    <Link href="/login" className="hover:text-white transition-colors">LOGIN</Link>
                </nav>
            </header>
			<div className="absolute left-4 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center hidden lg:block"><span className="text-lg font-semibold tracking-widest">ELEVATE</span></div>
			<div className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 origin-center hidden lg:block"><span className="text-lg font-semibold tracking-widest">ELEVATE</span></div>

			{/* Main Content Area */}
			<div className="flex flex-col items-center justify-start w-full max-w-6xl mx-auto pt-10">
				<h1 className="text-4xl lg:text-5xl font-bold mb-16 text-center">FRONT END/BACK END /FULL STACK</h1>

				{/* Topic Buttons Container */}
				<div className="flex flex-col items-center gap-6 w-full max-w-5xl mb-16">
					{buttonRows.map((row, rowIndex) => (
						<div key={rowIndex} className="flex flex-wrap justify-center items-center gap-6">
							{row.map(role => (
								<button
									key={role.key}
									onMouseEnter={() => setActiveRoleKey(role.key)}
									className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none"
								>
									{role.title}
								</button>
							))}
						</div>
					))}
				</div>

				{/* Description Cards */}
				<div className="w-full lg:w-3/4 flex flex-col gap-6">
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