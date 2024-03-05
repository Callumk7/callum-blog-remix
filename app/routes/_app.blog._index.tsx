import { Title } from "@/components/layout/title";
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
    <div className="divide-y divide-foreground/20">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <Title title="Latest" />
        <TagList className="pb-10 pt-3" tags={tags} />
      </div>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  );
}
