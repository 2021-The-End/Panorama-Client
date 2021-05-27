import React from "react";
import { Footer, Header } from "../../Components";
import {
  THE_END,
  DisplayDate,
  DisplayYear,
  DisplayDate2,
  VectorGradation,
  GSMGraduationExhibition,
} from "../../Assets/index";
import * as S from "./Style";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <S.FirstPage>
        <Header />
        <S.UnderlinedTextBox>
          2021
          <br /> 광주소프트웨어
          <br /> 마이스터고등학교
          <br /> 졸업전시회
        </S.UnderlinedTextBox>
        <S.BigCoverText>
          <S.DisplayYearText>
            <img src={DisplayYear} alt="2021" />
          </S.DisplayYearText>
          <S.TheEndText>
            <img src={THE_END} alt="The End"></img>
          </S.TheEndText>
        </S.BigCoverText>
        <S.SmallCoverText>
          <DisplayDate />
        </S.SmallCoverText>
      </S.FirstPage>
      <S.SecondPage>
        <S.SecondPageContainer>
          <S.SecondDate>
            <DisplayDate2 />
          </S.SecondDate>
          <S.BigLogo />
          <S.Panoramainfo>
            {`{ PANORAMA : 전경, 풍경등을 연속적으로 보여주는 장치, 연속적인 광경 }`}
          </S.Panoramainfo>
          <S.VactorPlace>
            <VectorGradation />
          </S.VactorPlace>
          <S.GsmPlace>
            <GSMGraduationExhibition />
          </S.GsmPlace>
          <S.PanoramainfoText>
            광주소프트웨어마이스터고등학교 3기 졸업생 학생들의 마지막을 추억하고
            <br />
            남기기 위한 온라인 졸업 작품 전시회입니다. ‘PANORAMA’라는 이름의 전
            <br />
            시회로 졸업을 앞 둔 학생들의 추억을 보여주기 위한 의미를 담고
            있습니다.
            <br />
            관람을 하시고 한줄소감이나 다양한 의견등을 방명록에 남겨주세요.
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
      <S.ThirdPage></S.ThirdPage>
      <Footer />
    </>
  );
};

export default Home;
