import Characters from "@modules/characters";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { charactersQuery } from "@modules/characters/graphql/charactersQuery";
import Head from "next/head";

export default function Home({ characters }) {
  return (
    <>
      <Head>
        <title>Ricky and Morty</title>
        <meta
          name="description"
          content="Rick and Morty é uma série de animação..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Characters characters={characters} />
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: charactersQuery(1, "", ""),
  });

  return {
    props: {
      characters: data?.characters?.results,
    },
  };
}
