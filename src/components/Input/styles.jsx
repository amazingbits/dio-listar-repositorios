import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 0.8rem;

  label {
    display: block;
    color: #fff;
    font-weight: 300;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
    text-align: left;
  }

  input {
    width: 100%;
    outline: none;
    padding: 0.6rem;
    border-radius: 0.2rem;
    font-weight: 700;
    color: #484f58;
    font-size: 1.2rem;
    border: 4px solid transparent;
  }

  input:hover,
  input:focus {
    border: 4px solid #947fab;
    color: #947fab;
  }
`;
