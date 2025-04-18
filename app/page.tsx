import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Title,
} from "@mantine/core";
import "@mantine/core/styles.css";

export default function Home() {
  return (
    <div>
      <Container>
        <Center h="100vh">
          <Box>
            <Title order={1}>MEDICAL APP 😉</Title>
          </Box>
        </Center>
      </Container>
    </div>
  );
}
