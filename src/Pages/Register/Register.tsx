import React from "react";
import { Footer, Header, Auth } from "../../Components";
import * as S from "./Style";

interface Props {}

const Register = (props: Props) => {
  return (
    <>
      <S.RegisterPage>
        <Header attribute="auth" />
        <Auth headerText="회원가입">
          <input type="text" placeholder="ID"></input>
          <input type="password" placeholder="Password"></input>
          <input type="password" placeholder="Confirm Password"></input>
          <div className="submit">회원가입</div>
        </Auth>
      </S.RegisterPage>
      <Footer />
    </>
  );
};

export default Register;
