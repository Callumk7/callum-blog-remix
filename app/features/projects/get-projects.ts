import path from "path";
import fs from "fs";
import { Project } from "@/types";

export const getAllProjectData = (): Project[] => {
	const jsonData = fs.readFileSync(
		path.join(process.cwd(), "app", "data", "projects", "projects.json"),
		"utf8",
	);

	const projects: Project[] = JSON.parse(jsonData);
	// posts.sort((a, b) => {
	// 	const dateA = new Date(a.date);
	// 	const dateB = new Date(b.date);
	//
	// 	// newest to oldest
	// 	return dateB.getTime() - dateA.getTime();
	// });

	return projects;
};

export const getProjectBySlug = (slug: string) => {
	const projects = getAllProjectData();

	const project = projects.find((post) => post.slug === slug);

	return project;
};

