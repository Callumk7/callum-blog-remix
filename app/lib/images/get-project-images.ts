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

	let imageFilenames: string[] = [];
	try {
		imageFilenames = fs.readdirSync(fullPath, "utf8");
	} catch (err) {
		console.error(err);
	}

	const result = [];
	if (imageFilenames.length > 0) {
		for (const imageFilename of imageFilenames) {
			result.push(`/images/projects/${projectName}/${imageFilename}`);
		}
	}

	return result;
};
