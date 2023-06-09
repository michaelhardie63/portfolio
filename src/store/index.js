import {
    	javascript,
    	html,
    	css,
    	reactjs,
    	nextjs,
    	redux,
    	tailwind,
    	nodejs,
    	mongodb,
    	firebase,
    	python,
    	cSharp,
    	git,
    	medibank,
    	racgp,
    	fujiXerox,
    	freelancer,
    	aroona,
    	promptcraft,
    	dyv,
    	web3,
    	threejs,
  	} from "../assets";
  
  	export const navLinks = [
    	{
      	id: "about",
      	title: "About",
    	},
    	{
      	id: "work",
      	title: "Work",
    	},
    	{
      	id: "contact",
      	title: "Contact",
    	},
  	];
  
  	const services = [
    	{
      	title: "HTML 5",
      	icon: html,
    	},
    	{
      	title: "CSS 3",
      	icon: css,
    	},
    	{
      	title: "JavaScript",
      	icon: javascript,
    	},
    	{
      	title: "Node JS",
      	icon: nodejs,
    	},
    	{
      	title: "React JS",
      	icon: reactjs,
    	},
    	{
      	title: "NEXT JS",
      	icon: nextjs,
    	},
    	{
      	title: "Redux Toolkit",
      	icon: redux,
    	},
    	{
      	title: "Tailwind CSS",
      	icon: tailwind,
    	},
    	{
      	title: "MongoDB",
      	icon: mongodb,
    	},
    	{
      	title: "Firebase",
      	icon: firebase,
    	},
    	{
      	title: "Three JS",
      	icon: threejs,
    	},
    	{
      	title: "git",
      	icon: git,
    	},
    	{
      	title: "Python",
      	icon: python,
    	},
    	{
      	title: "C#",
      	icon: cSharp,
    	},
  	];
  
  	const technologies = [
    	{
      	name: "HTML 5",
      	icon: html,
    	},
    	{
      	name: "CSS 3",
      	icon: css,
    	},
    	{
      	name: "JavaScript",
      	icon: javascript,
    	},
    	{
      	name: "Node JS",
      	icon: nodejs,
    	},
    	{
      	name: "React JS",
      	icon: reactjs,
    	},
    	{
      	name: "Redux Toolkit",
      	icon: redux,
    	},
    	{
      	name: "Tailwind CSS",
      	icon: tailwind,
    	},
    	{
      	name: "MongoDB",
      	icon: mongodb,
    	},
    	{
      	name: "Firbase",
      	icon: firebase,
    	},
    	{
      	name: "Three JS",
      	icon: threejs,
    	},
    	{
      	name: "git",
      	icon: git,
    	},
    	{
      	name: "Python",
      	icon: python,
    	},
    	{
      	name: "C#",
      	icon: cSharp,
    	},
  	];
  
  	const experiences = [
    	{
      	title: "Medibank",
      	company_name: "Front-End Developer",
      	icon: medibank,
      	iconBg: "#ffffff",
      	date: "Mar 2020 - Present",
      	points: [
        		"Develop and maintaining web applications using React.js and other related technologies.",
        		"Collaborating with cross-functional teams including designers and copywriters to produce high-quality products.",
        		"Implementing responsive design and ensuring accessibility standards are met.",
        		"Providing constructive feedback and guidance to team members.",
      	],
    	},
    	{
      	title: "Aroona Farms (contract)",
      	company_name: "Software Developer",
      	icon: aroona,
      	iconBg: "#ffffff",
      	date: "Oct 2022 - Feb 2023",
      	points: [
        		"Developing a MySQL machine service inventory application that collects and stores data captured when a user scans a QR codes.",
        		"Wrote and implemented code functionality using Google Apps Script to filter scanned data to their own spreadsheets as well as search functionality",
        		"QR code setup and testing for machinery.",
      	],
    	},
    	{
      	title: "RACGP",
      	company_name: "Front-End Developer",
      	icon: racgp,
      	iconBg: "#ffffff",
      	date: "Sept 2017 - Feb 2020",
      	points: [
        		"Developed and maintained The RACGP annual conference websites in Kentico CMS.",
        		"Collaborating with designers, project managers, and other developers to improve and test websites.",
        		"Maintaining SEO and accessibility guidelines were met.",
        		"Engaging with key stakeholders on the progress of the site from staging to production.",
      	],
    	},
    	{
      	title: "Senior Web Developer",
      	company_name: "Fuji Xerox",
      	icon: fujiXerox,
      	iconBg: "#ffffff",
      	date: "Apr 2017 - Sept 2017",
      	points: [
        		"Developing responsive web applications for the Mercer group.",
        		"Participating in UX design collaborations with designers and project managers.",
        		"Engaging with stakeholder for a wide from of different clients.",
        		"Ensured accessibility guideline are met throughout production.",
      	],
    	},
    	{
      	title: "Freelance Front-End Developer",
      	company_name: "Clemenger BBDO, Ogilvy, TBWA, CompNow",
      	icon: freelancer,
      	iconBg: "#00cea8",
      	date: "Oct 2015 - Sept 2017",
      	points: [
        		"Improving website and app infrastructure for a wide range of brands and clients using Javascript.",
        		"Providing reviews and constructive feedback for team members.",
				"Engaging with stakeholder for a wide from of different clients.",
        		"Ensuring responsive design and accessibility guidelines are met.",
      	],
    	},
  	];
  
  	const projects = [
    	{
      	name: "PromptCraft",
      	description:
        		"PromptCraft is a web application that allows users to sign-in, search, write, favourite and share AI prompts that anyone can use to help interface with AI chatbots.",
      	tags: [
        		{
          		name: "next13.js",
          		color: "blue-text-gradient",
        		},
        		{
          		name: "google-Auth",
          		color: "green-text-gradient",
        		},
       		{
          		name: "mongodb",
          		color: "pink-text-gradient",
        		},
      	],
      	image: promptcraft,
      	source_code_link: "https://github.com/michaelhardie63/prompt-craft",
    	},
    	{
      	name: "Cryptocurrency card",
      	description:
        		"Utilising Solidity smart contracts, MetaMask accounts and the GLIPHY api this React Web 3.0 app allows users to connect their MetaMask wallet and transfer Ethereum cryptocurrency.",
      	tags: [
        		{	
          		name: "react",
          		color: "blue-text-gradient",
        		},
        		{
          		name: "metamask",
          		color: "green-text-gradient",
        		},
        		{
          		name: "smartcontract",
          		color: "pink-text-gradient",
        		},
      	],
      	image: web3,
      	source_code_link: "https://github.com/michaelhardie63/medibank-web3.0",
    	},
    	{
      	name: "Design Your Vibe",
      	description:
        		"This web application allows your to create your own T-Shirt design by uploading an image or file, changing the shirt's colour or allow OpenAi to produce a design for you.",
      	tags: [
        		{
          		name: "react",
          		color: "blue-text-gradient",
        		},
        		{
          		name: "openai",
          		color: "green-text-gradient",
        		},
        		{
          		name: "framer-motion",
          		color: "pink-text-gradient",
        		},
      	],
      	image: dyv,
      	source_code_link: "https://github.com/michaelhardie63/TShirt_threejs_ai",
    	},
  	];
  
export { services, technologies, experiences, projects };
