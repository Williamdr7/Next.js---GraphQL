import Input from "@atoms/Input";
import { useCharacterContext } from "contexts/CharacterContext";
import React, { useEffect, useState } from "react";
import ChacactersGridBox from "./components/ChacactersGridBox";
import CharacterFilters from "./components/CharacterFilter";
import Logo from "./components/Logo";
import NoResultCard from "./components/NoResultCard";
import * as S from "./styled";

export default function Characters({ characters }) {
  const {
    filteredList,
    setFilteredList,
    filteringPage,
    setFilteringPage,
    charactersList,
    setCharactersList,
    currentPage,
    setCurrentPage,
    filtering,
    setFiltering,
    loading,
    setLoading,
    pageLoading,
    hasMore,
    ...ctx
  } = useCharacterContext();
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [inputFilter, setInputFilter] = useState("");

  useEffect(() => {
    setCharactersList(characters);
    setLoading(false);
  }, [characters, setCharactersList, setLoading]);

  const handleInputFilterChange = ({ target: { value } }) => {
    setInputFilter(value);
    if (!value) setFiltering(false);
  };

  const handleSpeciesInputChange = (value) => {
    setSpeciesFilter(value);
    ctx.makeSearch(1, inputFilter, value, true);
    setFilteringPage(1);
    if (!value) setFiltering(false);
  };

  const handlePage = () => {
    if (filteredList?.length) {
      setFilteringPage(filteringPage + 1);
      ctx.makeSearch(filteringPage + 1, inputFilter, speciesFilter, false);
    } else {
      setCurrentPage(currentPage + 1);
      ctx.makeLoadCharacters(currentPage + 1);
    }
  };

  const handleSearch = () => {
    setFilteredList([]);
    setFilteringPage(1);
    setLoading(true);
    ctx.makeSearch(1, inputFilter, speciesFilter, true);
  };

  return (
    <>
      <Logo />
      <S.InputContainer>
        <Input
          value={inputFilter}
          onChange={handleInputFilterChange}
          makeSearch={handleSearch}
        />
      </S.InputContainer>
      <S.FilterContainer>
        <CharacterFilters
          currentFilter={speciesFilter}
          handleChange={handleSpeciesInputChange}
        />
      </S.FilterContainer>
      {((inputFilter || speciesFilter) && filteredList?.length) ||
      (!filtering && charactersList?.length) ||
      loading ? (
        <ChacactersGridBox
          updateList={handlePage}
          page={filteredList?.length ? filteringPage : currentPage}
          loading={loading}
          pageLoading={pageLoading}
          hasMore={hasMore}
          charactersList={filteredList?.length ? filteredList : charactersList}
        />
      ) : (
        <NoResultCard />
      )}
    </>
  );
}
