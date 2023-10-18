import styled from "styled-components";

export const ButtonComponent = styled.button`
  width: 100%;
  background: #947fab;
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.8rem;
  border-radius: 0.2rem;
  border: none;
  margin-top: 0.6rem;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;
