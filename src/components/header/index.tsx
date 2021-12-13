import { useState } from "react";
import { Visible } from "react-grid-system";
import { FiMenu } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import {
  Button,
  HeaderContainer,
  HeaderContainerMobile,
  Li,
  LiMobile,
  Logo,
  LogoMobile,
  Menu,
  MenuMobile,
  Ul,
  UlMobile,
} from "./styles";

export function Header() {
  const [toggle, setToggle] = useState("toggle");
  return (
    <>
      <Visible xs sm>
        <HeaderContainerMobile>
          <nav>
            <LogoMobile>
              <img src="/images/welcome.svg" alt="BrickWall" />
            </LogoMobile>

            <Button
              onClick={() =>
                toggle === "toggle" ? setToggle("") : setToggle("toggle")
              }
            >
              <FiMenu />
            </Button>
          </nav>
          <MenuMobile className={toggle}>
            <Fade left>
              <UlMobile>
                <LiMobile>
                  <a href="#brickwall"> BrickWall </a>
                </LiMobile>
                <LiMobile>
                  <a href="#sobre-nos"> Sobre nós </a>
                </LiMobile>
                <LiMobile>
                  <a href="#missoes"> Missão </a>
                </LiMobile>
                <LiMobile>
                  <a href="#depoimento"> Depoimento </a>
                </LiMobile>
                <LiMobile>
                  <a href="#detalhes"> Treinamentos e palestras </a>
                </LiMobile>
                <LiMobile>
                  <a href="#prices"> Planos </a>
                </LiMobile>
                <LiMobile>
                  <a href="#contatos"> Contatos </a>
                </LiMobile>
              </UlMobile>
            </Fade>
          </MenuMobile>
        </HeaderContainerMobile>
      </Visible>

      <Visible md lg xl xxl>
        <HeaderContainer id="header">
          <Logo>
            <img src="/images/welcome.svg" alt="BrickWall" />
          </Logo>

          <Menu>
            <Ul>
              <Li>
                <a href="#brickwall"> BrickWall </a>
              </Li>
              <Li>
                <a href="#sobre-nos"> Sobre nós </a>
              </Li>
              <Li>
                <a href="#missoes"> Missão </a>
              </Li>
              <Li>
                <a href="#depoimento"> Depoimento </a>
              </Li>
              <Li>
                <a href="#detalhes"> Treinamentos e palestras </a>
              </Li>
              <Li>
                <a href="#prices"> Planos </a>
              </Li>
              <Li>
                <a href="#contatos"> Contatos </a>
              </Li>
            </Ul>
          </Menu>
        </HeaderContainer>
      </Visible>
    </>
  );
}
