import Portrait from "@/components/home/portrait";
import PostList from "@/components/home/post-list";
import { Container } from "@/components/layout/container";
import { getAllPostData } from "@/features/posts/get-posts";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = (_args: LoaderFunctionArgs) => {
  const posts = getAllPostData();
  const recentPosts = posts.slice(0, 3);
  return json({ recentPosts });
};

export default function AppIndex() {
  const { recentPosts } = useLoaderData<typeof loader>();
  return (
    <Container className="my-10">
      <div className="gap-x-4 lg:grid lg:grid-cols-2">
        <Portrait />
        <PostList posts={recentPosts} />
      </div>
    </Container>
  );
}
