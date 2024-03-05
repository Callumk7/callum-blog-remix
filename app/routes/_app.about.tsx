import Profile from "@/components/about/profile";
import Timeline from "@/components/home/timeline";
import { Container } from "@/components/layout/container";

export default function AboutPage() {
  return (
    <div className="mt-28">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-3">
          <Profile />
          <div className="prose prose-invert col-span-2 max-w-none">
            <p>
              Hi, and thanks for stopping by. My name is{" "}
              <span className="font-bold text-primary-2">Callum</span> and I am a self
              taught web developer specialising in building full stack applications with{" "}
              <a href="https://remix.run">Remix</a>, <a href="https://react.dev">React</a>{" "}
              and <a href="https://www.typescriptlang.org">Typescript</a>. Checkout my
              projects in the Project section, or leave a message!
            </p>
            <p>
              I&apos;ve worked at start ups and scale ups as a Product manager, helping to
              deliver value through research, rapid testing and a desire to succeed.
            </p>
            <p>
              When I am not programming, I enjoy walking my dog, chess, photography and
              running. Reach out and lets connect!
            </p>
          </div>
        </div>
        <div className="hidden w-4/5 lg:inline">
          <Timeline />
        </div>
      </Container>
    </div>
  );
}
