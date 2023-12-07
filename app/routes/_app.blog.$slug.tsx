import { Container } from "@/components/layout/container";
import { PostBody } from "@/components/posts/post-body";
import { PostTitle } from "@/components/posts/post-title";
import { getPostBySlug } from "@/lib/posts/get-posts";
import { markdownToHtml } from "@/lib/posts/markdown-to-html";
import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  const post = getPostBySlug(slug!);

  if (!post) {
    return json({ post: null });
  }

  const content = await markdownToHtml(post.content);

  return json({ post: { ...post, content } });
};

export default function BlogPostPage() {
  const { post } = useLoaderData<typeof loader>();

  if (!post) {
    return <div>Post does not exist</div>;
  }

  const date = new Date(post.date).toDateString();
  return (
    <div className="relative">
      <div className="relative mx-auto aspect-square w-1/2 overflow-hidden rounded-md">
        <img
          src={post.coverImageUrl}
          alt="cover image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <p className="w-full py-2 text-center text-sm text-foreground/80">{date}</p>
      <Container>
        <div className="flex flex-row gap-x-5">
          {post.tags.map((tag) => (
            <span
              className="rounded-full bg-white px-2 py-1 font-mono text-sm text-background"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <PostTitle title={post.title} />
      </Container>
      <PostBody content={post.content} />
    </div>
  );
}
