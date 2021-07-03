import React from "react";
import { Footer, Header } from "../../Components";
import * as S from "./Style";

interface Props {}

const Login = (props: Props) => {
  return (
    <>
      <S.LoginPage>
        <Header attribute="clear" />
      </S.LoginPage>
      <Footer />
    </>
  );
};

export default Login;
