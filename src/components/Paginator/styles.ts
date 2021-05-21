import styled, { css } from "styled-components";
import { ChevronLeft, ChevronRight } from "react-feather";

const disabledMixin = css`
  cursor: not-allowed;
  opacity: 0.4;
`;

export const PaginatorWrapp = styled.div`
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 2px 0, rgba(0, 0, 0, 0.05) 0 0 4px 0;
  padding: 24px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #2b63e7;
  }
`;

export const NumberButton = styled.span<{ selected?: boolean }>`
  color: #2b63e7;
  font-weight: 800;
  font-size: 18px;
  margin: 16px;
  cursor: pointer;

  ${({ selected }) => selected && disabledMixin};
`;

export const Left = styled(ChevronLeft)<{ disabled?: boolean }>`
  cursor: pointer;
  ${({ disabled }) => disabled && disabledMixin};
`;
export const Right = styled(ChevronRight)<{ disabled?: boolean }>`
  cursor: pointer;
  ${({ disabled }) => disabled && disabledMixin};
`;
