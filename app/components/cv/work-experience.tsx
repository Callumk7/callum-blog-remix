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
      <TimeWorked dateFrom={dateFrom} dateTo={dateTo} />
      <h2 className="pb-3 pt-1 font-syne text-3xl font-black text-primary-1">
        {company}
      </h2>
      <h2 className="pb-3 pt-1 text-xl font-semibold">{title}</h2>

      <p>{children}</p>
    </Card>
  );
}

interface TimeWorkedProps {
  dateFrom: Date;
  dateTo: Date | "current";
}

function TimeWorked({ dateFrom, dateTo }: TimeWorkedProps) {
  return (
    <div className="text-sm font-light">
      <span>
        {dateFrom.toLocaleString("default", { month: "long" })} {dateFrom.getFullYear()}
      </span>{" "}
      {dateTo === "current" ? (
        <span>(active)</span>
      ) : (
        <>
          <span>to</span>{" "}
          <span>
            {dateTo.toLocaleString("default", { month: "long" })} {dateTo.getFullYear()}
          </span>
        </>
      )}
    </div>
  );
}
