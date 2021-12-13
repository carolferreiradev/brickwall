import { FiDollarSign } from "react-icons/fi";
import { FaDove, FaPlane, FaFighterJet, FaSpaceShuttle } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { Container } from "react-grid-system";
import {
  Button,
  Card,
  Cards,
  ContainerDetails,
  Header,
  Price,
  Subtitle,
  Title,
  Divider,
} from "./styles";

export function Prices() {
  return (
    <div id="prices">
      <Fade left>
        <Divider></Divider>
        <Container>
          <ContainerDetails>
            <Header>
              <Title>Planos</Title>
              <Subtitle>
                Possuimos planos para governos estatuais, municipais e para
                professores que desejam obter por conta própria, além de um
                treinamento inicial de ferramentas tecnológicas educacionais
                totalmente gratuito.
              </Subtitle>
            </Header>
            <Cards>
              <Card>
                <FaDove />

                <h3>Grátis</h3>

                <Price>
                  <h4>
                    <span>R$</span> 0,00
                  </h4>
                  <p>por mês</p>
                </Price>

                <Button>
                  <FiDollarSign />
                  Obter
                </Button>
              </Card>
              <Card>
                <FaPlane />

                <h3>Individual</h3>

                <Price>
                  <h4>
                    <span>R$</span> 179,99
                  </h4>
                  <p>por mês</p>
                </Price>

                <Button>
                  <FiDollarSign /> Obter
                </Button>
              </Card>
              <Card>
                <FaFighterJet />

                <h3>Municipal</h3>

                <Price>
                  <h4>
                    <span>R$</span> 2.499,99
                  </h4>
                  <p>por mês(a cada 1.000 professores)</p>
                </Price>

                <Button>
                  <FiDollarSign />
                  Obter
                </Button>
              </Card>
              <Card>
                <FaSpaceShuttle />

                <h3>Estadual</h3>

                <Price>
                  <h4>
                    <span>R$</span> 8.699,00
                  </h4>
                  <p>por mês(a cada 10.000 professores)</p>
                </Price>

                <Button>
                  <FiDollarSign />
                  Obter
                </Button>
              </Card>
            </Cards>
          </ContainerDetails>
        </Container>
      </Fade>
    </div>
  );
}
