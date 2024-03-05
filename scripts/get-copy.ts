import path from "path";
import fs from "fs";
import { markdownToHtml } from "@/lib/posts/markdown-to-html";

const convertFileToHtml = async (file: string, folder: string) => {
	const fullPathToFolder = path.join(process.cwd(), folder);
	const fullPath = path.join(fullPathToFolder, file);
	const fileContent = fs.readFileSync(fullPath, "utf8");
	const htmlContent = await markdownToHtml(fileContent);
	fs.writeFile(path.join(fullPathToFolder, "html.html"), htmlContent, (err) => {
		if (err) {
			console.error(err);
		}
	});
};

convertFileToHtml("introduction.md", "app/data/copy/about");
