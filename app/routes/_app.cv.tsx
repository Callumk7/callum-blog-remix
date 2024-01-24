import { Card } from "@/components/layout/card";
import { Container } from "@/components/layout/container";

export default function CVRoute() {
  return (
    <Container>
      <Card>
        <h1>Callum Kloos</h1>
        <h2>Product Designer and Developer</h2>
      </Card>
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <h1>Contact Info</h1>
          <p>
            Sint do laborum Lorem. Occaecat aliqua et officia officia reprehenderit veniam
            eiusmod voluptate in eiusmod excepteur anim. Sunt id Lorem ad ea velit quis.
            In anim est laborum excepteur aute mollit dolore aute. Exercitation et fugiat
            dolore Lorem enim sunt labore occaecat ipsum deserunt veniam deserunt nisi
            nostrud elit. Do culpa Lorem ullamco labore sint et dolor dolor.
          </p>
        </Card>
        <Card className="row-start-1 row-end-3">
          <h1>Work History</h1>
          <h2>Receipt Bank</h2>
          <p>
            Sint do laborum Lorem. Occaecat aliqua et officia officia reprehenderit veniam
            eiusmod voluptate in eiusmod excepteur anim. Sunt id Lorem ad ea velit quis.
            In anim est laborum excepteur aute mollit dolore aute. Exercitation et fugiat
            dolore Lorem enim sunt labore occaecat ipsum deserunt veniam deserunt nisi
            nostrud elit. Do culpa Lorem ullamco labore sint et dolor dolor.
          </p>
          <h2>Receipt Bank</h2>
          <p>
            Sint do laborum Lorem. Occaecat aliqua et officia officia reprehenderit veniam
            eiusmod voluptate in eiusmod excepteur anim. Sunt id Lorem ad ea velit quis.
            In anim est laborum excepteur aute mollit dolore aute. Exercitation et fugiat
            dolore Lorem enim sunt labore occaecat ipsum deserunt veniam deserunt nisi
            nostrud elit. Do culpa Lorem ullamco labore sint et dolor dolor.
          </p>
        </Card>
      </div>
    </Container>
  );
}
