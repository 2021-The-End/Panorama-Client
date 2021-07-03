import styled from "@emotion/styled";

type Props = {
  imgpath: string;
};

export const ProjectBox = styled.div`
  height: 318px;
  position: relative;
`;

export const ProjectCover = styled.div`
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 10px;
  height: 298px;
  width: 410px;
  div.title {
    transform-origin: top left;
    position: absolute;
    top: 10px;
    left: 50px;
    transform: rotate(90deg);
  }
  .title {
    font-size: 36px;
    text-align: left;
  }
  .creator {
    position: absolute;
    top: 260px;
    left: 200px;
    width: 190px;
    text-align: right;
  }
  .grade {
    position: absolute;
    top: 18px;
    left: 352px;
    font-size: 24px;
    font-weight: bold;
  }
  span {
    opacity: 0;
    transition: 0.5s all;
    color: white;
  }
  transition: 0.5s all;
  &:hover {
    transition: 0.5s all;
    background: rgba(124, 124, 124, 0.4);
    span {
      opacity: 1;
      transition: 0.5s all;
    }
  }
`;

export const ProjectPicture = styled.div<Props>`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  height: 318px;
  width: 100%;
  background-image: url("https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6f697750-a68a-434f-beb5-3dad6e784de1%2FScene.png?table=block&id=d8b4a066-3e82-4ec1-8374-bf7cee19035c&spaceId=b6138647-10b4-4d93-95fe-4b7f4b8f6b92&width=3070&userId=2a28dfdf-72dc-42c9-9cf3-10e589639aee&cache=v2");
  box-shadow: 0 0 0 10px #ffffff inset;
`;
