import { Avatar } from "../avatar";

export default function Portrait() {
  return (
    <div className="flex flex-col place-items-center justify-center gap-y-9">
      <h1 className="mx-auto mt-6 w-max font-syne text-6vw font-black md:w-min md:text-6xl lg:text-4vw">
        Callum Kloos
      </h1>
      <Avatar />
    </div>
  );
}
