import React from "react";
import { PANORAMA } from "../../Assets";
import * as S from "./Style";
import { Link } from "react-scroll";

interface Props {
  background: string;
}

const header = (props: Props) => {
  const { background } = props;
  return (
    <S.HeaderContainer background={background}>
      <S.HeaderContent>
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
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default header;
