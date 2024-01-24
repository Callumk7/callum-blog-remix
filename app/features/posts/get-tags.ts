import path from "path";
import fs from "fs";
import { Tags } from "@/types";

export const getTags = (): Tags => {
	const jsonData = fs.readFileSync(
		path.join(process.cwd(), "app", "data", "posts", "tags.json"),
		"utf8",
	);

	const tags: Tags = JSON.parse(jsonData);
	return tags;
};
