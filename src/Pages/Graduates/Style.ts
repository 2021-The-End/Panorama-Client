import styled from "@emotion/styled";
import { TopBack } from "../../Assets";

export const Content = styled.div`
  width: 100vw;
`;

export const Top = styled.div`
  width: 100%;
  height: 100px;
  padding: 120px 0;
  background-image: url(${TopBack});
`;

export const GraduateText = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  span {
    font-family: "Dela Gothic One", cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 58px;
    color: #ffffff;
  }
`;

export const Line = styled.div`
  width: 200px;
  height: 0px;
  outline: 7px solid #fad7ff;
  outline-offset: -6px;
`;
