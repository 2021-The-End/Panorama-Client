import styled from "@emotion/styled";

type Props = {
  background: string;
};

export const HeaderContainer = styled.div<Props>`
  width: 100vw;
  background-color: ${(props) => (props.background ? "clear" : "#ffffff")};
  color: ${(props) => (props.background ? "#ffffff" : "#000000")};
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
    }
  }
`;
