import Image from "next/image";
import React from "react";
import noResultImage from "public/images/no_results.svg";
import * as S from "./styled";

export default function NoResultCard() {
  return (
    <S.NoResultContainer>
      <Image
        alt="Imagem indicando que nenhum resultado foi encontrado"
        src={noResultImage}
        width={710}
        height={525}
      />
    </S.NoResultContainer>
  );
}
