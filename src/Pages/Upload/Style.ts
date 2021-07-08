import styled from "@emotion/styled";
import { Background } from "../../Assets/index";

export const UploadPage = styled.div`
  width: 100vw;
  height: 800px;
  min-width: 935px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  position: absolute;
  width: 1000px;
  height: 585px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  display: flex;
  align-items: center;
  input {
    width: 700px;
    padding: 10px;
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

export const ContentBox = styled.div`
  margin: 0 auto;
  height: 500px;
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = styled.div`
  width: 724px;
`;

export const TeamContainer = styled.div`
  width: 724px;
  display: flex;
  justify-content: space-between;
  input {
    width: 330px;
    padding: 10px;
    font-size: 16px;
  }
`;

export const Description = styled.div`
  textarea {
    width: 702px;
    height: 200px;
    padding: 10px;
    font-size: 14px;
    resize: none;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 300;
  }
`;

export const ImgUpload = styled.div`
  display: flex;
  width: 724px;
  padding: 5px;
`;

export const UploadBtn = styled.div`
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }

  label,
  input[type="submit"] {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #555555;
    cursor: pointer;
    border: 3px dashed #555555;
    border-radius: 4px;
    font-size: 24px;
    background: #ffffff;
  }
`;

export const ImgView = styled.div`
  width: 350px;
  height: 106px;
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    margin-left: 10px;
  }
`;
