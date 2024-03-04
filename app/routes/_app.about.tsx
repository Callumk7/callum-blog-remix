import Profile from "@/components/about/profile";
import Timeline from "@/components/home/timeline";
import { Container } from "@/components/layout/container";

export default function AboutPage() {
  return (
    <div className="mt-28">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-3">
          <Profile />
          <div className="col-span-2">
            <p>
              Consequat mollit sint ut exercitation eiusmod eu nisi. Exercitation velit
              duis magna adipisicing do cillum esse. Minim aute adipisicing est irure
              adipisicing ex esse reprehenderit qui. Ad nisi in eiusmod qui esse qui
              consequat ea mollit nulla et. Qui velit eiusmod sint nulla aute minim
              laborum esse et velit nisi ad fugiat. Do in dolore do excepteur consectetur
              commodo ad id velit. Amet deserunt deserunt sit amet aute occaecat aliquip
              labore aliquip. Id enim et ex ea. Velit non officia amet aute. Nisi laborum
              ea do commodo. Voluptate dolore incididunt in excepteur adipisicing
              excepteur in. Id esse sit laborum laborum fugiat veniam exercitation minim
              quis ullamco occaecat qui.
            </p>
          </div>
        </div>
        <Timeline />
      </Container>
    </div>
  );
}
