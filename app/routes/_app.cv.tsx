import { SkillsList } from "@/components/cv/skills-list";
import { WorkExperience } from "@/components/cv/work-experience";
import { Card } from "@/components/layout/card";
import { Container } from "@/components/layout/container";
import { H1, H2, H3 } from "@/components/layout/headers";
import { Title } from "@/components/layout/title";
import { InlineLink } from "@/components/navigation/inline-link";
import { SocialLinks } from "@/components/navigation/social-links";
import { ProjectCard } from "@/components/projects/project-card";
import { getAllProjectData } from "@/features/projects/get-projects";
import { Project } from "@/types";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = () => {
  const allProjects = getAllProjectData();
  const projects = allProjects.filter((project) => !project.wip);

  return json({ projects });
};

const skills = [
  "react",
  "remix",
  "typescript",
  "javascript",
  "SQl (Postgres)",
  "nodejs",
  "nextjs",
];

export default function CVRoute() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <Container width={"max"}>
      <Card flex>
        <Title title="Callum Kloos" />
        <H2>Web Developer and Product Designer</H2>
        <div className="flex justify-between">
          <SocialLinks />
          <p>
            <span className="mr-5">Prefer a PDF copy?</span> <DownloadCVButton />
          </p>
        </div>
      </Card>
      <Card>
        <h1>Skills</h1>
        <SkillsList skills={skills} />
      </Card>
      <div className="grid gap-9 lg:grid-cols-3">
        <div className="col-span-2 flex flex-col gap-4">
          <H2>Work History</H2>
          <WorkExperience
            company="Freelance Web Developer"
            title="Web Developer"
            dateFrom={new Date("2019-07-01")}
            dateTo={new Date("2020-09-01")}
          >
            <div className="leading-loose">
              Dedicated full-time hours to immerse myself in the craft of web development.
              Built{" "}
              <InlineLink to={"/projects/playq-videogame-playlist-manager"}>
                playQ
              </InlineLink>{" "}
              to touch all aspects of the web development pipeline. Built{" "}
              <InlineLink to={"/projects/this-little-piggy-richmond"}>
                This Little Piggy
              </InlineLink>{" "}
              for a local animal rescue charity. Built a personal portfolio. During this
              time I have become proficient with React, Remix, Serverless and serverful
              deployment environments, api design and database design.
            </div>
          </WorkExperience>
          <WorkExperience
            company="Cambrian Games"
            title="UX Strategy Consultant"
            dateFrom={new Date("2019-07-01")}
            dateTo={new Date("2020-09-01")}
          >
            Worked freelance as a Product Designer on an angel funded game development
            platform. I helped to shape the initial product strategy, and lay the initial
            design foundations for user testing and future development.
          </WorkExperience>
          <WorkExperience
            company="Receipt Bank"
            title="Product Manager"
            dateFrom={new Date("2019-07-01")}
            dateTo={new Date("2020-09-01")}
          >
            Product Manager at a fast paced, high growth company using artificial
            intelligence to disrupt the accounting space. Joined after series B funding
            through to a successful series C and later acquisition. I used agile
            methodologies, collaborated with a multi-disciplinary team, and managed the
            inception, research, testing, and iteration of features and initiatives which
            lead to the release of the companies first automated submission method,
            automated documentation fetching and bank integration, and the initiation of
            product led engagement and retention strategies.
          </WorkExperience>
        </div>
        <div className="space-y-3">
          <H2>Projects</H2>
          {projects.map((project) => (
            <CVProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>
    </Container>
  );
}

function DownloadCVButton() {
  return (
    <a
      href="/files/callum-kloos-cv-2024.pdf"
      target="_blank"
      rel="noreferrer"
      className="text-bold mr-6 rounded-md bg-foreground p-2 text-background transition-colors duration-100 ease-in-out hover:bg-primary-1"
    >
      Download
    </a>
  );
}

function CVProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <Link
        to={`/projects/${project.slug}`}
        className="transition-colors ease-in-out hover:text-purple-400"
      >
        <H2>{project.name}</H2>
      </Link>
      <p className="prose prose-invert">{project.cvDescription}</p>
    </Card>
  );
}
