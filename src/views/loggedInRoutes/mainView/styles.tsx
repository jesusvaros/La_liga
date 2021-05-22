import styled from "styled-components";

export const CardsWrapp = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding: 24px;
  flex-wrap: wrap;
  overflow: auto;
  position: relative;
`;

export const LoaderWrapp = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  * + * {
    margin-top: 24px;
  }
  svg {
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    width: 50px;
    height: 50px;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const TextError = styled.span`
  font-size: 14px;
  margin-bottom: 24px;
`;
export const Button = styled.div<{
  background?: string;
  color?: string;
  max_width?: number;
}>`
  background: #2b63e7;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: white;
  font-weight: 900;
  font-size: 14px;
  cursor: pointer;

  ${({ background }) => background && `background:${background}`};
  ${({ color }) => color && `color:${color}`};
  ${({ max_width }) => max_width && `max-width:${max_width}px`};
  svg {
    margin-right: 12px;
  }
  :hover {
    opacity: 0.9;
  }
`;

export const AbsoluteWrapp = styled.div`
  position: absolute;
  background-color: white;
  padding: 44px;
  border-radius: 14px;
  top: calc(50% + 165px);
  left: calc(50% - 95px);
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 2px 0, rgba(0, 0, 0, 0.05) 0 0 4px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
