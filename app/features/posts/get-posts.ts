import path from "path";
import fs from "fs";
import { Post } from "@/types";

export const getAllPostData = (): Post[] => {
	const jsonData = fs.readFileSync(
		path.join(process.cwd(), "app", "data", "posts", "posts.json"),
		"utf8",
	);

	const posts: Post[] = JSON.parse(jsonData);
	posts.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);

		// newest to oldest
		return dateB.getTime() - dateA.getTime();
	});

	return posts;
};

export const getPostsByTag = (tag: string): Post[] => {
	const allPosts = getAllPostData();
	const filteredPosts = allPosts.filter((post) => post.tags.includes(tag));

	return filteredPosts;
};

export const getPostBySlug = (slug: string) => {
	const posts = getAllPostData();

	const post = posts.find((post) => post.slug === slug);

	return post;
};
