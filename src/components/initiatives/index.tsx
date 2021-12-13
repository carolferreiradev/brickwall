import { Container } from "react-grid-system";
import Fade from "react-reveal/Fade";
import {
  ContainerInitiatives,
  Content,
  ImageTitle,
  Paragraph,
  Title
} from "./styles";

export function Initiatives() {
  return (
    <Fade left>
      <Container>
        <ContainerInitiatives id="missoes">
          <Content>
            <ImageTitle>
              <img src="/images/missao.svg" alt="Missão" />
            </ImageTitle>
            <section>
              <Title>Missão</Title>
              <Paragraph>
                Ser um portal educacional amigo do professor, onde o mesmo possa
                se aprimorar, aprender técnicas correlacionadas a tecnologia que
                irão ajuda-lo no seu dia a dia. Aqui o docente receberá
                treinamentos e palestras, além de ter contato com outros
                docentes por meio do forúm. Seremos inúmeros tijolos na
                construção de um muro educacional cada vez mais forte.
              </Paragraph>
            </section>
          </Content>
        </ContainerInitiatives>
      </Container>
    </Fade>
  );
}
