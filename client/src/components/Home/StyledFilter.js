import styled from "styled-components";

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-around;
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin-top: 22px;
  padding: 10px;
  cursor: pointer;
  color: #6e6d7a;

  &:hover {
    color: #0d0c22;
  }
  &::first-letter {
    text-transform: uppercase;
  }
  /* justify-content: space-around; */
`;
