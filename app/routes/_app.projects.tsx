import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { getAllProjectData } from "@/features/projects/get-projects";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";

export const loader = () => {
  const projects = getAllProjectData();

  return json({ projects });
};

export default function ProjectsPage() {
  const { projects } = useLoaderData<typeof loader>();
  const params = useParams();

  const [projState, setProjState] = useState(projects);

  // we need to know if we are at the root, to not display the outlet
  // this does not feel very remix-y.
  const isRoot = params.slug === undefined;

  // the params might be the project slug. If so, we want to remove the current
  // project from the array..
  useEffect(() => {
    if (params.slug) {
      const newProjects = projects.filter((project) => project.slug !== params.slug);
      setProjState(newProjects);
    }

    if (params.slug === undefined) {
      setProjState(projects);
    }
  }, [params.slug, projects]);

  return (
    <Container>
      <div className="mb-8 py-4">
        <h1 className="md:leading-14 pb-6 font-syne text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl">
          Projects
        </h1>
        <p className="font-mono">Explore my work.</p>
      </div>
      <div className={isRoot ? "" : "grid gap-4 xl:grid-cols-3"}>
        {!isRoot && (
            <div className="col-span-2">
              <Outlet />
            </div>
        )}
        <div
          className={
            isRoot
              ? "grid gap-3 md:grid-cols-2 lg:grid-cols-3"
              : "grid max-h-[50vh] gap-3"
          }
        >
          {projState.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </Container>
  );
}
