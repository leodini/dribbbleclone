import styled from "styled-components";

export const MasterHead = styled.div`
  margin: 40px 0;
  height: 500px;

  .mt-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  button {
    border-radius: 6px;
    padding: 12px;
    background-color: #f3f3f4;
    color: #0d0c22;
    font-weight: bold;
    cursor: pointer;
    margin-top: 6px;
    width: 90px;
  }

  button:hover {
    background-color: #ccc;
  }

  .mt-container .user-mt {
    display: flex;
    flex-direction: column;
  }

  .user-mt h1 {
    color: #0d0c22;
    margin-bottom: 12px;
    margin-top: 22px;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
  }

  .user-mt h2 {
    color: #0d0c22;

    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
  }

  .mt-container .img-container img {
    height: 400px;
  }

  .img-container .masterhead-block-container {
    width: 30%;
    height: 45%;
    position: absolute;
    right: 120px;
    top: -40px;
    z-index: -1;
    background: #ea4c89;
  }
`;

export const UserStats = styled.div`
  width: 93%;
  margin: auto;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  .label {
    font-weight: bold;
    color: #0d0c22;
    margin: 12px 14px;
  }

  .label .count {
    color: #adadb5;
    font-weight: normal;
    margin-right: 4px;
  }
`;
