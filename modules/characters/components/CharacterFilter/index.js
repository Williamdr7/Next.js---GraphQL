import React from "react";
import IconDropdown from "@organisms/IconDropdown";
import { ImUser } from "react-icons/im";
import { BiFilterAlt } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { RiAliensFill } from "react-icons/ri";
import { colors } from "@theme/styledSettings";

export default function CharacterFilters({ handleChange, currentFilter }) {
  return (
    <>
      <IconDropdown
        currentFilter={currentFilter}
        handleChange={handleChange}
        options={[
          {
            icon: <RiAliensFill size={18} color="gray" />,
            label: "Alien",
            value: "Alien",
          },
          {
            icon: <ImUser size={18} color="#9090ff" />,
            label: "Human",
            value: "Human",
          },
          {
            icon: (
              <GiWorld
                size={18}
                color={!currentFilter ? "#000" : colors["primary"]}
              />
            ),
            label: "All",
            value: "",
          },
        ]}
        icon={
          <BiFilterAlt
            style={{ cursor: "pointer" }}
            color={colors["primary"]}
            size={24}
          />
        }
      />
    </>
  );
}
