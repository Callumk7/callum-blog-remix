import path from "path";
import fs from "fs";
import { Post } from "@/types";

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
