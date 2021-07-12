import React from "react";
import { PANORAMA } from "../../Assets";
import * as S from "./Style";
import * as Scroll from "react-scroll";
import { Link } from "react-router-dom";

interface Props {
  attribute: string;
}

const Header = (props: Props) => {
  const { attribute } = props;
  return (
    <S.HeaderContainer attribute={attribute}>
      <S.HeaderContent>
        <ul>
          {attribute === "clear" ? (
            <>
              <li>
                <Scroll.Link
                  activeClass="active"
                  to="panorama_info"
                  spy={true}
                  smooth={true}
                  duration={600}
                >
                  전시소개
                </Scroll.Link>
              </li>
              <li>
                <Scroll.Link
                  activeClass="active"
                  to="introduction_project"
                  spy={true}
                  smooth={true}
                  duration={600}
                >
                  작품소개
                </Scroll.Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">전시소개</Link>
              </li>
              <li>
                <Link to="/">작품소개</Link>
              </li>
            </>
          )}

          <PANORAMA />
          <li>
            <Link to="/Graduates">졸업생소개</Link>
          </li>
          <li>방명록</li>
        </ul>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
