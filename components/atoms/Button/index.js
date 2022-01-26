import React from "react";
import * as S from "./styled";

export default function Button({ children, color, fullWidth, onClick }) {
  return (
    <S.ButtonContainer onClick={onClick} fullWidth={fullWidth} color={color}>
      {children}
    </S.ButtonContainer>
  );
}
