import { createContext, useCallback, useContext, useState } from "react";
import { loadCharacters } from "services/characters/loadCharacters";

const CharacterContext = createContext();

export function CharacterWrapper({ children }) {
  const [filteredList, setFilteredList] = useState([]);
  const [filteringPage, setFilteringPage] = useState(1);
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtering, setFiltering] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const makeSearch = async (
    newPage,
    newInputFilter,
    newSpeciesFilter,
    resetList
  ) => {
    if (newPage !== filteringPage && newPage !== 1) setPageLoading(true);
    else setLoading(true);

    if (newInputFilter || newSpeciesFilter) setFiltering(true);

    const result = await loadCharacters(
      newPage,
      newInputFilter,
      newSpeciesFilter
    );

    if (result.characters?.info.page < filteringPage) setHasMore(false);
    else setHasMore(true);

    if (result) {
      if (resetList) setFilteredList(result?.characters?.results);
      else registerFilteredCharacters(result);
    }

    setPageLoading(false);
    setLoading(false);
  };

  const registerCharacters = useCallback(({ characters }) => {
    if (characters) {
      setCharactersList((oldCharactersList) => [
        ...oldCharactersList,
        ...characters?.results,
      ]);
    }
  }, []);

  const registerFilteredCharacters = useCallback(({ characters }) => {
    if (characters) {
      setFilteredList((oldFilteredList) => [
        ...oldFilteredList,
        ...characters?.results,
      ]);
    }
  }, []);

  const makeLoadCharacters = async (updatedPage) => {
    setPageLoading(true);
    const result = await loadCharacters(updatedPage);
    if (result.characters?.info.page < currentPage) setHasMore(false);
    else setHasMore(true);

    setPageLoading(false);
    registerCharacters(result);
  };

  return (
    <CharacterContext.Provider
      value={{
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
        setPageLoading,
        hasMore,
        setHasMore,
        makeSearch,
        makeLoadCharacters,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacterContext() {
  return useContext(CharacterContext);
}
