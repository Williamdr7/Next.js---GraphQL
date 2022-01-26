import styled from "styled-components";

export const CharactersGridContainer = styled.div(
  ({ theme: { down, breakpoints } }) => `
  width: 85%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(223px, 1fr));
  gap: 20px;
  justify-content: center;
  margin: auto;

  ${down(breakpoints.md)} {
    grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));
    gap: 10px;
    width: 100%;
    padding: 16px;
  }
`
);
