export function PostTitle({ title }: { title: string }) {
  return (
    <div className="mx-auto mb-8 w-11/12">
      <h1 className="font-syne text-2vw font-black leading-snug text-primary-1">
        {title}
      </h1>
    </div>
  );
}
