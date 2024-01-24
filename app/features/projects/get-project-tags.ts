import path from "path";
import fs from "fs";
import { Tags } from "@/types";

export const getProjectTags = (): Tags => {
	const jsonData = fs.readFileSync(
		path.join(process.cwd(), "app", "data", "projects", "tags.json"),
		"utf8"
	)

	const tags: Tags = JSON.parse(jsonData);
	return tags;
}
