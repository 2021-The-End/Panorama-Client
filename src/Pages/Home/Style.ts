import styled from "@emotion/styled";
import {
  Background,
  Panorama2,
  ProjectPageBackground,
} from "../../Assets/index";

export const FirstPage = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 935px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DisplayYearText = styled.div`
  img {
    width: 500px;
    height: 120px;
    @media screen and (max-width: 1600px) {
      width: 350px;
      height: 84px;
    }
  }
`;

export const TheEndText = styled.div`
  img {
    width: 1250px;
    height: 180px;
    @media screen and (max-width: 1600px) {
      width: 904px;
      height: 150px;
    }
  }
`;

export const UnderlinedTextBox = styled.div`
  position: absolute;
  left: 131px;
  top: 190px;
  font-weight: normal;
  font-size: 30px;
  line-height: 42px;
  color: white;
`;

export const BigCoverText = styled.div`
  position: absolute;
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 736px;
  top: 298px;
  font-style: normal;
  font-weight: normal;
  animation-name: big;
  animation-duration: 2s;
  animation-duration: leaner;
  @media screen and (max-width: 1600px) {
    left: 680px;
    top: 298px;
    height: 280px;
    animation-name: big2;
  }
  @-webkit-keyframes big2 {
    0% {
      top: 398px;
      opacity: 0;
    }
    100% {
      top: 298px;
      opacity: 1;
    }
  }
  @-webkit-keyframes big {
    0% {
      top: 398px;
      opacity: 0;
    }
    100% {
      top: 298px;
      opacity: 1;
    }
  }
`;

export const SmallCoverText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 1462px;
  top: 772px;
  font-style: normal;
  font-weight: normal;
  animation-name: small;
  animation-duration: 4s;
  animation-duration: leaner;
  @media screen and (max-width: 1600px) {
    left: 1062px;
    top: 632px;
    animation-name: small2;
  }
  @-webkit-keyframes small2 {
    0% {
      top: 722px;
      opacity: 0;
    }
    100% {
      top: 632px;
      opacity: 1;
    }
  }
  @-webkit-keyframes small {
    0% {
      top: 842px;
      opacity: 0;
    }
    100% {
      top: 772px;
      opacity: 1;
    }
  }
`;

export const SecondPage = styled.div`
  width: 100vw;
  min-width: 1920px;
  height: 100vh;
  min-width: 935px;
`;

export const SecondPageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const SecondDate = styled.div`
  position: absolute;
  left: 156px;
  top: 123px;
  @media screen and (max-width: 1600px) {
    left: 111px;
    top: 100px;
  }
`;

export const BigLogo = styled.div`
  position: absolute;
  width: 710px;
  height: 150px;
  left: 77px;
  top: 194px;
  background-image: url(${Panorama2});
  background-repeat: no-repeat;
  background-size: cover;
  animation-name: side;
  animation-duration: 2s;
  @-webkit-keyframes side {
    0% {
      width: 0px;
    }
    100% {
      width: 710px;
    }
  }
  @media screen and (max-width: 1600px) {
    top: 150px;
  }
`;

export const VactorPlace = styled.div`
  position: absolute;
  width: 1069px;
  height: 1080px;
  left: 994px;
  top: 0px;
  @media screen and (max-width: 1600px) {
    display: none;
  }
`;

export const Panoramainfo = styled.div`
  position: absolute;
  width: 861px;
  height: 42px;
  left: 196px;
  top: 454px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 42px;
  color: #b879c0;
  @media screen and (max-width: 1600px) {
    top: 304px;
    font-size: 20px;
  }
`;

export const GsmPlace = styled.div`
  position: absolute;
  left: 156px;
  top: 676px;
  @media screen and (max-width: 1600px) {
    left: 156px;
    top: 576px;
  }
`;

export const PanoramainfoText = styled.span`
  position: absolute;
  left: 154px;
  top: 754px;
  font-size: 20px;
  line-height: 28px;
  color: #ff93b2;
  @media screen and (max-width: 1600px) {
    left: 900px;
    top: 510px;
    font-size: 18px;
  }
`;

export const Ellipse = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 0 20px #fff, -20px 0 80px #f0f, 20px 0 80px #0ff,
    inset 0 0 50px #fff, inset 50px 0 80px #f0f, inset -50px 0 80px #0ff,
    inset 50px 0 300px #f0f, inset -50px 0 300px #0ff;
  animation: pulsate 6s linear infinite;
  @keyframes pulsate {
    50% {
      box-shadow: 0 0 20px #fff, 20px 0 80px #f0f, -20px 0 80px #0ff,
        inset 0 0 50px #fff, inset -50px 0 80px #f0f, inset 50px 0 80px #0ff,
        inset -50px 0 300px #f0f, inset 50px 0 300px #0ff;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    .text {
      transition: 0.5s all;
      opacity: 1;
      text-align: center;
      line-height: 42px;
      font-size: 24px;
      color: #ffffff;
      font-family: "PT Serif";
    }
  }
  .text {
    transition: 0.5s all;
    color: #ffffff;
    opacity: 0;
    text-align: center;
    line-height: 42px;
    font-size: 24px;
    color: #ffffff;
    font-family: "PT Serif";
  }
`;

export const EllipsePlace = styled.div`
  position: absolute;
  left: 1100px;
  top: 330px;
  @media screen and (max-width: 1600px) {
    position: absolute;
    left: 1000px;
    top: 130px;
  }
`;

export const ThirdPage = styled.div`
  width: 100vw;
  min-width: 1920px;
  height: 3459px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${ProjectPageBackground});
`;
