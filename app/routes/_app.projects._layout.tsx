import { Separator } from "@/components/layout/separator";
import { ProjectCard } from "@/components/projects/project-card";
import { getAllProjectData } from "@/features/projects/get-projects";
import { LinksFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

///
/// LOADER
///
export const loader = ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  let projects = getAllProjectData();

  projects = projects.filter((project) => project.slug !== slug);

  return json({ projects });
};

export default function ProjectLayout() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <div className="grid lg:grid-cols-8 gap-14">
      <div className="lg:col-span-5 row-span-full">
        <Outlet />
      </div>
      <div className="relative w-full lg:col-span-3">
        <Separator className="lg:hidden" />
        <h3 className="font-syne font-bold py-4">Other Projects</h3>
        <div className="lg:fixed max-w-sm grid gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
