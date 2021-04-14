import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 15px;
`;

export const AdsContainer = styled.div`
  ${(props) => css`
    background: transparent url(${props.gif}) no-repeat center;
    background-size: contain;

    height: 180px;
  `}

  p {
    text-align: center;
    color: orangered;
  }
`;

export const ProfileContainer = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 24px;

  > img {
    width: 192px;
    height: 192px;

    border-radius: 16px;
  }
`;

export const ProfileInfo = styled.section`
  color: #fd951f;

  margin-left: 8px;

  ul {
    list-style: none;
    margin-top: 16px;

    li {
      img {
        height: 32px;
        width: 32px;

        margin-right: 8px;
      }

      a {
        display: flex;
        align-items: center;

        color: inherit;
        text-decoration: none;
      }

      & + li {
        margin-top: 16px;
      }
    }
  }
`;

export const ProjectsContainer = styled.section`
  margin-top: 24px;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 24px 16px;

    list-style: none;
  }
`;

export const ProjectItem = styled.li`
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 8px;

  width: 450px;

  padding: 16px;

  color: rgba(255, 255, 255, 0.8);

  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 16px;

    a {
      display: flex;
      align-items: center;

      text-decoration: none;
      color: inherit;

      img {
        height: 32px;
        width: 32px;

        margin-right: 8px;
      }

      &:hover {
        color: #04d361;
      }
    }
  }

  &:hover {
    color: #fd951f;

    border-color: #fd951f;
  }

  & + li {
    /* margin-top: 16px; */
  }
`;
