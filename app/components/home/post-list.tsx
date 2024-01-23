import { Post } from "@/types";
import { PostPreview } from "../posts/post-preview";

interface PostListProps {
  posts: Post[];
}
export default function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-16 grid divide-y divide-foreground/20 md:space-y-5">
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  );
}
