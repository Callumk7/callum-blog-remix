export default function Portrait() {
  return (
    <div className="flex flex-col gap-y-9 place-items-center justify-center">
      <h1 className="mt-6 font-syne text-6xl lg:text-4vw font-black w-min mx-auto">Callum Kloos</h1>
      <div className="relative aspect-square w-9/12 overflow-hidden rounded-full">
        <img
          src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
          alt="portrait"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
