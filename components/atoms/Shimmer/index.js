import React from "react";
import { Shimmer as PackageShimmer } from "react-shimmer";
import * as S from "./styled";

const Shimmer = ({ height, width, borderRadius }) => {
  return (
    <S.ShimmerWrapper borderRadius={borderRadius} height={height} width={width}>
      <PackageShimmer height={height} width={width} />
    </S.ShimmerWrapper>
  );
};

export default Shimmer;
