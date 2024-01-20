import { Post, Project } from "@/types";
import path from "path";
import fs, { PathLike } from "fs";
import matter from "gray-matter";

const createSlug = (title: string) => {
	let slug = "";
	const words = title.split(" ");
	for (let index = 0; index < words.length; index++) {
		slug += words[index].toLowerCase().replace(/[^0-9a-z]/g, "");
		if (index !== words.length - 1) {
			slug += "-";
		}
	}
	return slug;
};

const getPostDataFromFile = (filePath: PathLike): Post => {
	const fileContent = fs.readFileSync(filePath, "utf8");

	const { data, content } = matter(fileContent);
	if (!content || !data) {
		throw new Error("File missing required content");
	}

	// TODO: Add Zod validation on matter here

	const { title, description, coverImageUrl, date, author, tags } = data;
	if (!title || !description || !coverImageUrl || !date || !author || !tags) {
		throw new Error("A required field is missing");
	}

	const slug = createSlug(title as string);

	return {
		title,
		description,
		content,
		coverImageUrl,
		date,
		author,
		tags,
		slug,
	};
};

const getProjectDataFromFile = (filePath: PathLike): Project => {
	const fileContent = fs.readFileSync(filePath, "utf8");

	const { data, content } = matter(fileContent);
	if (!content || !data) {
		throw new Error("File missing required content");
	}

	// TODO: Add Zod validation on matter here

	const { name, description, coverImageUrl, tags, caseStudyUrl, related } = data;
	if (!name || !description || !coverImageUrl || !tags || !caseStudyUrl || !related) {
		throw new Error("A required field is missing");
	}

	const slug = createSlug(name as string);

	return {
		name,
		description,
		coverImageUrl,
		tags,
		caseStudyUrl,
		related,
		slug,
	};
};

const getFilenamesFromFolder = (folder: string): string[] => {
	const fullPath = path.join(process.cwd(), folder);
	const files = fs.readdirSync(fullPath, "utf8");
	return files;
};

const writeToFile = (data: object, fileName: string) => {
	const jsonData = JSON.stringify(data, null, 2);
	fs.writeFileSync(fileName, jsonData, "utf8");
};

export type Tags = Record<string, number>;

const writeTagsToFile = (tags: string[], fileName: string) => {
	const tagsObj: Tags = {};
	tags.forEach((tag) => {
		if (tagsObj[tag]) {
			tagsObj[tag]++;
		} else {
			tagsObj[tag] = 1;
		}
	});

	writeToFile(tagsObj, fileName);
};

const buildJson = (postFolder: string, projectsFolder: string) => {
	// get post data first..
	const postFileNames = getFilenamesFromFolder(postFolder);
	const postData: Post[] = [];
	for (const fileName of postFileNames) {
		postData.push(
			getPostDataFromFile(path.join(process.cwd(), postFolder, fileName)),
		);
	}

	const postTags: string[] = [];
	for (const post of postData) {
		post.tags.forEach((tag) => postTags.push(tag));
	}

	writeTagsToFile(postTags, "app/data/posts/tags.json");
	writeToFile(postData, "app/data/posts/posts.json");

	// now we can handle projects
	const projectFileNames = getFilenamesFromFolder(projectsFolder);
	const projectsData: Project[] = [];
	for (const fileName of projectFileNames) {
		projectsData.push(
			getProjectDataFromFile(path.join(process.cwd(), projectsFolder, fileName)),
		);
	}

	const projectTags: string[] = [];
	for (const project of projectsData) {
		project.tags.forEach((tag) => projectTags.push(tag));
	}

	writeTagsToFile(projectTags, "app/data/projects/tags.json");
	writeToFile(projectsData, "app/data/projects/projects.json");
};

buildJson("posts", "projects");
