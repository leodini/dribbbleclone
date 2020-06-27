import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  width: 93%;
  margin: auto;
  margin-top: 22px;
  flex-wrap: wrap;

  .hvrbox {
    position: relative;
    overflow: hidden;
    max-width: 100%;
    height: auto;
  }

  .hvrbox-layer_top {
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0;
    bottom: 0;
    color: #fff;
    min-height: 9rem;
    display: flex;
    align-items: flex-end;
    padding: 0px 1.5rem 1.5rem;
    background: -webkit-gradient(
      linear,
      0% 0%,
      0% 100%,
      color-stop(-0.3, transparent),
      to(rgb(20, 20, 20))
    );
    background: -moz-linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0),
      rgba(20, 20, 20, 1)
    );

    background: -o-linear-gradient(
      linear,
      0% 0%,
      0% 100%,
      color-stop(-0.3, transparent),
      to(rgb(20, 20, 20))
    );

    background: linear-gradient(
      linear,
      0% 0%,
      0% 100%,
      color-stop(-0.3, transparent),
      to(rgb(20, 20, 20))
    );

    -moz-transition: all 0.4s ease-in-out 0s;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -ms-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
  }

  .hvrbox:hover .hvrbox-layer_top,
  .hvrbox.active .hvrbox-layer_top {
    opacity: 1;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
  margin-top: 22px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 400px;
  border-radius: 8px;
  margin-bottom: 3px;
`;

export const Author = styled.p`
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  color: #404050;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    align-items: center;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 50%;
  }
`;

export const Counter = styled.span`
  font-family: Roboto;
  color: #a1a1aa;
  font-size: 14px;
  padding: 3px;
  margin-right: 6px;
`;
