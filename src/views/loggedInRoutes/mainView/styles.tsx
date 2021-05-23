import styled from "styled-components";

export const CardsWrapp = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding: 24px;
  flex-wrap: wrap;
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

// Custom button that can accept different properties
export const Button = styled.div<{
  background?: string;
  color?: string;
  max_width?: number;
  disabled?: boolean;
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
  ${({ disabled }) => disabled && `opacity:0.2;`};
  svg {
    margin-right: 12px;
  }
  :hover {
    ${({ disabled }) => !disabled && ` opacity: 0.9`};
  }
`;

export const BlurScreen = styled.div`
  position: fixed;
  background-color: black;
  opacity: 0.1;
  width: 100%;
  height: 100%;
`;
