import Profile from "@/components/about/profile";
import { Container } from "@/components/layout/container";

export default function AboutPage() {
  return (
    <div className="mt-28">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-3">
          <Profile />
          <p className="col-span-2">
            Amet anim fugiat enim sunt est. Sit aute in cupidatat. Adipisicing Lorem sint
            laborum ut consequat fugiat ipsum mollit exercitation. Lorem laboris
            consectetur culpa ut adipisicing consectetur reprehenderit ipsum tempor.
            Occaecat do eiusmod fugiat ex et occaecat irure proident occaecat laboris
            culpa sunt sint. Eu fugiat incididunt pariatur est Lorem est minim officia
            eiusmod proident et deserunt ad. Nulla dolor sit aute Lorem do culpa consequat
            id nisi. Do sit nisi enim quis labore do enim ex. Anim sit est ad non enim
            occaecat minim ad labore. Eu fugiat ut veniam Lorem sint anim aute ex veniam
            pariatur tempor veniam ullamco cupidatat eiusmod.
          </p>
        </div>
      </Container>
    </div>
  );
}
