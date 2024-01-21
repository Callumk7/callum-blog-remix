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
    <div className="grid xl:grid-cols-8 gap-14">
      <div className="xl:col-span-5 row-span-full">
        <Outlet />
      </div>
      <div className="relative w-full xl:col-span-3">
        <Separator className="xl:hidden" />
        <div className="xl:fixed">
          <h3 className="font-syne text-lg font-bold pb-4 pt-10">Other Projects</h3>
          <div className="xl:max-w-sm grid grid-cols-2 lg:grid-cols-1 gap-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
