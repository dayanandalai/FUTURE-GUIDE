'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// --- Data for the AI career roles ---
const careerRoles = [
	{
		key: 'ai_engineer',
		title: 'AI ENGINEER',
		descriptionTitle: 'AI ENGINEER',
		description: 'AI Engineers design and develop AI-powered applications and systems. They build the infrastructure and production pipelines to deploy and scale machine learning models efficiently and reliably.',
		companies: 'Google AI, OpenAI, NVIDIA, Amazon Alexa, Apple (Siri), IBM Research, etc.',
	},
	{
		key: 'ml_engineer',
		title: 'MACHINE LEARNING\nENGINEER',
		descriptionTitle: 'MACHINE LEARNING ENGINEER',
		description: 'ML Engineers are specialized software engineers who focus on the entire lifecycle of machine learning models, from data preprocessing and model training to deployment and monitoring in production environments.',
		companies: 'Meta, Netflix, Spotify, Twitter (X), most tech companies.',
	},
	{
		key: 'research_scientist',
		title: 'AI RESEARCH SCIENTIST',
		descriptionTitle: 'AI RESEARCH SCIENTIST',
		description: 'Research Scientists work on discovering new algorithms and advancing the fundamental theories of AI. This role is highly academic and involves publishing papers and contributing to the global AI research community.',
		companies: 'DeepMind, Microsoft Research, FAIR (Meta AI), top universities.',
	},
	{
		key: 'data_scientist',
		title: 'DATA SCIENTIST',
		descriptionTitle: 'DATA SCIENTIST',
		description: 'Data Scientists analyze large, complex datasets to extract meaningful insights and inform business strategy. While they use machine learning, their role is broader, often including statistics, data visualization, and communication.',
		companies: 'Every industry: Finance, Healthcare, E-commerce, etc.',
	},
	{
		key: 'nlp_engineer',
		title: 'NLP ENGINEER',
		descriptionTitle: 'NLP ENGINEER',
		description: 'Natural Language Processing (NLP) Engineers specialize in building systems that can understand, interpret, and generate human language. They work on applications like chatbots, translation services, and sentiment analysis.',
		companies: 'Grammarly, Duolingo, Cohere, Hugging Face.',
	},
	{
		key: 'others',
		title: 'OTHERS',
		descriptionTitle: 'OTHER ROLES',
		description: 'The field of AI is vast, including roles like Computer Vision Engineer, Robotics Engineer, AI Ethics Officer, and AI Product Manager, each requiring a unique blend of technical and domain-specific knowledge.',
		companies: 'Autonomous driving companies, robotics labs, specialized startups.',
	},
];

export default function AiCareersPage() {
	const [activeRoleKey, setActiveRoleKey] = useState(careerRoles[0].key);
	const activeRole = careerRoles.find(role => role.key === activeRoleKey);

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
			<div className="flex flex-col items-center justify-start w-full max-w-7xl mx-auto pt-10">

				<h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center">CAREER OPPORTUNITIES</h1>

				<div className="flex flex-col lg:flex-row gap-8 w-full">

					{/* Left Column: Role Buttons */}
					<div className="w-full lg:w-1/3 flex flex-wrap lg:flex-col justify-center lg:justify-start gap-4">
						{careerRoles.map((role) => (
							<button
								key={role.key}
								onMouseEnter={() => setActiveRoleKey(role.key)}
								className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg font-semibold px-6 py-4 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none flex items-center justify-center min-h-[70px] w-full md:w-auto lg:w-full"
							>
								<span className="whitespace-pre-line leading-tight">{role.title}</span>
							</button>
						))}
					</div>

					{/* Right Column: Description Cards */}
					<div className="w-full lg:w-2/3">
						{activeRole && (
							<div className="flex flex-col gap-6">
								{/* Description Card */}
								<div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 w-full flex flex-col justify-center items-center shadow-2xl">
									<h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center">
										{activeRole.descriptionTitle}
									</h3>
									<p className="text-md lg:text-lg leading-relaxed text-center">
										{activeRole.description}
									</p>
								</div>
								{/* Industries/Companies Card */}
								<div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 w-full flex flex-col justify-center items-center shadow-2xl">
									<h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center">
										INDUSTRIES/COMPANIES
									</h3>
									<p className="text-md lg:text-lg leading-relaxed text-center">
										{activeRole.companies}
									</p>
								</div>
							</div>
						)}
					</div>

				</div>

			</div>

			{/* Footer Icons */}
			<footer className="absolute bottom-8 left-8 flex gap-4 text-2xl">
				<a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><FaInstagram /></a>
				<a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><FaLinkedin /></a>
				<a href="#" aria-label="Email" className="hover:text-white transition-colors"><FaEnvelope /></a>
			</footer>
		</main>
	);
}