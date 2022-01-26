import React from "react";
import * as S from "./styled";

export default function Label({ text, size, color }) {
  return (
    <S.LabelContainer color={color} size={size}>
      {text}
    </S.LabelContainer>
  );
}
