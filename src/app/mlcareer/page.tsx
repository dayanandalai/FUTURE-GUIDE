'use client';

import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link'
// --- Data for the Machine Learning career roles ---
const careerRoles = [
	{
		key: 'ml_engineer',
		title: 'MACHINE LEARNING\nENGINEER',
		descriptionTitle: 'MACHINE LEARNING ENGINEER',
		description:
			'Specializes in designing and deploying production-ready machine learning systems. This role bridges the gap between data science and software engineering, focusing on scalability, performance, and reliability of ML models.',
		companies: 'Meta AI, Netflix, Google Brain, IBM Watson, Adobe Research, etc.',
	},
	{
		key: 'dl_specialist',
		title: 'DEEP LEARNING\nSPECIALIST',
		descriptionTitle: 'DEEP LEARNING SPECIALIST',
		description:
			'A Deep Learning Specialist focuses on building complex neural networks for tasks like image recognition and natural language processing. This role requires a strong mathematical background and expertise in frameworks like TensorFlow and PyTorch.',
		companies: 'NVIDIA, OpenAI, Tesla, and specialized AI research labs.',
	},
	{
		key: 'mlops',
		title: 'AI/ML DEVOPS ENGINEER',
		descriptionTitle: 'AI/ML DEVOPS ENGINEER (MLOPS)',
		description:
			'MLOps Engineers manage the lifecycle of machine learning models using DevOps principles. They automate the processes of model training, testing, deployment, and monitoring to ensure continuous integration and delivery.',
		companies: 'Major tech companies, financial institutions, and cloud providers.',
	},
	{
		key: 'data_scientist',
		title: 'DATA SCIENTIST / AI\nANALYST',
		descriptionTitle: 'DATA SCIENTIST / AI ANALYST',
		description:
			'This role involves analyzing large datasets to extract actionable insights. Data Scientists use statistical methods and machine learning techniques to solve business problems and inform strategic decisions.',
		companies: 'Virtually every industry: from Spotify and Airbnb to healthcare and finance.',
	},
	{
		key: 'solution_architect',
		title: 'AI SOLUTION ARCHITECT',
		descriptionTitle: 'AI SOLUTION ARCHITECT',
		description:
			'An AI Solution Architect designs the end-to-end architecture for AI and ML solutions. This client-facing role involves understanding business needs and translating them into a technical blueprint for the development team.',
		companies: 'Cloud providers (AWS, Azure, GCP), consulting firms like Deloitte and Accenture.',
	},
	{
		key: 'others',
		title: 'OTHERS',
		descriptionTitle: 'OTHER ROLES',
		description:
			'The field also includes roles like AI Product Manager, who defines the vision for AI products, and AI Ethicist, who ensures that AI systems are developed and used responsibly and fairly.',
		companies: 'Government agencies, non-profits, and forward-thinking enterprises.',
	},
];

function MlCareersPage() {
	const [activeRoleKey, setActiveRoleKey] = useState(careerRoles[0].key);
	const activeRole = careerRoles.find(role => role.key === activeRoleKey);

	return (
		<main className="relative min-h-screen w-full bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] p-4 sm:p-8 text-black font-sans overflow-hidden">
			{/* Header and Vertical Text */}
			<header className="flex justify-between items-center w-full mb-8 px-4">
				<h1 className="text-lg font-semibold tracking-wider">FUTURE GUIDE</h1>
				<h2 className="text-lg font-semibold tracking-wider hidden sm:block">
					ELEVATE
				</h2>
				<nav className="flex gap-6 text-lg font-semibold">
					 <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                     <Link href="/firstpage" className="hover:text-white transition-colors">GUIDE</Link>
                     <Link href="/login" className="hover:text-white transition-colors">LOGIN</Link>
				</nav>
			</header>
			<div className="absolute left-4 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center hidden lg:block">
				<span className="text-lg font-semibold tracking-widest">ELEVATE</span>
			</div>
			<div className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 origin-center hidden lg:block">
				<span className="text-lg font-semibold tracking-widest">ELEVATE</span>
			</div>

			{/* Main Content Area */}
			<div className="flex flex-col items-center justify-start w-full max-w-7xl mx-auto pt-10">
				<h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
					CAREER OPPORTUNITIES
				</h1>

				<div className="flex flex-col lg:flex-row gap-8 w-full">
					{/* Left Column: Role Buttons */}
					<div className="w-full lg:w-1/3 flex flex-wrap lg:flex-col justify-center lg:justify-start gap-4">
						{careerRoles.map(role => (
							<button
								key={role.key}
								onMouseEnter={() => setActiveRoleKey(role.key)}
								className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg font-semibold px-6 py-4 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none flex items-center justify-center min-h-[70px] w-full md:w-auto lg:w-full"
							>
								<span className="whitespace-pre-line leading-tight">
									{role.title}
								</span>
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

// Wrap MlCareersPage in a default exported Page component for Next.js compliance
const Page = () => <MlCareersPage />;
export default Page;