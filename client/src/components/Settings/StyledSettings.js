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

export const Tabs = styled.div``;

export const Edit = styled.div``;
