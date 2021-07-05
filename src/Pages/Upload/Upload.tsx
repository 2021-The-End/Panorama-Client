import React from "react";
import { Header, Footer } from "../../Components";
import * as S from "./Style";
interface Props {}

const Upload = (props: Props) => {
  return (
    <>
      <S.UploadPage>
        <Header attribute="auth" />
      </S.UploadPage>
      <Footer />
    </>
  );
};

export default Upload;
