import styled from "styled-components";
import { StyledFlexContainer } from "@atoms/FlexContainer/styled";

export const LogoContainer = styled(StyledFlexContainer)(
  ({ theme: { down, breakpoints } }) => `
  width: 100%;
  height: auto;
  margin: auto;

  ${down(breakpoints.md)} {
  justify-content: center;

    width: 244px;
    height: 101px;
  }
`
);
