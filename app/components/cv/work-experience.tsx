import { ReactNode } from "react";
import { Card } from "../layout/card";

interface WorkExperienceProps {
  company: string;
  dateFrom: Date;
  dateTo: Date | "current";
  title: string;
  children: ReactNode;
}

export function WorkExperience({
  company,
  dateFrom,
  dateTo,
  title,
  children,
}: WorkExperienceProps) {
  return (
    <Card>
      <h2 className="text-lg font-semibold">{title}</h2>
      <h2 className="font-mono font-light">{company}</h2>
      <p>{children}</p>
    </Card>
  );
}
