import { FiTool } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import { Container } from "react-grid-system";
import {
  ContainerDetails,
  Title,
  SideOne,
  SideTwo
} from "./styles";

export function Trainer() {
  return (
    <div id="detalhes">
      <Fade left>
        <Container>
          <ContainerDetails>
            <SideOne>
              <Title>Treinamentos e palestras</Title>
              <ul>
                <li>
                  <FiTool /> <p>Síndrome de Burnout em professores</p>
                </li>
                <li>
                  <FiTool />{" "}
                  <p>Aproveitando ao máximo a tecnologia na educação</p>
                </li>
                <li>
                  <FiTool /> <p>Além da sala de aula</p>
                </li>
                <li>
                  <FiTool /> <p>Educação Híbrida</p>
                </li>
                <li>
                  <FiTool /> <p>Ferramentas de ensino</p>
                </li>
                <li>
                  <FiTool /> <p>Forúm com outros professores</p>
                </li>
                <li>
                  <FiTool /> <p>Levando a tecnologia para a sala de aula</p>
                </li>
                <li>
                  <FiTool /> <p>E muito mais...</p>
                </li>
              </ul>
            </SideOne>

            <SideTwo>
              <img src="/images/universo.svg" alt="Universo" />
            </SideTwo>
          </ContainerDetails>
        </Container>
      </Fade>
    </div>
  );
}
