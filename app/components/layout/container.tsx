import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";

const containerVariants = cva("flex flex-col gap-10", {
  variants: {
    width: {
      normal: "mx-auto w-10/12 lg:w-4/5",
      wide: "mx-auto w-11/12 lg:w-10/12",
      max: "w-full"
    },
    space: {
      compact: "space-y-3",
      normal: "space-y-7",
      wide: "space-y-10",
      none: "",
    }
  },
  defaultVariants: {
    width: "normal",
    space: "none"
  },
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, width, space, ...props }: ContainerProps) {
  return (
    <div className={clsx(containerVariants({ className, width, space }))} {...props}>
      {children}
    </div>
  );
}
