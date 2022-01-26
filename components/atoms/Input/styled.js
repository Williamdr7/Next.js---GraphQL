import styled from "styled-components";
import { RiSearch2Line } from "react-icons/ri";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
`;

export const InputElement = styled.input`
  color: ${({ theme }) => theme.colors["secondary"]};
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors["primary"]};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 12px;
    color: ${({ theme }) => theme.colors["secondary"]};
  }
`;

export const InputSearchIcon = styled(RiSearch2Line)`
  position: absolute;
  right: 2px;
  color: ${({ theme }) => theme.colors["primary"]};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors["secondary"]};
  }
`;
