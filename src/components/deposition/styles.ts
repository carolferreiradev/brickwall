import styled from "styled-components";

export const ContainerDeposition = styled.div`
  background: rgb(255, 246, 246);
  background: linear-gradient(
    90deg,
    rgba(255, 246, 246, 1) 0%,
    rgba(255, 244, 241, 1) 100%
  );
  overflow: hidden;
  margin-top: 4rem;
  padding: 4rem 0;
  border-radius: 8px;
`;
export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;
export const ImageTitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  img {
    width: 500px;
  }

  .person {
    font-size: 1.3rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
  }
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;

    img {
      width: 300px;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  text-align: justify;
`;