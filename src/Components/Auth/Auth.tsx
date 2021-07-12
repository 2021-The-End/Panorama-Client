import React from "react";
import * as S from "./Style";

interface Props {
  children: any;
  headerText: string;
}

const Auth = (props: Props) => {
  return (
    <S.AuthContainer>
      <S.Header>{props.headerText}</S.Header>
      <S.Content>{props.children}</S.Content>
    </S.AuthContainer>
  );
};

export default Auth;
