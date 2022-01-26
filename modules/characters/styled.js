import styled from "styled-components";
import { StyledFlexContainer } from "@atoms/FlexContainer/styled";

export const FilterContainer = styled(StyledFlexContainer)(
  ({ theme: { down, breakpoints } }) => `
    width: 85%;
    height: 24px;
    margin: 48px auto 16px auto;    
    justify-content: flex-end;
  
    ${down(breakpoints.md)} {
      margin: 0;
      width: 100%;
      
      & > div {
        position: absolute;
        right: 16px;
        top: 16px;
      }
   
    }
  `
);

export const InputContainer = styled(StyledFlexContainer)(
  ({ theme: { down, breakpoints } }) => `
    width: 32%;
    justify-content: flex-end;
    margin: 48px auto 0 auto;
  
    ${down(breakpoints.md)} {
      width: 100%;
      padding: 16px;
    }
  `
);
