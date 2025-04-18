import { Hero } from "@/components/Front/Hero/Hero";
import { Container } from "@mantine/core";
import "@mantine/core/styles.css";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero />
      </Container>
    </div>
  );
}
