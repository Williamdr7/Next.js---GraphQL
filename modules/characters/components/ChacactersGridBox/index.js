import React, { useCallback, useMemo, useRef } from "react";
import CharacterCard from "@molecules/CharacterCard";
import CharactersGridShimmer from "../CharactersGridShimmer";
import * as S from "./styled";

export default function ChacactersGridBox({
  page,
  pageLoading,
  hasMore,
  charactersList,
  loading,
  updateList,
}) {
  const observer = useRef();
  const normaItemRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lastItemRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          updateList();
        }
      },
      [loading, hasMore, page, charactersList]
    );

    if (node) observer.current.observe(node);
  });

  const renderList = useMemo(() => {
    return charactersList.map((character, i) => {
      return (
        <div
          key={character.id}
          ref={i === page * 20 - 1 ? lastItemRef : normaItemRef}
        >
          <CharacterCard
            characterImage={character.image}
            characterTitle={`${character.name} - ${character.species}`}
          />
        </div>
      );
    });
  }, [charactersList, page, lastItemRef]);

  return (
    <>
      {charactersList?.length && !loading ? (
        <>
          <S.CharactersGridContainer>{renderList}</S.CharactersGridContainer>
          {pageLoading && <CharactersGridShimmer />}
        </>
      ) : (
        <CharactersGridShimmer />
      )}
    </>
  );
}
