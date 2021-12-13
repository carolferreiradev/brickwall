import styled from "styled-components";

export const Divider = styled.div`
  border-bottom: 3px solid white;
`;
export const ContainerDetails = styled.div`
  margin-top: 8rem;
  padding-bottom: 5rem;
`;

export const Header = styled.div``;
export const Title = styled.h1`
  font-size: 5rem;
  color: white;

  @media (max-width: 750px) {
    font-size: 3rem;
  }
`;
export const Subtitle = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 750px) {
    font-size: 1.3rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 1376px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 750px) {
   display: flex;
   flex-direction: column;
  }
`;
export const Card = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
  width: 250px;
  height: 400px;
  h3 {
    color: #560c03;
  }
  svg {
    color: #ff7a7c;
    font-size: 50px;
  }
`;
export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 2.5rem;
    color: #ff7a7c;
    padding: 1rem 0;
    span {
      font-size: 1.5rem;
    }
  }
  p {
    text-align: end;
    font-size: 0.8rem;
    color: #560c03;
  }
`;
export const Button = styled.button`
  margin-top: 2rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #db1d08;
  color: #ffffff;
  padding: 0.8rem 1rem;
  border-radius: 50px;
  font-size: 1rem;
  width: 100%;
  transition: filter 0.2s;
  svg {
    color: #ffffff;
    font-size: 20px;
  }
  &:hover {
    filter: brightness(0.8);
  }
`;
