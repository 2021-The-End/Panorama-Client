import React from "react";
import { Header, Footer } from "../../Components";
import * as S from "./Style";

interface Props {}

const Graduates = (props: Props) => {
  return (
    <>
      <Header attribute={"unclear"} />
      <S.Content>
        <S.Top>
          <S.GraduateText>
            <span>GRADUATE</span>
            <S.Line />
          </S.GraduateText>
        </S.Top>
      </S.Content>
      <Footer />
    </>
  );
};

export default Graduates;
