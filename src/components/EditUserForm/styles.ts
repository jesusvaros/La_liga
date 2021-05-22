import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FormContainer = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  max-width: 880px;
  width: 100%;
  > :last-child {
    margin-top: 24px;
    align-self: flex-end;
  }
`;
export const MaxWidth = styled.div`
  max-width: 880px;
  display: flex;
  flex-grow: 1;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const FooterButtons = styled.div`
  display: flex;
  padding: 24px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.08);
  background: white;
  width: 100%;
  justify-content: center;
`;

export const Label = styled.span`
  margin-bottom: 6px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  input {
    border-radius: 4px;
    border-color: #2b63e7;
    font-size: 16px;
    height: 24px;
  }
`;
