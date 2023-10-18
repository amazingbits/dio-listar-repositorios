import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.4rem;
  padding: 0.8rem;

  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 1rem;
  }

  p {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    font-weight: 700;
    color: yellow;
    text-decoration: none;
    margin-top: 1rem;
    font-size: 0.8rem;
  }
`;
