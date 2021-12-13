import styled from "styled-components";

export const ContainerInitiatives = styled.section`
  margin-top: 8rem;
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Content = styled.div`
  background: rgb(255, 246, 246);
  background: linear-gradient(
    90deg,
    rgba(255, 246, 246, 1) 0%,
    rgba(255, 244, 241, 1) 100%
  );
  border-radius: 8px;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  height: 400px;
  align-items: center;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ImageTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 150px;
  border-radius: 1rem;
  margin-bottom: 1rem;
  img {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 750px) {
    img {
      width: 100px;
      height: 100px;
    }
  }
`;
export const Title = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 3rem;
  @media (max-width: 750px) {
    font-size: 2rem;
  }
`;
export const Paragraph = styled.p`
  font-size: 1.2rem;

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;
