import styled from "styled-components";

export const Image = styled.div`
  img {
    width: 100%;
    margin-top: 5rem;
  }
`;
export const Content = styled.div`
  padding: 8rem 0 5rem 0;
  background: rgb(255, 246, 246);
  background: linear-gradient(
    90deg,
    rgba(255, 246, 246, 1) 0%,
    rgba(255, 244, 241, 1) 100%
  );
`;
export const Section = styled.section`
  form {
    background: rgb(255, 154, 156);
    background: linear-gradient(
      90deg,
      rgba(255, 154, 156, 1) 1%,
      rgba(250, 208, 196, 1) 100%
    );
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    padding: 2rem;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    label {
      color: white;
      font-size: 1.2rem;
    }
    textarea:focus,
    input:focus {
      outline: none;
    }
    input {
      border: none;
      border-radius: 50px;
      padding: 1rem;
      margin-top: 0.4rem;
      font-family: "Poppins", sans-serif;
    }

    textarea {
      font-family: "Poppins", sans-serif;
      margin-top: 0.4rem;
      padding: 1rem;
      resize: none;
      border-radius: 20px;
      height: 100px;
      border: none;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.3rem;
`;
export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: none;
    color: var(--text);
    background: #f85846;
    color: white;
    font-family: "Poppins", sans-serif;
    border: 1px solid #db1d08;
    font-size: 1.2rem;
    svg {
      margin-right: 12px;
    }
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
