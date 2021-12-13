import styled from "styled-components";

export const Title = styled.h2`
  font-size: 4rem;
  color: #ffffff;
  margin-bottom: 2rem;

  @media (max-width: 750px) {
    font-size: 3rem;
  }
`;
export const ContainerDetails = styled.div`
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5rem;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const SideOne = styled.div`
  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      margin-top: 1rem;

      p,
      svg {
        font-size: 1.3rem;
        color: white;
      }

      svg {
        margin-right: 12px;

        color: white;
      }
      @media (max-width: 750px) {
        p {
          font-size: 1.1rem;
          color: white;
        }
      }
    }
  }
`;
export const SideTwo = styled.div`
  img {
    width: 600px;
  }
  @media (max-width: 1200px) {
    img {
      width: 300px;
    }
  }

  @media (max-width: 750px) {
    img {
      margin-top: 2rem;
    }
  }
`;
