import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 15px;

  ${props => css`
    background: #000 url(${props.gif}) no-repeat center;
    background-size: contain;
  `}

  h1 {
    text-align: center;
    color: orangered;
  }
`;
