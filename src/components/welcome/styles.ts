import styled from "styled-components";

export const ContainerWelcome = styled.div`
  overflow: hidden;
  height: 100vh;
`;
export const Title = styled.h1`
  font-size: 7rem;
  color: #ffffff;
  margin-top: 2rem;
  @media (max-width: 1256px) {
    font-size: 5rem;
  }
  @media (max-width: 750px) {
    text-align: center;
  }
`;
export const ImageTitle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-right: 50px;
    height: 350px;
    object-fit: contain;
  }
  @media (max-width: 1256px) {
    img {
      height: 300px;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    img {
      height: 150px;
    }
  }
`;
export const H1 = styled.h1`
  font-size: 7rem;
  color: #ffffff;
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: #fa8072;
  @media (max-width: 1256px) {
    font-size: 5rem;
  }
  @media (max-width: 750px) {
    text-align: center;
  }
`;
export const Paragraph = styled.p`
  font-size: 1.7rem;
  margin: 1rem 0;
  color: #560c03;

  @media (max-width: 1256px) {
    font-size: 1.3rem;
  }
`;
