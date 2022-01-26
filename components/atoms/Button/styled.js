import styled from "styled-components";

export const ButtonContainer = styled.button(
  ({ theme: { backgroundColors, textColors }, variant, fullWidth }) => `
  width: ${fullWidth ? "100%" : "auto"};
  background-color: ${backgroundColors[variant] || "transparent"};
  color: ${textColors[variant] || ""};
  border: 0;
  border-radius: 8px;
  `
);
