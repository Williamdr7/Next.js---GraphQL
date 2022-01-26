import Button from "@atoms/Button";
import DropdownListItem from "@molecules/DropdownListItem";
import useOnClickOutside from "@hooks/useOnClickOutside";
import React, { useRef, useState } from "react";
import * as S from "./styled";
import Label from "@atoms/Label";
import { colors } from "@theme/styledSettings";

export default function IconDropdown({
  icon,
  options,
  handleChange,
  currentFilter,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.IconDropdownContainer ref={dropdownRef}>
      <Button
        aria-owns="menu"
        onClick={handleDropdown}
        aria-label="Abrir opções de filtragem"
      >
        {icon}
      </Button>
      {isOpen && (
        <S.DropdownOptionsContainer id="menu">
          {options.map((option) => (
            <>
              <DropdownListItem
                active={currentFilter === option.value}
                onClick={() => {
                  handleChange(option.value);
                  setIsOpen(!isOpen);
                }}
                label={option.label}
                icon={option.icon}
              />
            </>
          ))}
        </S.DropdownOptionsContainer>
      )}
    </S.IconDropdownContainer>
  );
}
