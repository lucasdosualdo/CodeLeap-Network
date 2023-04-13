import styled from "styled-components";

export const SignUpBox = styled.div`
  width: 500px;
  height: 205px;
  background-color: var(--white-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  border: 1px solid #cccccc;
  padding: 24px;
  input {
    width: 100%;
    border: 1px solid #777777;
    border-radius: 8px;
    :focus {
      outline: none;
    }
    padding: 8px;
    height: 30px;
    margin-top: 8px;
  }

  h1 {
    margin-bottom: 24px;
  }
  @media (max-width: 820px) {
    width: 80vw;
    height: 20vh;
  }
  @media (max-width: 480px) {
    width: 100vw;
  }
`;
