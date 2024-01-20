import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        className,
        "relative flex flex-col gap-5 rounded-md border border-foreground/20 p-6",
      )}
      {...props}
    >
      {children}
    </div>
  );
}
