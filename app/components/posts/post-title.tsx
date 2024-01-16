export function PostTitle({ title }: { title: string }) {
  return (
    <div className="mb-8 mt-10 w-full">
      <h1 className="font-syne text-5vw text-center leading-snug font-black text-primary-1">{title}</h1>
    </div>
  );
}
