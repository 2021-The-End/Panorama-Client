import styled from "@emotion/styled";

export const AuthContainer = styled.div`
  position: absolute;
  width: 700px;
  height: 585px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
`;

export const Content = styled.div`
  width: 300px;
  margin: 0 auto;
  input {
    border: 1px solid #99999a;
    box-sizing: border-box;
    border-radius: 7px;
    padding: 10px 20px;
    margin-bottom: 24px;
    font-size: 24px;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  .submit {
    position: relative;
    height: 60px;
    width: 100%;
    border-radius: 10px;
    background: linear-gradient(
      to left,
      #bb5ef5 0%,
      #aac5f4 99.99%,
      rgba(67, 120, 202, 0) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 24px;
    user-select: none;
    cursor: pointer;
    .logintext,
    .hidetext {
      position: absolute;
      transition: 0.5s;
    }
    .logintext {
      opacity: 1;
    }
    .hidetext {
      opacity: 0;
    }
    &:hover {
      .logintext {
        opacity: 0;
        transition: 0.5s;
      }
      .hidetext {
        opacity: 1;
        transition: 0.5s;
      }
    }
  }
`;

export const Header = styled.div`
  width: 50%;
  text-align: center;
  font-size: 36px;
  color: #686a6b;
  margin: 0 auto;
  padding: 70px 0;
  font-weight: 300;
`;
