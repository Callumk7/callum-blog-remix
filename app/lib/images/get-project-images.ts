import path from "path";
import fs from "fs";
export const getProjectImageSrcs = (projectName: string): string[] => {
	const fullPath = path.join(
		process.cwd(),
		"public",
		"images",
		"projects",
		projectName,
	);
	const imageFilenames = fs.readdirSync(fullPath, "utf8");

	const result = [];
	for (const imageFilename of imageFilenames) {
		result.push(`/images/projects/${projectName}/${imageFilename}`);
	}

	return result;
};
