import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={clsx(className, "mx-auto flex lg:w-4/5 md:w-10/12 flex-col gap-10")} {...props}>
      {children}
    </div>
  );
}
