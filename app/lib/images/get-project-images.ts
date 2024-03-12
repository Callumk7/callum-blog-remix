import path from "path";
import fs from "fs";

interface NodeJSError extends Error {
	code?: string;
}

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
		const error = err as NodeJSError;
		if (error.code === "ENOENT" ) {
			console.log(`No directory found for the project at: ${fullPath}`)
		} else {
			throw err;
		}
	}

	const result = [];
	if (imageFilenames.length > 0) {
		for (const imageFilename of imageFilenames) {
			result.push(`/images/projects/${projectName}/${imageFilename}`);
		}
	}

	return result;
};
