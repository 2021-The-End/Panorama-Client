import React, { useState } from "react";
import { Footer, Header, Auth } from "../../Components";
import * as S from "./Style";

interface Props {}

const Register = (props: Props) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [conpw, setConpw] = useState("");

  const handleLogin = () => {
    if (pw === conpw) {
      console.log("id,pw :>> ", id, pw);
    } else {
      console.log("비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <>
      <S.RegisterPage>
        <Header attribute="auth" />
        <Auth headerText="회원가입">
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            value={conpw}
            onChange={(e) => setConpw(e.target.value)}
          ></input>
          <div className="submit" onClick={handleLogin}>
            회원가입
          </div>
        </Auth>
      </S.RegisterPage>
      <Footer />
    </>
  );
};

export default Register;
