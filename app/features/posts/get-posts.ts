import path from "path";
import fs from "fs";
import { Post, Tags } from "@/types";

export const getAllPostData = (): Post[] => {
	const jsonData = fs.readFileSync(
		path.join(process.cwd(), "app", "data", "posts", "posts.json"),
		"utf8",
	);

	const posts: Post[] = JSON.parse(jsonData);
	return posts;
};

export const getPostBySlug = (slug: string) => {
	const posts = getAllPostData();

	const post = posts.find((post) => post.slug === slug);

	return post;
};

export const getTags = (): Tags => {
	const jsonData = fs.readFileSync(
		path.join(process.cwd(), "app", "data", "posts", "tags.json"),
		"utf8",
	);

	const tags: Tags = JSON.parse(jsonData);
	return tags;
};
