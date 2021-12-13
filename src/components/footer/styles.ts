import styled from "styled-components";

export const FooterContent = styled.footer`
  padding: 5rem 0 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 990px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Companie = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 150px;
    height: 150px;
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 2rem;
  svg {
    padding: 8px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: white;
    color: #f73019;
    cursor: pointer;
  }
`;
export const SocialMedias = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  @media (max-width: 990px) {
    margin-bottom: 2rem;
    justify-content: center;
    align-items: center;
  }
  a {
    width: 50px;
    height: 50px;
    color: #f73019;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
  }
`;
export const Adress = styled.ul`
  list-style: none;
  font-weight: bold;
  font-size: 1.2rem;
  li {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    font-weight: normal;

    svg {
      margin-right: 12px;
    }
  }
`;
export const About = styled.ul`
  list-style: none;
  font-weight: bold;
  font-size: 1.2rem;
  li {
    cursor: pointer;
    margin-top: 1rem;
    font-weight: normal;
  }

  @media (max-width: 990px) {
    margin-top: 2rem;
  }
`;
