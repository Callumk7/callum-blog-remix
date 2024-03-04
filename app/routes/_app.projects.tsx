import { Container } from "@/components/layout/container";
import { TagList } from "@/components/tags/tag-list";
import { getProjectTags } from "@/features/projects/get-project-tags";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

///
/// LOADER
///
export const loader = ({ params }: LoaderFunctionArgs) => {
  const tags = getProjectTags();

  return json({ tags });
};

export default function ProjectsPage() {
  const { tags } = useLoaderData<typeof loader>();
  return (
    <Container width={"max"}>
      <TagList tags={tags} />
      <Outlet />
    </Container>
  );
}
