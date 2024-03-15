import { LoaderFunctionArgs } from "@remix-run/node";
import fs from "fs";
import path from "path";

const getCV = async (): Promise<Blob> => {
	const fileLocation = path.join(
		process.cwd(),
		"public",
		"files",
		"callum-kloos-cv-2024.pdf",
	);
	return new Promise((resolve, reject) => {
		fs.readFile(fileLocation, (err, data) => {
			if (err) {
				reject(err);
				return;
			}

			const blob = new Blob([data], { type: "application/pdf" });
			resolve(blob);
		});
	});
};

export async function loader() {
	let pdf: Blob;
	try {
		pdf = await getCV();
	} catch (err) {
		console.error(err);
		return new Response("This attempt ended in failure");
	}

	return new Response(pdf, {
		status: 200,
		headers: {
			"Content-Type": "application/pdf",
		},
	});
}
