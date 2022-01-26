import styled from "styled-components";

export const CharacterContainer = styled.div(
  ({ theme: { up, down, breakpoints }, backgroundImage }) => `
  background: url(${backgroundImage}) center no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin: auto;
  width: 100% !important;
  position: relative;
  border-radius: 8px;  

  ${down(breakpoints.md)} {
    height: 156px;
  }
  ${up(breakpoints.md)} {
    height: 223px;
  }}

  & > div > h5  {
      display: none;            
  } 

  &:hover {
    img {
      filter: blur(2px);
      opacity: 0.5;
    }
    & > div > h5  {
      margin-bottom: 16px;
      display: block;          
    }   
  }`
);

export const ImageContainer = styled.div(
  ({ theme: { up, down, breakpoints } }) => `
  z-index: -1; 
  position: absolute;
  
  & > span {
    border-radius: 8px !important;

    ${down(breakpoints.md)} {
      width: 100%;
      height: 156px !important;
    }
    ${up(breakpoints.md)} {
      width: 100%;
      height: 223px !important;
    }
  }
`
);
