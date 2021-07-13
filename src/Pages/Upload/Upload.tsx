import React from "react";
import { Header, Footer } from "../../Components";
import * as S from "./Style";

const Upload = () => {
  return (
    <>
      <S.UploadPage>
        <Header attribute="auth" />
        <S.Container>
          <S.ContentBox>
            <S.Top>
              <input
                type="text"
                name="작품명"
                id="projectName"
                placeholder="project name"
              />
              <input
                type="text"
                name="summary"
                id="summary"
                placeholder="Summary"
              />
            </S.Top>
            <S.TeamContainer>
              <input
                type="text"
                name="team name"
                id="teamName"
                placeholder="Team name"
              />
              <input
                type="text"
                name="team member"
                id="teamMember"
                placeholder="Team member"
              />
            </S.TeamContainer>
            <S.Description>
              <textarea
                name="description "
                id="Description "
                placeholder="Description "
              />
            </S.Description>
            <S.Bottom>
              <S.ImgUpload>
                <S.UploadBtn>
                  <label htmlFor="file">+</label>
                  <input type="file" id="file" multiple />
                </S.UploadBtn>
                <S.ImgView>{}</S.ImgView>
              </S.ImgUpload>
              <S.SubmitBtn>등록</S.SubmitBtn>
            </S.Bottom>
          </S.ContentBox>
        </S.Container>
      </S.UploadPage>
      <Footer />
    </>
  );
};

export default Upload;
