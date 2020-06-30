import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  margin: auto;
`;

export const Thumbnail = styled.label`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;

  .has-thumbanil {
    border: 0;
  }

  .has-thumbail img {
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
