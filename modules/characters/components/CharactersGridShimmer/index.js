import Shimmer from "@atoms/Shimmer";
import React from "react";
import * as S from "./styled";

export default function CharactersGridShimmer() {
  return (
    <S.ShimmersContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <Shimmer width={100} height={100} key={i} />
      ))}
    </S.ShimmersContainer>
  );
}
