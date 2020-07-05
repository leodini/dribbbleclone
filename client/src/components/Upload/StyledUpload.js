import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: auto;
  display: flex;
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
    display: none;
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
  margin-left: 18px;
  padding: 5px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #0d0c22;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  background: #f3f3f4;
  padding: 5px;
  border-radius: 6px;
  margin-bottom: 16px;
  &:hover {
    background: #fff;
    border: 2px solid #fdedf3;
  }

  &:focus {
    background: #fff;
    border: 2px solid #fdedf3;
  }
`;

export const TextArea = styled.textarea`
  resize: vertical;
  background: #f3f3f4;
  border-radius: 6px;
  height: 95px;
  width: 100%;
  &:hover {
    background: #fff;
    border: 2px solid #fdedf3;
  }

  &:focus {
    background: #fff;
    border: 2px solid #fdedf3;
  }

  ::placeholder {
    font-size: 12px;
    margin: 4px;
  }
`;

export const Button = styled.button`
  margin-top: 12px;
  border-radius: 6px;
  color: #fff;
  background-color: #ea4c89;
  padding: 8px;
`;

export const Header = styled.div`
  height: 70px;
  width: 100%;
  background-color: #0d0c22;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-family: Vibur, sans-serif;
    margin-left: 12px;
    color: #fff;
  }

  p {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
  }

  span {
    color: #fff;
    margin-right: 18px;
  }
`;
