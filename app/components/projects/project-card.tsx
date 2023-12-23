import { Project } from "@/types";
import { Card } from "../layout/card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <h1 className="font-syne text-xl font-bold text-primary-1">{project.name}</h1>
      <p className="font-mono">{project.description}</p>
    </Card>
  );
}
