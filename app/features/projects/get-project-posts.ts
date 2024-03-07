import path from "path";
import fs from "fs";
import { Post } from "@/types";

export const getProjectPosts = (shortName: string) => {
	const jsonData = fs.readFileSync(
		path.join(process.cwd(), "app", "data", "posts", "posts.json"),
		"utf8",
	);

	const posts: Post[] = JSON.parse(jsonData);
	const related = posts.filter(post => post.projectShortName === shortName);

	return related;
}
