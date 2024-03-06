import { Container } from "@/components/layout/container";
import { Title } from "@/components/layout/title";
import { ProjectTable } from "@/components/projects/project-table";
import { getAllProjectData } from "@/features/projects/get-projects";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = () => {
  const projects = getAllProjectData();

  return json({ projects });
};

export default function ProjectsIndex() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <Container>
      <Title title="Projects" />
      <ProjectTable projects={projects} />
    </Container>
  );
}
