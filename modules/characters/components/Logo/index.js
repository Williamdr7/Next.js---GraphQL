import React from "react";
import Image from "next/image";
import logoImage from "public/images/logo.svg";
import * as S from "./styled";

export default function Logo() {
  return (
    <>
      <S.LogoContainer justifyContent="center">
        <Image
          width="409px"
          height="170px"
          alt='Logotipo com texto "Rick and Morty"'
          src={logoImage}
        />
      </S.LogoContainer>
    </>
  );
}
