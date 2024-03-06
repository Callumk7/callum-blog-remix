import { Container } from "@/components/layout/container";
import { PostBody } from "@/components/posts/post-body";
import { getProjectBySlug } from "@/features/projects/get-projects";
import { LinksFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import styles from "@/styles/prism.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getRandomPhotos } from "@/lib/unsplash/get-photos";
import { PhotoPreview } from "@/components/photography/photo-preview";
import { getProjectImageSrcs } from "@/lib/images/get-project-images";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

///
/// LOADER
///
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  const project = getProjectBySlug(slug!);
  const photos = await getRandomPhotos(25, "portrait");

  const images = getProjectImageSrcs("playq");
  console.log(images);

  if (!project) {
    return json({ project: null, photos, images });
  }

  return json({ project, photos, images });
};

export default function ProjectsPage() {
  const { project, photos, images } = useLoaderData<typeof loader>();
  return (
    <Container width={"max"}>
      <h1 className="font-syne text-4xl font-black text-primary-1">{project?.name}</h1>
      <Carousel className="mx-auto my-10 w-4/5">
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {project && (
        <>
          <p className="font-mono">{project.description}</p>
          <PostBody content={project.content} />
        </>
      )}
    </Container>
  );
}
