interface TitleProps {
  title: string;
  centered?: boolean;
}

export function Title({ title, centered }: TitleProps) {
  return (
    <h1
      className={`${
        centered && "mx-auto w-4/5"
      } md:leading-14 font-syne text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl`}
    >
      {title}
    </h1>
  );
}
