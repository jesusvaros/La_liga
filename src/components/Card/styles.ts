import styled from "styled-components";

export interface UserAvatarProps {
  src?: string;
  border?: boolean;
  shadow?: boolean;
  alt?: string;
}

export const CardWrapp = styled.div`
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 24px;
  padding-bottom: 36px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  flex: 0 1 25%;
  cursor: pointer;
  align-items: center;
  transition: transform 200ms;
  background-color: white;

  * + * {
    margin-top: 4px;
  }

  :hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 825px) {
    flex: 0 1 40%;

    padding-bottom: 24px;
  }
  @media screen and (max-width: 565px) {
    flex: 0 1 100%;

    padding-bottom: 24px;
  }
`;

export const UserIcon = styled.img<UserAvatarProps>`
  border-radius: 50%;
  object-fit: cover;
  pointer-events: none;
  background-color: white;
  height: 150px;
  width: 150px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 2px 0, rgba(0, 0, 0, 0.05) 0 0 4px 0;
  margin-bottom: auto;
`;

export const Text = styled.span<{ size?: number; weight?: number }>`
  font-size: 14px;
  ${({ size }) => size && `font-size:${size}px`};
  ${({ weight }) => weight && `font-weight:${weight}`};
`;
