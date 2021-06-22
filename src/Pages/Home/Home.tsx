import React from "react";
import { Footer, Header } from "../../Components";
import { THE_END, GSMExhibition } from "../../Assets/index";
import * as S from "./Style";
import { Element } from "react-scroll";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <S.FirstPage>
        <Header />
        <S.UnderlinedTextBox>
          <br /> 광주소프트웨어
          <br /> 마이스터고등학교
          <br /> 전시회
        </S.UnderlinedTextBox>
        <S.BigCoverText>
          <S.TheEndText>
            <img src={THE_END} alt="The End"></img>
          </S.TheEndText>
        </S.BigCoverText>
      </S.FirstPage>
      <Element name="panorama_info">
        <S.SecondPage>
          <S.SecondPageContainer>
            <S.BigLogo />
            <S.Panoramainfo>
              {`{ PANORAMA : 전경, 풍경등을 연속적으로 보여주는 장치, 연속적인 광경 }`}
            </S.Panoramainfo>
            <S.GsmPlace>
              <GSMExhibition />
            </S.GsmPlace>
            <S.PanoramainfoText>
              광주소프트웨어마이스터고등학교 학생들이 만든 프로젝트를
              <br />
              남기기 위한 온라인 작품 전시회입니다. ‘PANORAMA’라는 이름의 전
              <br />
              시회로 학생들의 추억을 보여주기 위한 의미를 담고 있습니다.
              <br />
              관람을 하시고 한 줄 소감이나 다양한 의견등을 방명록에 남겨주세요.
            </S.PanoramainfoText>
            <S.EllipsePlace>
              <S.Ellipse>
                <div className="text">
                  Shoot
                  <br />
                  Take
                  <br />
                  a
                  <br />
                  Panorama
                </div>
              </S.Ellipse>
            </S.EllipsePlace>
          </S.SecondPageContainer>
        </S.SecondPage>
      </Element>
      <Element name="introduction_project">
        <S.ThirdPage>
          <S.ProjectText>
            <span>PROJECT</span>
            <S.Line />
          </S.ProjectText>
        </S.ThirdPage>
      </Element>
      <Footer />
    </>
  );
};

export default Home;
