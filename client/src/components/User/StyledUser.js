import styled from "styled-components";

export const MasterHead = styled.div`
  margin: 40px 0;
  height: 500px;

  .mt-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
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

  .img-container .masterhead-block-container .block {
  }
`;
