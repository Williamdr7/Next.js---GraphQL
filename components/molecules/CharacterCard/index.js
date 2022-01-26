import Title from "components/atoms/Title";
import Image from "next/image";
import React, { useState } from "react";
import * as S from "./styled";

export default function CharacterCard({
  characterImage,
  characterTitle,
  ...props
}) {
  return (
    <S.CharacterContainer {...props}>
      <S.ImageContainer>
        <Image
          width={400}
          height={400}
          src={characterImage}
          alt={`Imagem da personagem ${characterTitle}`}
        />
      </S.ImageContainer>
      <Title variant="h5" text={characterTitle} />
    </S.CharacterContainer>
  );
}
