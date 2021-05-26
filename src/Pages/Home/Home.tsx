import React from "react";
import { Header } from "../../Components";
import {
  THE_END,
  DisplayDate,
  DisplayYear,
  DisplayDate2,
  VectorGradation,
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
      </S.SecondPage>
    </>
  );
};

export default Home;
