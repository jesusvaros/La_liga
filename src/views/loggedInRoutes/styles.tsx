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
  justify-content: flex-start;
`;

export const LigaIcon = styled(Liga)`
  height: 40px;
  width: auto;
`;
