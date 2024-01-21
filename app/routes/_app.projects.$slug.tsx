import { Container } from "@/components/layout/container";
import { PostBody } from "@/components/posts/post-body";
import { getProjectBySlug } from "@/features/projects/get-projects";
import { markdownToHtml } from "@/lib/posts/markdown-to-html";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";

///
/// LOADER
///
export const loader = ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  const project = getProjectBySlug(slug!);

  if (!project) {
    return json({ project: null });
  }

  return json({ project });
};

export default function ProjectsPage() {
  const { project } = useLoaderData<typeof loader>();
  return (
    <Container>
      <h1 className="font-syne text-4xl font-black text-primary-1">{project?.name}</h1>
      {project && (
        <>
          <p className="font-mono">{project.description}</p>
          <PostBody content={project.content} />
        </>
      )}
    </Container>
  );
}
