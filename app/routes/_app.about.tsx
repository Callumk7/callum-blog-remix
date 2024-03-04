import Profile from "@/components/about/profile";
import { Container } from "@/components/layout/container";

export default function AboutPage() {
  return (
    <div className="mt-28">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-3">
          <Profile />
          <div className="col-span-2">
            <p>
              You've just arrived at the digital domain of a software artisan, a place
              where creative genius meets unparalleled drive. A unique combination that's
              not just about solving problems - but about revolutionizing the way we
              interact with the digital world. Allow me to introduce myself.
            </p>
            <p>
              My name stands synonymous with unyielding dedication and innovative ambition
              within digital landscapes. I possess a robust blend of skills across
              software development, design, and product management arenas. Rooted in my
              web development expertise, I have crafted cyberspace architectures that
              persist not only for their aesthetic appeal but more importantly, for their
              user-centric designs and resilient foundations.
            </p>
            <p>
              As you delve deeper into this portfolio, you'll find a display of both my
              prowess and passion: clean, efficient code that dances harmoniously with
              expressive, engaging visuals. You'll encounter a showcase of my work, where
              technical mastery coexists with a keen, detail-oriented eye for design.
            </p>
            <p>
              But this space is not solely about the spectacular products I've developed.
              It's also a testament to my journey. My commitment. The relentless pursuit
              of personal and professional growth that is as invigorating as it is
              fruitful. It's about the burning aspiration to build, to refine, to
              constantly expand the boundaries of what's possible.
            </p>
            <p>
              Software (web) development, design, and product management - three separate
              realms that I seamlessly blend together. I invite you to journey through my
              portfolio, to witness this symphony of skills for yourself.
            </p>
            <h2>
              Welcome to a world of innovation, meticulous design, and steadfast passion.
              Welcome to my world.
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
}
