import React from "react";
import { PANORAMA } from "../../Assets";
import * as S from "./Style";

const header = () => {
  return (
    <S.HeaderContainer>
      <ul>
        <li>전시소개</li>
        <li>작품소개</li>
        <PANORAMA />
        <li>졸업생소개</li>
        <li>방명록</li>
      </ul>
    </S.HeaderContainer>
  );
};

export default header;
