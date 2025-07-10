'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// --- Data for all the job topics ---
// This array drives the entire component.
const jobTopics = [
	{
		key: 'software',
		title: 'SOFTWARE DEVELOPMENT',
		href: '/jobs/software',
		description:
			'This involves designing, developing, and maintaining software applications. Roles include Frontend, Backend, and Full-Stack Developer, working with languages like JavaScript, Python, and Java to build scalable and robust applications.',
	},
	{
		key: 'data_ai',
		title: 'DATA & AI RELATED FIELDS',
		href: '/jobs/data-ai',
		description:
			'This rapidly growing area focuses on analyzing large datasets and building intelligent systems. Roles include Data Scientist, Machine Learning Engineer, and AI Specialist, using tools like TensorFlow and PyTorch to create predictive models.',
	},
	{
		key: 'cloud',
		title: 'CLOUD, DEVOPS & INFRASTRUCTURE',
		href: '/jobs/cloud-devops',
		description:
			'This field manages the backbone of modern applications. Roles include Cloud Engineer, DevOps Engineer, and Site Reliability Engineer, working with platforms like AWS, Azure, and Google Cloud to automate and scale infrastructure.',
	},
	{
		key: 'cybersecurity',
		title: 'CYBERSECURITY',
		href: '/jobs/cybersecurity',
		description:
			'Cybersecurity professionals protect computer systems and networks from digital attacks. Roles include Security Analyst, Ethical Hacker, and Cryptographer, responsible for identifying vulnerabilities and implementing security measures.',
	},
	{
		key: 'web',
		title: 'WEB TECHNOLOGIES',
		href: '/jobs/web-tech',
		description:
			'This covers the creation and management of websites and web services. It includes roles like UI/UX Designer, Web Developer, and SEO Specialist, focusing on user experience, performance, and accessibility across different browsers.',
	},
	{
		key: 'other',
		title: 'OTHER ROLES',
		href: '/jobs/other-roles',
		description:
			'The tech field is vast and includes many other critical roles. These can include Technical Writer, QA Engineer, Database Administrator, and IT Support Specialist, each playing a vital part in the technology lifecycle.',
	},
];

export default function Page() {
	const router = useRouter();

	// State to track the currently hovered topic. Default to the first one.
	const [activeTopicKey, setActiveTopicKey] = useState(jobTopics[0].key);

	// Find the full object for the active topic
	const activeTopic = jobTopics.find((topic) => topic.key === activeTopicKey);

	return (
		<main className="relative min-h-screen w-full bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] p-4 sm:p-8 text-black font-sans overflow-hidden">
			{/* Header and Vertical Text (can be reused) */}
			<header className="flex justify-between items-center w-full mb-8 px-4">
				<h1 className="text-lg">FUTURE GUIDE</h1>
				<h2 className="text-lg hidden sm:block">ELEVATE</h2>
				<nav className="flex gap-6 text-lg">
					<a
						href="#"
						className="hover:text-white transition-colors"
					>
						HOME
					</a>
					<a
						href="#"
						className="hover:text-white transition-colors"
					>
						GUIDE
					</a>
					<a
						href="#"
						className="hover:text-white transition-colors"
					>
						LOGIN
					</a>
				</nav>
			</header>
			<div className="absolute left-4 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center hidden lg:block">
				<span className="text-lg tracking-widest">ELEVATE</span>
			</div>
			<div className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 origin-center hidden lg:block">
				<span className="text-lg tracking-widest">ELEVATE</span>
			</div>

			{/* Main Content Area */}
			<div className="flex flex-col items-center justify-start w-full max-w-6xl mx-auto pt-10">
				<h1 className="text-4xl lg:text-5xl font-bold mb-16">
					JOB OPPORTUNITIES
				</h1>

				{/* Grid of Topic Buttons */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 w-full mb-16">
					{jobTopics.map((topic) => (
						<button
							key={topic.key}
							onMouseEnter={() => setActiveTopicKey(topic.key)} // Update description on hover
							onClick={() => router.push(topic.href)} // Navigate on click
							className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg p-5 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none"
						>
							{topic.title}
						</button>
					))}
				</div>

				{/* Description Card */}
				{activeTopic && (
					<div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 w-full lg:w-3/4 min-h-[200px] flex flex-col justify-center items-center shadow-2xl">
						<h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center">
							{activeTopic.title}
						</h3>
						<p className="text-md lg:text-lg leading-relaxed text-center">
							{activeTopic.description}
						</p>
					</div>
				)}
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