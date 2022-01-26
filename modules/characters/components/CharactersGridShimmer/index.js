import Shimmer from "@atoms/Shimmer";
import React from "react";
import * as S from "./styled";

export default function CharactersGridShimmer() {
  return (
    <S.ShimmersContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <Shimmer key={i} />
      ))}
    </S.ShimmersContainer>
  );
}
