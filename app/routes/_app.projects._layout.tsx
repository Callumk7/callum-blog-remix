import { Card } from "@/components/layout/card";
import { Separator } from "@/components/layout/separator";
import { ProjectCard } from "@/components/projects/project-card";
import { Pill } from "@/components/tags/pill";
import { getAllProjectData } from "@/features/projects/get-projects";
import { Project } from "@/types";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

///
/// LOADER
///
export const loader = ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  let projects = getAllProjectData();

  // We redirect to project page if no slug, so we can assert
  // that project !== undefined
  const project = projects.find((proj) => proj.slug === slug)!;
  projects = projects.filter((project) => project.slug !== slug);

  return json({ projects, project });
};

// force revalidation (refetch sidebar)
export const shouldRevalidate = () => true;

///
/// RENDER FUNCTION
///
export default function ProjectLayout() {
  const { projects, project } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="grid gap-14 xl:grid-cols-8">
        <div className="row-span-full xl:col-span-5">
          <div className="mb-10 xl:hidden">
            <ProjectDetailsCard project={project} />
          </div>
          <Outlet />
        </div>
        <div className="space-y-5 xl:hidden">
          <Separator />
          <h3 className="font-syne text-lg font-bold">Other Projects</h3>
        </div>
        <div className="relative w-full xl:col-span-3">
          <div className="xl:fixed">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1 xl:max-w-sm">
              <div className="mb-10 hidden xl:inline">
                <ProjectDetailsCard project={project} />
              </div>
              <h3 className="hidden pb-4 pt-10 font-syne text-lg font-bold xl:inline">
                Other Projects
              </h3>
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectDetailsCard({ project }: { project: Project }) {
  return (
    <Card flex>
      <a href={project.projectUrl} className="text-primary-2 underline">
        {project.projectUrl}
      </a>
      <p>{project.description}</p>
      <div className="flex flex-wrap gap-3">
        {project.tech.map((t) => (
          <Pill key={t} tag={t} />
        ))}
      </div>
    </Card>
  );
}
