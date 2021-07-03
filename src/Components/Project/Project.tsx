import React from "react";
import * as S from "./Style";

interface Props {
  postid: number;
  title: string;
  creator: string;
  grade: number;
  imgpaths: string;
}

const Project = (props: Props) => {
  return (
    <S.ProjectBox>
      <S.ProjectCover>
        <div className="title">
          <span>{props.title}</span>
        </div>
        <div className="grade">
          <span>{props.grade}기</span>
        </div>
        <div className="creator">
          <span>{props.creator}</span>
        </div>
      </S.ProjectCover>
      <S.ProjectPicture imgpath={props.imgpaths}></S.ProjectPicture>
    </S.ProjectBox>
  );
};

export default Project;
