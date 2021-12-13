import Fade from "react-reveal/Fade";
import { Container } from "react-grid-system";
import { ContainerDeposition, ImageTitle, Paragraph, Title } from "./styles";

export function Deposition() {
  return (
    <Fade left>
      <ContainerDeposition id="depoimento">
        <Container>
          <Title>Depoimento</Title>

          <ImageTitle>
            <div>
              <p className="person">Maria Léia - Docente em Minas Gerais</p>
              <Paragraph>
                Estamos em um mundo de mudanças frequentes e em cada mudança é
                preciso inteligência para nos adaptarmos ao momento. A
                tecnologia chegou como um sistema eficiente em todos os campos
                da sociedade.
              </Paragraph>
              <Paragraph>
                Na educação, tem contribuído cada vez mais nos novos métodos de
                ensino, com mais rapidez e precisão. Nesse tempo de pandemia,
                percebemos o quão necessário é o uso das potências tecnológicas
                entre escola e família.
              </Paragraph>
            </div>
            <img src="/images/teacher.svg" alt="Professor" />
          </ImageTitle>
        </Container>
      </ContainerDeposition>
    </Fade>
  );
}
