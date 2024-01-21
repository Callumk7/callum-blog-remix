import { Container } from "@/components/layout/container";
import { PostBody } from "@/components/posts/post-body";
import { getProjectBySlug } from "@/features/projects/get-projects";
import { LinksFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import styles from "@/styles/prism.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

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
    <Container width={"max"}>
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
