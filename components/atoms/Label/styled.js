import styled from "styled-components";

export const LabelContainer = styled.span(
  ({ theme: { textSizes }, size, color }) => `
  font-size: ${textSizes[size]};
  color: ${color};
  `
);
