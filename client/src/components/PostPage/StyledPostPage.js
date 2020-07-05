import styled from "styled-components";

export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 23px;
`;

export const PostPageContainer = styled.div`
  width: 800px;
  height: 100%;
  margin: auto;
  margin-top: 34px;

  .author-image {
    width: 50px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
  align-items: center;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: ${(props) => (props.width ? props.width : "50px")};
  height: ${(props) => (props.height ? props.height : "50px")};
`;

export const Title = styled.p`
  color: #0d0c22;
  font-family: Roboto;
  font-weight: 700;
  font-size: 18px;
`;

export const Author = styled.span`
  color: #ea4c89;
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 700;
  span {
    color: #6e6d7a;
    font-size: 14px;
    font-family: Roboto;
    font-weight: normal;
  }
`;

export const Description = styled.div`
  margin-top: 10px;
  font-family: "Roboto";
  line-height: 24px;
  overflow: hidden;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f3f3f4;
`;

export const Responses = styled.h2`
  border-bottom: none;
  line-height: 1.3;
  margin: 0 0 15px;
  padding: 0;
  color: #0d0c22;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

export const Input = styled.textarea`
  outline: none;
  background: transparent;
  border: 1px solid #dddd;
  width: 90%;
  resize: none;
  &:focus {
    border: 1px solid #6c63ff;
  }
  transition: all 0.2s ease-in-out;
`;

export const Btn = styled.button`
  border: none;
  outline: none;
  background: transparent;
  padding: 5px;
  &:hover {
    color: #6c63ff;
  }

  transition: all 0.2s ease-in-out;
`;

export const Form = styled.form`
  width: 90%;
  margin-bottom: 8px;
`;

export const NoComment = styled.span`
  font-size: 16px;
  color: #b0afaa;
  align-content: center;
`;
