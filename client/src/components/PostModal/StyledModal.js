import styled from "styled-components";

export const AuthorContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
  img {
    border-radius: 50%;
    width: 60px !important;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    .title {
      color: #0d0c22;
      font-family: Roboto;
      font-weight: 700;
      font-size: 18px;
    }
    .author {
      color: #ea4c89;
      font-size: 16px;
      font-family: Roboto;
      font-weight: 700;
      span {
        color: #6e6d7a;
        font-size: 14px;
        font-family: Roboto;
        font-weight: normal;
      }
    }
  }
`;

export const Close = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  outline: none;
  width: 32px;
  color: #000;
  height: 32px;
  /* right: calc(-100% - 264px); */
  top: 16px;
  cursor: pointer;
  display: flex;
  position: relative;
  display: inline-block;
  ::before {
    content: " ";
    height: 24px;
    width: 3px;
    position: absolute;
    color: #000;
  }
`;