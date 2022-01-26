import styled from "styled-components";

export const IconDropdownContainer = styled.div`
  display: flex;
  justify-content: right;
  min-width: 192px;
  position: relative;
  z-index: 1;
`;

export const DropdownOptionsContainer = styled.div`
  min-width: 100%;
  height: auto;
  position: absolute;
  padding: 16px 8px;
  right: 0;
  top: 30px;
  box-shadow: -2px 2px ${({ theme }) => theme.colors["primary"]};
  border-radius: 8px !important;
  background: #000;
  &:hover {
    cursor: pointer;
  }
`;
