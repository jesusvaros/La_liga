import styled from "styled-components";
import { GoogleLogin } from "react-google-login";

import { ReactComponent as Liga } from "../../assets/laliga.svg";

export const LoginWrapp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #eff5ff 18.99%,
    rgba(239, 245, 255, 0) 100%
  ); ;
`;

export const LoginCard = styled.div`
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.08);
  padding: 48px 24px;
  border-radius: 12px;
  background-color: white;
  min-width: 340px;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > form {
    width: 100%;
    margin: 0 34px;
    > :last-child {
      margin-top: 44px;
    }
  }

  @media screen and (max-width: 825px) {
    height: 60%;
    width: 60%;
  }
  @media screen and (max-width: 565px) {
    height: 100%;
    width: 90%;
  }
`;

export const LigaIcon = styled(Liga)`
  height: 80px;
  width: auto;
`;

export const GoogleLoginButton = styled(GoogleLogin)`
  margin-top: 24px;
`;
