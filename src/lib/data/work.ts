const work = [
	{
		jobTitle: 'Software Engineer',
		employmentType: 'Full-time',
		companyName: 'OpenFX (formerly RedEnvelope)',
		location: 'USA',
		locationType: 'Remote/Hybrid',
		duration: 'Mar 2024 - Present',
		isCurrentlyWorking: true,
		website: 'https://openfx.com',
		description: '',
		skills: [
			'TypeScript',
			'JavaScript',
			'AWS',
			'Cloudflare',
			'Astro',
			'React',
			'Tailwind CSS',
			'Redux',
			'Node.js',
			'GitHub Actions'
		]
	},
	{
		jobTitle: 'Software Engineer',
		employmentType: 'Contract',
		companyName: 'Mercor',
		location: 'San Francisco, USA',
		locationType: 'Remote',
		duration: 'Feb 2024 - Mar 2024',
		isCurrentlyWorking: false,
		noBullets: true,
		description: [
			'As a Software Engineer, I contributed to micro-services, Frontend (React, TailwindCSS, Redux), and \
Backend (Next.js, tRPC) for candidate and recruiter dashboards.',
			"I created an accurate resume parsing solution in Python using a fallback method from text extraction to \
OCR and hyperlink extraction, using tools like Poppler, OpenAI, and Google’s DocumentAI. This approach \
was chosen to avoid the AI model's inaccuracies, resulting in significant cost and time savings.",
			'I also led the development of a resume generation feature in Python using Reportlab and its React \
frontend. Additionally, I maintained and updated the resume rewrites feature, offering valuable \
suggestions for improving work experience and project descriptions.'
		],
		skills: [
			'React',
			'Redux',
			'Node.js',
			'Python',
			'OpenAI',
			'LLM',
			'Next.js',
			'T3 (TypeScript, Tailwind CSS, tRPC)'
		]
	},
	{
		jobTitle: 'Full Stack Developer',
		employmentType: 'Full-time',
		companyName: 'BeavrLabs',
		location: 'Mississauga, Ontario, Canada',
		locationType: 'Remote',
		duration: 'Aug 2023 - Mar 2024',
		isCurrentlyWorking: false,
		descriptionStart:
			"At Beavr Labs, we focus on creating advanced solutions that drive our clients' success. As a Full Stack \
Developer, I've been instrumental in below major projects:",
		description: [
			'1Bitcoin - Crypto Exchange and Financial Services: Successfully addressed Cumulative Layout Shift \
(CLS) issues, optimised initial page load performance, and implemented Progressive Web App (PWA) \
features. Built Invoices feature and managed dashboard maintenance and enhancements using \
Next.js, tRPC, CockroachDB with Prisma, and Chakra UI.',
			'Nset - Climate Data and Analytics: Contributed to the LLM project using Python, OpenAI, Langchain \
for generating embeddings from ESG reports and built dashboard with Next.js.',
			'Turfsup - Synthetic Turf Supply & Installation Services: Starting from its initial MVP stage and \
expanding it into a fully-fledged product, encompassing both frontend and backend components.',
			'Story.com - AI based story generation: Developed the frontend including the Video Editor, complex \
user interfaces (UIs), and incorporating animations and gradients.'
		],
		skills: [
			'React',
			'Next.js',
			'Chakra UI',
			'LangChain',
			'OpenAI',
			'Prisma ORM',
			'CockroachDB',
			'Python',
			'Supabase',
			'Redis',
			'Streamlit',
			'T3 (TypeScript, Tailwind CSS, tRPC)'
		]
	},
	{
		jobTitle: 'Full Stack Web3 Developer',
		employmentType: 'Full-time',
		companyName: 'Bridgette Labs',
		location: 'Bucharest, Romania, Italy',
		locationType: 'Remote',
		duration: 'May 2023 - Oct 2023',
		isCurrentlyWorking: false,
		description:
			'As the founding Full-Stack Web3 Developer at an early-stage startup, I led the \
			development of a bridge aggregator project. This involved unifying web3 bridge \
			protocols like hop, multichain, celer, symbiosis, and ranking them based on fees \
			and estimated outcomes. I utilized Thirdweb.js, React, Ethers Ethcall, Viem, \
			WalletConnect, and Wagmi. Additionally, I tackled the challenge of integrating \
			TON, a non-EVM chain, into Thirdweb, showcasing adaptability and innovation in a \
			dynamic startup environment.',
		skills: [
			'Web3',
			'Ethcall',
			'Ethers',
			'Thirdweb.js',
			'Next.js',
			'DApps',
			'Viem'
		]
	},
	{
		jobTitle: 'Product Engineer',
		employmentType: 'Full-time',
		companyName: 'OSlash',
		location: 'Bangalore Urban, Karnataka, India',
		locationType: 'On-site',
		duration: 'Jun 2022 - Aug 2023',
		isCurrentlyWorking: false,
		description:
			'As a Product Engineer, I played a vital role in developing key features for Product-Market Fit (PMF), \
spanning diverse technologies in both web and native development. While engaging with Frontend, \
Backend, CI/CD, SDET, Browser Automation, Browser Extensions, Electron application, and micro-frontend \
with PWA architecture—including Web Workers and Indexed DB—my primary focus was on \
Frontend expertise. I was responsible for the holistic spectrum of Progressive Web App (PWA) \
development, Electron application building, and the challenge of providing users with a native \
application experience, showcasing versatility and proficiency across the technology stack.',
		skills: [
			'Svelte',
			'Next.js',
			'TypeScript',
			'JavaScript',
			'Electron',
			'Cloudflare',
			'Astro',
			'PWA',
			'GraphQL',
			'Tailwind CSS',
			'Redux',
			'AppleScripts',
			'Node.js',
			'Gitpod',
			'Travis CI',
			'GitHub Actions',
			'SDET'
		]
	},
	{
		jobTitle: 'Backend Developer',
		employmentType: 'Part-time',
		companyName: 'MeeBuddy',
		location: 'Nuzvid, Andhra Pradesh, India',
		locationType: 'Hybrid',
		duration: 'Nov 2020 - Dec 2021',
		isCurrentlyWorking: false,
		description:
			'As a Backend Developer in an eCommerce startup, I helped shopkeepers and restaurant managers \
accept online orders smoothly. I contributed to building multiple dashboards for managers and led a \
stack refactoring project (php, MySQL, bootstrap) to optimize the NodeJS, MongoDB, and Express server \
ecosystem.',
		skills: ['MongoDB', 'Node.js', 'JavaScript']
	}
]

export default work
