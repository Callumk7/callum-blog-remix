import { Separator } from "../layout/separator";
import { SocialLinks } from "../navigation/social-links";

export default function Profile() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="font-syne text-6xl lg:text-2xl font-black mb-6 text-primary-1">Callum Kloos</h1>
      <Separator />
      <div className="relative aspect-square w-9/12 overflow-hidden rounded-full">
        <img
          src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
          alt="porrtait"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <Separator />
      <SocialLinks />
    </div>
  );
}
