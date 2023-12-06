interface Post {
	title: string;
	description: string;
	content: string;
	coverImageUrl: string;
	date: string;
	author: Author;
	tags: string[];
	slug: string;
}

interface Author {
	name: string;
	imageUrl: string;
}

interface Project {
	name: string;
	description: string;
	coverImageUrl: string;
	tags: string[];
	caseStudyUrl: string;
	related: string[];
	slug: string;
}

type Tags = Record<string, number>;

export type { Post, Project, Author, Tags };
