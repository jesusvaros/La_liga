import styled from "styled-components";

import { ReactComponent as Liga } from "../../assets/laliga.svg";

export const PageWrapp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.08);
  justify-content: space-between;
  align-items: center;
`;
export const LogOutWrapp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 24px;
  cursor: pointer;
  > svg {
    margin-right: 6px;
  }
  :hover {
    transform: scale(1.1);
  }
  transition: transform 200ms;
`;

export const LigaIcon = styled(Liga)`
  height: 40px;
  width: auto;
`;
