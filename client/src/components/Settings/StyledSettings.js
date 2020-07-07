import styled from "styled-components";

export const SettingsPage = styled.div`
  height: 100%;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  padding: 32px 0;

  .slat-header {
    display: flex;
    flex-direction: column;
    margin-left: 22px;
  }

  .slat-header h1 {
    color: #0d0c22;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
  }

  .slat-header h1 span {
    margin: 0 2px;
    font-weight: normal;
    text-shadow: none;
    color: #dbdbde;
  }

  .slat-header h2 {
    line-height: 1.3;
    color: #787783;
    font-size: 14px;
    font-weight: normal;
  }
`;

export const SettingsContainer = styled.div``;

export const Separator = styled.div`
  background: #e7e7e9;
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: auto;
  height: 1px;
  margin-bottom: 22px;
`;

export const Edit = styled.form`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 12px;
  }

  button {
    border-radius: 6px;
    color: #fff;
    background-color: #ea4c89;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 8px;
    width: 120px;
    font-weight: bold;
    margin: 22px 0;
  }
`;
