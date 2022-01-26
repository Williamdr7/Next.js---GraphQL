import Shimmer from "@atoms/Shimmer";
import styled from "styled-components";

export const ShimmersContainer = styled.div(
  ({ theme: { up, down, breakpoints } }) => `
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(223px, 1fr));
    gap: 20px;
    justify-content: center;
    margin: auto;



    .shimmer{
      width: 100% !important;
      height: 100% !important;    
      background-size: 2203px 100% !important;
    }

    & > div {      
      margin: auto;
      margin-top: 16px;
      width: 100% !important;
      height: 223px !important;      
      border-radius: 8px;

      ${down(breakpoints.md)} {
        height: 156px !important;
      }

      ${up(breakpoints.md)} {
        width: 100%;
        height: 223px;
      }
    }
  
    ${down(breakpoints.md)} {
      grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));
      gap: 10px;
      width: 100%;
      padding: 16px;
    }
  `
);
