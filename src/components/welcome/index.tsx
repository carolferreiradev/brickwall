import Pulse from "react-reveal/Pulse";
import { Container } from "react-grid-system";
import {
  ContainerWelcome,
  H1,
  ImageTitle,
  Paragraph,
  Title,
} from "./styles";

export function Welcome() {
  return (
    <div id="brickwall">
      <Pulse>
        <ContainerWelcome>
          <Container>
            <Title>Iniciativa</Title>
            <ImageTitle>
              <img src="/images/welcome.svg" alt="BrickWall" />
              <div>
                <H1>BrickWall</H1>
                <Paragraph>
                  Fortelecer a educação através de um dos seus principais
                  pilares: <b>o professor</b>. Através de iniciativas que visam
                  instruir, conectar e auxiliar os docentes no seu dia a dia
                  através da tecnologia.
                </Paragraph>
              </div>
            </ImageTitle>
          </Container>
        </ContainerWelcome>
      </Pulse>
    </div>
  );
}
