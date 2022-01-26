import React from "react";
import * as S from "./styled";

export default function Input({ onChange, makeSearch }) {
  return (
    <S.InputContainer>
      <S.InputElement
        placeholder="Que personagem gostaria de buscar?"
        onChange={onChange}
      />
      <S.InputSearchIcon
        onClick={makeSearch}
        aria-label="Buscar personagem digitado"
      />
    </S.InputContainer>
  );
}
