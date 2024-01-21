import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { getAllProjectData } from "@/features/projects/get-projects";
import { json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { useState, useEffect } from "react";

export const loader = () => {
  const projects = getAllProjectData();

  return json({ projects });
};

export default function ProjectsIndex() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <Container>
      <h1 className="md:leading-14 font-syne text-3xl font-extrabold leading-9 tracking-tight  text-foreground sm:text-4xl sm:leading-10 md:text-6xl">
        Projects
      </h1>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
