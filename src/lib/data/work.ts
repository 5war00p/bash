import { SKILLS } from 'utils/constants'

const work = [
	{
		jobTitle: 'Full Stack Developer',
		employmentType: 'Freelance',
		companyName: 'BeavrLabs',
		location: 'Mississauga, Ontario, Canada',
		locationType: 'Remote',
		duration: 'Aug 2023',
		isCurrentlyWorking: true,
		description:
			'As a Full Stack Developer, and collaboratively, we strive to create refined solutions that elevate our clients towards success. One such client is 1bitcoin.ca',
		skills: [
			SKILLS.REACTJS,
			SKILLS.NEXTJS,
			SKILLS.TS,
			SKILLS.T3,
			SKILLS.CHAKRAUI,
			SKILLS.LANGCHAIN,
			SKILLS.OPENAI,
			SKILLS.PRISMA_ORM,
			SKILLS.COCKROACHDB
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
			SKILLS.WEB3,
			SKILLS.ETHCALL,
			SKILLS.ETHERS,
			SKILLS.THIRDWEBJS,
			SKILLS.NEXTJS,
			SKILLS.DAPPS,
			SKILLS.VIEM
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
			'As a Product Engineer and Platform team member, I contributed to Frontend using island architecture with Astro-React with Redux and WebWorkers, IndexedDB architecture, also being a part in developing a Native application with Electron and Cloudflare and AWS for deployments.',
		skills: [
			SKILLS.SVELTE,
			SKILLS.NODEJS,
			SKILLS.NEXTJS,
			SKILLS.TS,
			SKILLS.JS,
			SKILLS.ELECTRONJS,
			SKILLS.CLOUDFLARE,
			SKILLS.ASTROJS,
			SKILLS.PWA,
			SKILLS.GRAPHQL,
			SKILLS.TAILWINDCSS,
			SKILLS.REDUXJS,
			SKILLS.APPLESCRIPTS,
			SKILLS.NODEJS,
			SKILLS.NEXTJS,
			SKILLS.TS,
			SKILLS.JS,
			SKILLS.GITPOD,
			SKILLS.TRAVIS_CI,
			SKILLS.GH_ACTIONS,
			SKILLS.GRAPHQL
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
			'As a Backend Developer, I gave my knowledge and contributions to several dashboards for managers. I have been a part of Database Architecture decisions and handled the whole NodeJS, MongoDB, and Express servers.',
		skills: [SKILLS.MONGODB, SKILLS.NODEJS, SKILLS.JS]
	}
]

export default work
