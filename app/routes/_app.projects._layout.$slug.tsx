import { Container } from "@/components/layout/container";
import { PostBody } from "@/components/posts/post-body";
import { getProjectBySlug } from "@/features/projects/get-projects";
import { LinksFunction, LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import styles from "@/styles/prism.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProjectImageSrcs } from "@/lib/images/get-project-images";
import { useEffect, useState } from "react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

///
/// LOADER
///
export const loader = ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  const project = getProjectBySlug(slug!);

  if (!project) {
    return redirect("/projects");
  }

  const images = getProjectImageSrcs(project.shortName);
  return json({ project, images });
};

export default function ProjectsPage() {
  const { project, images } = useLoaderData<typeof loader>();

  // Window width for carousel arrows. This will move to a carousel component

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Container width={"max"}>
      <h1 className="font-syne text-2xl font-black text-primary-1 md:text-4xl">
        {project.name}
      </h1>
      {images && images.length > 0 && (
        <Carousel className="mx-auto my-10 md:w-4/5">
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image}>
                <figure>
                  <div className="overflow-hidden rounded-lg border">
                    <img src={image} />
                  </div>
                  <figcaption className="mt-3 text-center font-mono">{image}</figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          {windowWidth > 768 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      )}
      <PostBody content={project.content} />
    </Container>
  );
}
