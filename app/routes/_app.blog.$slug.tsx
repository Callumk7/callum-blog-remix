import { Container } from "@/components/layout/container";
import { PostBody } from "@/components/posts/post-body";
import { PostTitle } from "@/components/posts/post-title";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import styles from "@/styles/prism.css";
import { getPostBySlug } from "@/features/posts/get-posts";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const loader = ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  const post = getPostBySlug(slug!);

  if (!post) {
    return json({ post: null });
  }

  return json({ post });
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
