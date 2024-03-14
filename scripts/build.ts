import { Post, Project } from "@/types";
import path from "path";
import fs, { PathLike } from "fs";
import matter from "gray-matter";
import { markdownToHtml } from "@/lib/posts/markdown-to-html";

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

const getPostDataFromFile = async (filePath: PathLike): Promise<Post> => {
	const fileContent = fs.readFileSync(filePath, "utf8");

	const { data, content } = matter(fileContent);
	if (!content || !data) {
		throw new Error("File missing required content");
	}

	// perform the content transformation here, to improve request time
	const htmlContent = await markdownToHtml(content);

	const { title, description, projectShortName, coverImageUrl, date, author, tags } =
		data;
	if (!title || !description || !coverImageUrl || !date || !author || !tags) {
		throw new Error("A required field is missing");
	}

	const slug = createSlug(title as string);

	console.log(`data retrieved for ${title}`);
	return {
		title,
		description,
		projectShortName,
		content: htmlContent,
		coverImageUrl,
		date,
		author,
		tags,
		slug,
	};
};

const getProjectDataFromFile = async (filePath: PathLike): Promise<Project> => {
	const fileContent = fs.readFileSync(filePath, "utf8");

	const { data, content } = matter(fileContent);
	if (!content || !data) {
		throw new Error("File missing required content");
	}

	checkRequiredFields(data);

	// perform the content transformation here, to improve request time
	const htmlContent = await markdownToHtml(content);

	const {
		name,
		shortName,
		description,
		projectUrl,
		githubUrl,
		coverImageUrl,
		tags,
		caseStudyUrl,
		tech,
		wip,
	} = data;

	const slug = createSlug(name as string);

	console.log(`data retrieved for ${name}`);
	return {
		name,
		shortName,
		description,
		projectUrl,
		githubUrl,
		coverImageUrl,
		tags,
		caseStudyUrl,
		content: htmlContent,
		slug,
		tech,
		wip,
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

const buildJson = async (postFolder: string, projectsFolder: string) => {
	const postFileNames = getFilenamesFromFolder(postFolder);
	let postData: Post[] = [];
	const postPromises = [];
	for (const fileName of postFileNames) {
		console.log(`Getting data from ${fileName}`);
		postPromises.push(
			getPostDataFromFile(path.join(process.cwd(), postFolder, fileName)),
		);
	}

	postData = await Promise.all(postPromises);
	console.log("all data retrieved");

	const postTags: string[] = [];
	for (const post of postData) {
		post.tags.forEach((tag) => postTags.push(tag));
	}

	writeTagsToFile(postTags, "app/data/posts/tags.json");
	writeToFile(postData, "app/data/posts/posts.json");

	// now we can handle projects
	const projectFileNames = getFilenamesFromFolder(projectsFolder);
	let projectsData: Project[] = [];
	const projectPromises = [];
	for (const fileName of projectFileNames) {
		console.log(`Getting data from ${fileName}`);
		projectPromises.push(
			getProjectDataFromFile(path.join(process.cwd(), projectsFolder, fileName)),
		);
	}

	projectsData = await Promise.all(projectPromises);
	console.log("all data retrieved");

	const projectTags: string[] = [];
	for (const project of projectsData) {
		project.tags.forEach((tag) => projectTags.push(tag));
	}

	writeTagsToFile(projectTags, "app/data/projects/tags.json");
	writeToFile(projectsData, "app/data/projects/projects.json");
};

console.time("script");
await buildJson("posts", "projects");
console.timeEnd("script");
console.log("Write complete, all files are in JSON format");

function checkRequiredFields(fields: Record<string, unknown>) {
	const fieldNames = [
		"name",
		"shortName",
		"description",
		"githubUrl",
		"coverImageUrl",
		"tags",
		"caseStudyUrl",
		"tech",
		"wip",
	];

	fieldNames.forEach((field) => {
		if (fields[field] === undefined || fields[field] === null) {
			throw new Error(`The '${field}' field is missing`);
		}
	});
}
