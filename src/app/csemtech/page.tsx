'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// --- Data for the M.Tech specializations ---
// Using '\n' for line breaks where needed.
const mtechTopics = [
	{
		key: 'cse',
		title: 'M.TECH IN COMPUTER\nSCIENCE AND ENGINEERING',
		descriptionTitle: 'M.TECH IN COMPUTER SCIENCE AND ENGINEERING',
		href: '/mtech/cse',
		description:
			'This program provides advanced knowledge in algorithms, computer architecture, and software systems. It prepares students for high-level technical roles and cutting-edge research in the field of computer science.',
	},
	{
		key: 'ai',
		title: 'M.TECH IN AI',
		descriptionTitle: 'M.TECH IN AI',
		href: '/mtech/ai',
		description:
			'A specialized degree focusing on Artificial Intelligence concepts, including neural networks, natural language processing, and robotics. Graduates are equipped to build and deploy intelligent systems across various industries.',
	},
	{
		key: 'ml',
		title: 'M.TECH IN MACHINE\nLEARNING AND COMPUTING',
		descriptionTitle: 'M.TECH IN MACHINE LEARNING AND COMPUTING',
		href: '/mtech/ml',
		description:
			'This course delves into the theory and application of machine learning algorithms. Students learn to build predictive models and data-driven solutions, essential for roles like Machine Learning Engineer and Data Scientist.',
	},
	{
		key: 'cyber',
		title: 'M.TECH IN CYBER\nSECURITY',
		descriptionTitle: 'M.TECH IN CYBER SECURITY',
		href: '/mtech/cyber-security',
		description:
			'Focuses on protecting digital systems from cyber threats. The curriculum covers network security, cryptography, ethical hacking, and digital forensics, preparing experts to secure organizational infrastructure.',
	},
	{
		key: 'data',
		title: 'M.TECH IN DATA\nANALYTICS',
		descriptionTitle: 'M.TECH IN DATA ANALYTICS',
		href: '/mtech/data-analytics',
		description:
			'This program trains students to interpret complex datasets and derive actionable insights. It combines statistics, computer science, and business knowledge for roles in business intelligence and data analysis.',
	},
	{
		key: 'info_sec',
		title: 'M.TECH IN INFORMATION\nSECURITY',
		descriptionTitle: 'M.TECH IN INFORMATION SECURITY',
		href: '/mtech/information-security',
		description:
			'Similar to Cyber Security, this field covers the policies and practices for securing information. It involves risk management, security architecture, and ensuring data integrity, confidentiality, and availability.',
	},
	{
		key: 'others',
		title: 'OTHERS',
		descriptionTitle: 'OTHER M.TECH SPECIALIZATIONS',
		href: '/mtech/others',
		description:
			'Many other M.Tech specializations exist, including VLSI Design, Power Systems, Structural Engineering, and more, depending on the undergraduate field. These programs offer deep expertise in niche technical areas.',
	},
];

function MTechPage() {
	const router = useRouter();

	const [activeTopicKey, setActiveTopicKey] = useState(mtechTopics[0].key);
	const activeTopic = mtechTopics.find((topic) => topic.key === activeTopicKey);

	return (
		<main className="relative min-h-screen w-full bg-gradient-to-b from-[#8ebfdb] to-[#6099b8] p-4 sm:p-8 text-black font-sans overflow-hidden">
			{/* Header and Vertical Text */}
			<header className="flex justify-between items-center w-full mb-8 px-4">
				<h1 className="text-lg font-semibold tracking-wider">FUTURE GUIDE</h1>
				<h2 className="text-lg font-semibold tracking-wider hidden sm:block">
					ELEVATE
				</h2>
				<nav className="flex gap-6 text-lg font-semibold">
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
				<span className="text-lg font-semibold tracking-widest">ELEVATE</span>
			</div>
			<div className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 origin-center hidden lg:block">
				<span className="text-lg font-semibold tracking-widest">ELEVATE</span>
			</div>

			{/* Main Content Area */}
			<div className="flex flex-col items-center justify-start w-full max-w-7xl mx-auto pt-16">
				<h1 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
					M.TECH/ME
				</h1>

				{/* Topic Buttons */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5 w-full mb-16 px-4">
					{mtechTopics.map((topic) => (
						<button
							key={topic.key}
							onMouseEnter={() => setActiveTopicKey(topic.key)}
							onClick={() => {
								if (topic.key === 'cse') router.push('/csemaster');
								else if (topic.key === 'ai') router.push('/aimaster');
								else if (topic.key === 'ml') router.push('/mlmaster');
								else if (topic.key === 'cyber') router.push('/cybermaster');
								else router.push(topic.href);
							}}
							className="bg-gray-300 bg-opacity-70 hover:bg-white hover:shadow-lg hover:scale-105 text-black text-center text-lg font-semibold px-6 py-4 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none flex items-center justify-center min-h-[80px] w-full md:w-auto lg:w-full"
						>
							<span className="whitespace-pre-line leading-tight">
								{topic.title}
							</span>
						</button>
					))}
				</div>

				{/* Description Card */}
				{activeTopic && (
					<div className="bg-[#d1e6ec] bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 w-full lg:w-3/4 min-h-[200px] flex flex-col justify-center items-center shadow-2xl">
						<h3 className="text-2xl lg:text-3xl mb-4 font-bold text-center">
							{activeTopic.descriptionTitle}
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
};

// Wrap MTechPage in a default exported Page component for Next.js compliance
const Page = () => <MTechPage />;
export default Page;