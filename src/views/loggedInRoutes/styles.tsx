import styled from "styled-components";

import { ReactComponent as Liga } from "../../assets/laliga.svg";

export const PageWrapp = styled.div`
  display: flex;
  border: 1px solid blue;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  border: 1px solid red;
  justify-content: flex-start;
`;

export const LigaIcon = styled(Liga)`
  height: 40px;
  width: auto;
`;
