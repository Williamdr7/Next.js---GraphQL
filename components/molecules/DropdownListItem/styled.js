import { StyledFlexContainer } from "@atoms/FlexContainer/styled";
import { colors } from "@theme/styledSettings";
import styled from "styled-components";

export const DropdownItemContainer = styled(StyledFlexContainer)`
  width: 100%;
  gap: 3px;
  height: 30px;
  border-radius: 4px;
  padding: 8px;
  background: ${({ active }) => (active ? colors["primary"] : "#000")};
`;
