import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: auto;
`;

export const Thumbnail = styled.label`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  height: 460px;
  width: 660px;
  display: flex;
  justify-content: center;
  align-items: center;

  .has-thumbnail {
    border: 0;
  }

  .has-thumbnail img {
    display: none;
  }
`;

export const ThumbnailInput = styled.input`
  /* display: none; */
`;

export const Form = styled.form`
  display: flex;
  margin: auto;
`;

export const TextFields = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  padding: 5px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
