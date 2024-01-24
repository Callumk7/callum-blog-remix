import { unified } from "unified";
import html from "remark-html";
import prism from "remark-prism";
import parse from "remark-parse";
import stringify from "remark-stringify";

export async function markdownToHtml(markdown: string) {
	const result = await unified()
		.use(parse)
		.use(stringify)
		.use(prism as any, { transformInlineCode: true })
		.use(html, {
			sanitize: false,
		})
		.process(markdown);
	return result.toString();
}
