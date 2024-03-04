export function PostTitle({ title }: { title: string }) {
  return (
    <div className="mb-8 mt-10 w-11/12 mx-auto">
      <h1 className="font-syne text-2vw text-center leading-snug font-black text-primary-1">{title}</h1>
    </div>
  );
}
