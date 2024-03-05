import { Container } from "@/components/layout/container";
import { Title } from "@/components/layout/title";
import { ProjectCard } from "@/components/projects/project-card";
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
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
