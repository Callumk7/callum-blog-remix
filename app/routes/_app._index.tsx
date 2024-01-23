import Portrait from "@/components/home/portrait";
import PostList from "@/components/home/post-list";
import Timeline from "@/components/home/timeline";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/layout/separator";
import { getAllPostData } from "@/features/posts/get-posts";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = (_args: LoaderFunctionArgs) => {
  const posts = getAllPostData();
  return json({ posts });
};

export default function AppIndex() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <Container className="my-10">
      <div className="gap-x-4 lg:grid lg:grid-cols-2">
        <Portrait />
        <PostList posts={posts} />
      </div>
      <Separator />
      <div className="hidden lg:block">
        <Timeline />
      </div>
    </Container>
  );
}
