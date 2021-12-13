import styled from "styled-components";

export const ContainerAbout = styled.div`
  background: rgb(255, 246, 246);
  background: linear-gradient(
    90deg,
    rgba(255, 246, 246, 1) 0%,
    rgba(255, 244, 241, 1) 100%
  );
  overflow: hidden;
  margin-top: 4rem;
  padding: 2rem;
  border-radius: 8px;

`;
export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;
export const ImageTitle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media(max-width: 750px) {
   display: flex;
   flex-direction: column;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;
