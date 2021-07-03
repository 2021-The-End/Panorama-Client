import React from "react";
import { PANORAMA } from "../../Assets";
import * as S from "./Style";

interface Props {}

const Footer = (props: Props) => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <PANORAMA />
        <S.FooterText>
          파노라마 전시회를 감상해주셔서 감사합니다.
          <br />
          사회에서도 빛나는 GSM출신 개발자가 되도록하겠습니다.
        </S.FooterText>
        <S.Copyright>Copyright © THE END</S.Copyright>
      </S.FooterContent>
    </S.FooterContainer>
  );
};

export default Footer;
