import styled from "styled-components";

export const ShimmerWrapper = styled.div`
  overflow: hidden;

  width: ${({ width }) => (width ? `${width}px` : `fit-content`)};
  height: ${({ height }) => (height ? `${height}px` : `fit-content`)};

  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : "4px"};
`;
