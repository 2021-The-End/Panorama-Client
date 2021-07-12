import styled from "@emotion/styled";

type Props = {
  attribute: string;
};

export const HeaderContainer = styled.div<Props>`
  width: 100vw;
  background-color: ${(props) =>
    props.attribute === "clear" || "auth" ? "clear" : "#ffffff"};
  li,
  a {
    color: ${(props) =>
      props.attribute === "unclear" && "auth" ? "#F0D7F3" : "#ffffff"};
  }
`;

export const HeaderContent = styled.div`
  width: 800px;
  height: 49px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    align-items: flex-end;
    li {
      font-weight: normal;
      padding: 0 35px;
      cursor: pointer;
    }
  }
`;
