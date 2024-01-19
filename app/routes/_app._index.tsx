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
      <div className="mt-10">
        <div className="w-60 rounded-xl bg-primary-3 p-8">
          <p className="text-background">
            Nostrud dolore labore sunt tempor ex magna est consequat officia aute sunt
            eiusmod culpa magna ex. Voluptate dolor anim laboris duis ad Lorem et mollit
            aute ipsum aliquip. Velit anim amet aute id minim voluptate ullamco est aute
            nisi cillum. Elit qui culpa ut amet occaecat qui deserunt quis sunt irure.
            Excepteur ad labore Lorem cupidatat ea qui quis. Labore in reprehenderit Lorem
            aliquip exercitation voluptate sunt veniam laboris pariatur ullamco. Veniam ex
            in ut anim eu velit. Nisi laboris consectetur sint culpa.
          </p>
        </div>
      </div>
    </Container>
  );
}
