import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  width: 100vw;
  padding: 2rem 4rem;
  -webkit-box-shadow: 0px 3px 15px 5px rgba(86, 12, 3, 0.38);
  box-shadow: 0px 3px 15px 5px rgba(86, 12, 3, 0.38);
`;
export const Logo = styled.section`
  img {
    width: 100px;
    height: 50px;
    object-fit: contain;
  }
`;
export const Menu = styled.section``;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
export const Li = styled.li`
  margin: 0 1rem;
  a {
    transition: color 0.2s;
    text-decoration: none;
    color: var(--text);
    &:hover {
      color: var(--red100);
      cursor: pointer;
    }
  }
`;

// mobile

export const HeaderContainerMobile = styled.header`
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid var(--red200);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  padding: 0 2rem;
`;
export const LogoMobile = styled.section`
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const MenuMobile = styled.section`
  &.toggle {
    display: none;
  }
`;
export const Button = styled.button`
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: none;
  color: var(--red100);
`;
export const UlMobile = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  list-style: none;
  margin: 1rem 0;
  gap: 20px;
`;
export const LiMobile = styled.li`
  margin: 0 1rem;
  a {
    transition: color 0.2s;
    text-decoration: none;
    color: var(--text);
    font-family: "Poppins", sans-serif;
    &:hover {
      color: var(--red100);
      cursor: pointer;
    }
  }
`;
