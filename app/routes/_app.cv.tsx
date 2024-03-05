import { SkillsList } from "@/components/cv/skills-list";
import { WorkExperience } from "@/components/cv/work-experience";
import { Card } from "@/components/layout/card";
import { Container } from "@/components/layout/container";
import { InlineLink } from "@/components/navigation/inline-link";
import { SocialLinks } from "@/components/navigation/social-links";
import { ProjectCard } from "@/components/projects/project-card";
import { getAllProjectData } from "@/features/projects/get-projects";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = () => {
  const projects = getAllProjectData();

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
    <Container>
      <Card flex>
        <h1>Callum Kloos</h1>
        <h2>Web Developer and Product Specialist</h2>
        <SocialLinks />
      </Card>
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="space-y-3">
          <Card flex>
            <h1>Projects</h1>
            <p>
              Here is a sample of projects that I have worked on. Click on them to learn
              more, or explore the code on Github.
            </p>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </Card>
          <Card>
            <h1>Skills</h1>
            <SkillsList skills={skills} />
          </Card>
        </div>
        <Card className="row-start-1 row-end-3" flex>
          <h1>Work History</h1>
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
        </Card>
      </div>
    </Container>
  );
}
