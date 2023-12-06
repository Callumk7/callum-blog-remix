interface ContainerProps {
  children: React.ReactNode;
}
export function Container({ children }: ContainerProps) {
  return (
    <div className="w-4/5 mx-auto flex flex-col gap-5">
      {children}
    </div>
  )
}
