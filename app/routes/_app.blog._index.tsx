import { PostPreview } from "@/components/posts/post-preview";
import { TagList } from "@/components/tags/tag-list";
import { getAllPostData } from "@/features/posts/get-posts";
import { getTags } from "@/features/posts/get-tags";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = () => {
  const posts = getAllPostData();
  const tags = getTags();

  return json({ posts, tags });
};


export default function BlogPage() {
  const { posts, tags } = useLoaderData<typeof loader>();
  return (
    <>
      <div className="divide-foreground/20 divide-y">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 font-syne text-foreground text-3xl font-extrabold leading-9  tracking-tight sm:text-4xl sm:leading-10 md:text-6xl">
            Latest
          </h1>
          <TagList className="pb-10 pt-3" tags={tags} />
        </div>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
