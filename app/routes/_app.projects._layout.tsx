import { Separator } from "@/components/layout/separator";
import { ProjectCard } from "@/components/projects/project-card";
import { TagList } from "@/components/tags/tag-list";
import { getProjectTags } from "@/features/projects/get-project-tags";
import { getAllProjectData } from "@/features/projects/get-projects";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

///
/// LOADER
///
export const loader = ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  let projects = getAllProjectData();

  // the sidebar has all other projects
  projects = projects.filter((project) => project.slug !== slug);

  return json({ projects });
};

// force revalidation (refetch sidebar)
export const shouldRevalidate = () => true;

///
/// RENDER FUNCTION
///
export default function ProjectLayout() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="grid gap-14 xl:grid-cols-8">
        <div className="row-span-full xl:col-span-5">
          <Outlet />
        </div>
        <div className="relative w-full xl:col-span-3">
          <Separator className="xl:hidden" />
          <div className="xl:fixed">
            <h3 className="pb-4 pt-10 font-syne text-lg font-bold">Other Projects</h3>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 xl:max-w-sm">
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
