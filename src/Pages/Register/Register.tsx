import React from "react";
import { Footer, Header } from "../../Components";
import * as S from "./Style";

interface Props {}

const Register = (props: Props) => {
  return (
    <>
      <S.RegisterPage>
        <Header attribute="clear" />
      </S.RegisterPage>
      <Footer />
    </>
  );
};

export default Register;
