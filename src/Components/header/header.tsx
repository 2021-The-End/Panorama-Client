import React from "react";
import { PANORAMA } from "../../Assets";
import * as S from "./Style";
import { Link } from "react-scroll";

const header = () => {
  return (
    <S.HeaderContainer>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="panorama_info"
            spy={true}
            smooth={true}
            duration={600}
          >
            전시소개
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="introduction_project"
            spy={true}
            smooth={true}
            duration={600}
          >
            작품소개
          </Link>
        </li>
        <PANORAMA />
        <li>졸업생소개</li>
        <li>방명록</li>
      </ul>
    </S.HeaderContainer>
  );
};

export default header;
