import styled from "styled-components";

export const CardsWrapp = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding: 24px;
  flex-wrap: wrap;
  overflow: auto;
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
`;
export const Button = styled.div`
  background: #2b63e7;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: white;
  font-weight: 900;
  font-size: 14px;
`;
