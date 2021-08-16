import React, { useState } from "react";
import { Footer, Header, Auth } from "../../Components";
import axios from "axios";
import * as S from "./Style";
interface Props {}

const Login = (props: Props) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const URL = "http://34.64.83.135:8080/api/v1/user/signin";
  const handleLogin = async () => {
    const test = await axios
      .post(
        URL,
        {
          username: id,
          password: pw,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("response :>> ", response);
        return response;
      });
    console.log("test :>> ", test);
  };
  return (
    <>
      <S.LoginPage>
        <Header attribute="auth" />
        <Auth headerText="로그인">
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <div className="submit" onClick={handleLogin}>
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
