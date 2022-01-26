import styled from "styled-components";

export const StyledFlexContainer = styled.div`
  ${({ alignItems, justifyContent }) => `
display: flex;
align-items: ${alignItems};
justify-content: ${justifyContent};
`}
`;
