import * as S from "./styled";
import Label from "@atoms/Label";
import React from "react";

export default function DropdownListItem({ label, icon, active, ...props }) {
  return (
    <S.DropdownItemContainer {...props} active={active} alignItems="center">
      {icon}
      <Label color={active ? "#000" : "#fff"} text={label} size="labelSmall" />
    </S.DropdownItemContainer>
  );
}
