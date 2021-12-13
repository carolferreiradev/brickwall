import Fade from "react-reveal/Fade";
import { Container } from "react-grid-system";
import { ContainerAbout, ImageTitle, Paragraph, Title } from "./styles";
import { Carousel } from "react-carousel-minimal";

const data = [
  {
    image: "/images/1.webp",
  },
  {
    image: "/images/2.webp",
  },
  {
    image: "/images/3.webp",
  },
  {
    image: "/images/4.webp",
  },
];

export function About() {
  return (
    <Fade left>
      <ContainerAbout id="sobre-nos">
        <Container>
          <Title>Sobre nós</Title>
          <ImageTitle>
            <Carousel
              data={data}
              time={3000}
              width="850px"
              height="500px"
              radius="10px"
              slideNumber={true}
              captionPosition="none"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="black"
              slideImageFit="cover"
              thumbnails={false}
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "0 auto",
              }}
            />
            <div>
              <Paragraph>
                Nossa iniciativa nasceu em 2021, após a eclosão da Pandemia de
                Covid 19, onde ficou evidenciado através do distancimento social
                a quantidade de professores que ainda não possuiam contato com
                aulas no formado EAD.
              </Paragraph>
              <Paragraph>
                Segundo Levantamento feito pela Universidade Federal de Minas
                Gerais e da Confederação Nacional dos Trabalhadores em Educação,
                em 2020, quase 90% dos professores não tinham experiência com
                aulas remotas antes da pandemia e 42% seguem sem treinamento a
                respeito.
              </Paragraph>
              <Paragraph>
                O nome BrickWall vem do inglês "Parede de tijolos", pois é de
                nosso desejo fortalecer, proteger um dos alicerces da educação
                no Brasil, que em muitos momentos é deixado de lado, não recebe
                o cuidado, o treinamento ou o acesso necessário para fazer da tecnologia
                uma aliada educacional.
              </Paragraph>
            </div>
          </ImageTitle>
        </Container>
      </ContainerAbout>
    </Fade>
  );
}
