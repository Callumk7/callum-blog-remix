import { unified } from "unified";
import html from "remark-html";
import prism from "remark-prism";
import parse from "remark-parse";
import remarkGfm from "remark-gfm";
import stringify from "remark-stringify";

export async function markdownToHtml(markdown: string) {
	const result = await unified()
		.use(parse)
		.use(remarkGfm)
		.use(stringify)
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
		.use(prism as any, { transformInlineCode: true })
		.use(html, {
			sanitize: false,
		})
		.process(markdown);
	return result.toString();
}
