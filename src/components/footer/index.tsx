import { Container } from "react-grid-system";
import {
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiMail,
  FiPhone,
  FiArrowUp,
} from "react-icons/fi";
import {
  About,
  Adress,
  Companie,
  Button,
  FooterContent,
  SocialMedias,
} from "./styles";
export function Footer() {
  return (
    <Container>
      <FooterContent>
        <div>
          <Companie>
            <img src="/images/welcome.svg" alt="Bem-vindo" />
            <h1>
              Iniciativa <br />
              BrickWall
            </h1>
          </Companie>
          <p>&copy;Carol Ferreira . Todos os direitos reservados</p>
          <SocialMedias>
            <a
              href="https://github.com/carolferreiradev"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/carol-ferreira-b6676a155/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </SocialMedias>
        </div>

        <Adress>
          Endereço
          <li>
            <FiMapPin /> Rua das Araras nº500
          </li>
          <li>Centro - Vitória Alta/ES</li>
          <li>
            <FiMail />
            BrickWall@gmail.com
          </li>
          <li>
            <FiPhone />
            (27) 99999-9999
          </li>
        </Adress>

        <About>
          Sobre
          <li>Termos de uso</li>
          <li>Direitos autorais</li>
          <li>Políticas de privacidade</li>
          <li>Como tratamos os dados</li>
        </About>
      </FooterContent>

      <Button href="#header">
        <FiArrowUp />
      </Button>
    </Container>
  );
}
