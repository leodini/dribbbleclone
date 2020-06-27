import styled from "styled-components";

export const UserAvatar = styled.img`
  width: ${(props) => (props.width ? props.width : "50px")};
  height: ${(props) => (props.height ? props.height : "50px")};
  border-radius: 50%;
`;
