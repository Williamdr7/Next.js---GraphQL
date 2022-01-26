import { ApolloClient, InMemoryCache } from "@apollo/client";
import { charactersQuery } from "@modules/characters/graphql/charactersQuery";
import { toast } from "react-toastify";

export const loadCharacters = async (
  pageNumber = 1,
  filterName = "",
  filterSpecies = ""
) => {
  try {
    const client = new ApolloClient({
      uri: "https://rickandmortyapi.com/graphql",
      cache: new InMemoryCache(),
    });

    const { data, errors } = await client.query({
      query: charactersQuery(pageNumber, filterName, filterSpecies),
    });

    return data;
  } catch (error) {
    if (!error.message.includes("Not Found"))
      toast.error("Ocorreu um erro inesperado, tente novamente");
    console.error(error);
    return { error };
  }
};
