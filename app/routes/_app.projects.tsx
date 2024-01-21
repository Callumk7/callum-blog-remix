import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { Outlet, useLoaderData, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  return (
    <Container width={"max"}>
      <Outlet />
    </Container>
  );
}
