import React from "react";
import { Footer, Header, Auth } from "../../Components";
import * as S from "./Style";

interface Props {}

const Login = (props: Props) => {
  return (
    <>
      <S.LoginPage>
        <Header attribute="auth" />
        <Auth headerText="로그인">
          <input type="text" placeholder="ID" />
          <input type="password" placeholder="Password" />
          <div className="submit">
            <span className="logintext">로그인</span>
            <span className="hidetext">Shot take a Panorama!</span>
          </div>
        </Auth>
      </S.LoginPage>
      <Footer />
    </>
  );
};

export default Login;
