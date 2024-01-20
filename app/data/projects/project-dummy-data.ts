import { Project } from "@/types";

export const projects: Project[] = [
	{
		name: "Remix Bookstore",
		description:
			"A comprehensive online bookstore built using Remix for efficient routing and server rendering",
		coverImageUrl: "https://example.com/remixbookstore.jpg",
		tags: ["Remix", "TypeScript", "Redis"],
		caseStudyUrl: "https://example.com/remixbookstore",
		related: ["Node Payments API", "Rust Data Analyzer"],
		slug: "remix-bookstore",
		tech: ["remix", "react", "dizzleORM", "Supabase"]
	},
	{
		name: "Node Payments API",
		description:
			"Robust and secure payments API utilizing Node.js, Express, and Stripe",
		coverImageUrl: "https://example.com/nodepayments.jpg",
		tags: ["Node.js", "Express", "Stripe"],
		caseStudyUrl: "https://example.com/nodepayments",
		related: ["Remix Bookstore", "Real-time Chat"],
		slug: "node-payments-api",
		tech: ["node", "stripe", "dizzleORM", "Supabase"]
	},
	{
		name: "Real-time Chat",
		description:
			"Chat platform with real-time messaging capabilities using WebSockets on a Node.js server",
		coverImageUrl: "https://example.com/realtimechat.jpg",
		tags: ["React", "Node.js", "WebSockets"],
		caseStudyUrl: "https://example.com/realtimechat",
		related: ["Node Payments API", "Rust Data Analyzer"],
		slug: "real-time-chat",
		tech: ["web-sockets", "go", "svelte", "sveltekit"]
	},
	{
		name: "Rust Data Analyzer",
		description:
			"Efficient data analysis tool for large datasets, leveraging Rust's performance and concurrency",
		coverImageUrl: "https://example.com/rustdataanalyzer.jpg",
		tags: ["Rust", "Data Analysis"],
		caseStudyUrl: "https://example.com/rustdataanalyzer",
		related: ["Real-time Chat", "Remix Bookstore"],
		slug: "rust-data-analyzer",
		tech: ["rust"]
	},
	{
		name: "React Design System",
		description:
			"Modular and reusable design system developed in React for scalable front-end architecture",
		coverImageUrl: "https://example.com/reactdesignsystem.jpg",
		tags: ["React", "Design System", "Scalability"],
		caseStudyUrl: "https://example.com/reactdesignsystem",
		related: ["Remix Bookstore", "Node Payments API"],
		slug: "react-design-system",
		tech: ["react", "radix-ui"]
	},
	{
		name: "Solidjs Exploration",
		description:
			"Exploratory project for understanding Solidjs, a declarative JavaScript library for reactive UI",
		coverImageUrl: "https://example.com/solidjs.jpg",
		tags: ["Solidjs", "UI", "Exploratory"],
		caseStudyUrl: "https://example.com/solidjs",
		related: ["React Design System", "Real-time Chat"],
		slug: "solidjs-exploration",
		tech: ["solidjs"]
	},
];
